import { FormGroup, FormControl, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken, Inject, Injectable, Component, EventEmitter, Output, Input, NgModule, ViewContainerRef, ComponentFactoryResolver, Compiler, Directive, defineInjectable, inject } from '@angular/core';
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
            var /** @type {?} */ formGroupPath = void 0;
            if (data.parentType == "array") ;
            else if (data.parentType == "group") {
                formGroupPath = parentPath;
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
            var /** @type {?} */ formGroup_1 = new FormGroup({});
            if (data.parentType == undefined) {
                parentPath = (/** @type {?} */ (data)).name;
            }
            else if (data.parentType == "array") {
                parentPath = parentPath + ".controls[" + ((/** @type {?} */ (data))).name + "]";
            }
            else if (data.parentType == "group") {
                parentPath = parentPath + ".controls." + ((/** @type {?} */ (data))).name;
            }
            (/** @type {?} */ (formGroup_1)).schema = data;
            (/** @type {?} */ (formGroup_1)).schema.path = parentPath;
            data.fields.forEach(function (item) {
                item.parentType = "group";
                formGroup_1.addControl(item.name, _this.createFrom(item, parentPath));
            });
            return formGroup_1;
        }
        else {
            var /** @type {?} */ formArray_1 = new FormArray([]);
            parentPath =
                parentPath == "" ? (/** @type {?} */ (data)).name : parentPath + ".controls." + ((/** @type {?} */ (data))).name;
            (/** @type {?} */ (formArray_1)).schema = data;
            (/** @type {?} */ (formArray_1)).schema.path = parentPath;
            data.fields.forEach(function (item, idx) {
                item.parentType = "array";
                item.name = idx.toString();
                formArray_1.controls.push(_this.createFrom(item, parentPath));
            });
            return formArray_1;
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
    password: TextComponent,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWZvcm0uanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2FkZC1mb3JtLmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZWRpdC1mb3JtLmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1saXN0LmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1maWVsZC12YWxpZGF0b3IubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2ZpZWxkLWNvbmZpZy5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1zY2hlbWEubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZm9ybS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvc2VydmljZXMvZm9ybS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvc2VydmljZXMvZm9ybS5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9lbWFpbC9lbWFpbC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2NvbG9yL2NvbG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2xpc3QuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvZmlsZS9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tdmlldy9mb3JtLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2xpc3QvbGlzdC5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1hcnJheS9mb3JtLWFycmF5LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0tY29udGFpbmVyL2VkaXQtZm9ybS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2FkZC9hZGQtZm9ybS9hZGQtZm9ybS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0vZWRpdC1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2Zvcm0tbGlzdC1jb250YWluZXIvZm9ybS1saXN0LmNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbGlzdC9mb3JtLWxpc3QvZm9ybS1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2FkZC9hZGQtZm9ybS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2xpc3QvbGlzdC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2VkaXQvZWRpdC1mb3JtLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZm9ybS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9mb3JtLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFkZEZvcm1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGZvcm06IGFueVtdO1xyXG5cdFx0ZXZlbnRzOiBhbnlbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRcdGZvcm06IHRoaXMuZm9ybSxcclxuXHRcdFx0XHRldmVudHM6IHRoaXMuZXZlbnRzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGZvcm06IG5ldyBGb3JtQ29udHJvbCh7fSksXHJcblx0XHRcdFx0ZXZlbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdGFjY2VwdDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqvDmMKow5jCqlwiKVxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRjYW5jZWw6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0XHRzaG93OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXcgRm9ybUNvbnRyb2woXCLDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIilcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdEZvcm1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGZvcm06IGFueVtdO1xyXG5cdFx0ZXZlbnRzOiBhbnlbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF9pZDogdGhpcy5faWQsXHJcblx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRcdGZvcm06IHRoaXMuZm9ybSxcclxuXHRcdFx0XHRldmVudHM6IHRoaXMuZXZlbnRzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGZvcm06IG5ldyBGb3JtQ29udHJvbCh7fSksXHJcblx0XHRcdFx0ZXZlbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdGFjY2VwdDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqvDmMKow5jCqlwiKVxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRjYW5jZWw6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0XHRzaG93OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXcgRm9ybUNvbnRyb2woXCLDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIilcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRm9ybUxpc3RBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHROYW1lOiBzdHJpbmc7XHJcblx0XHRDb250cm9sczogb2JqZWN0W107XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSBhcyBGb3JtTGlzdEFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdE5hbWU6IHRoaXMuTmFtZSxcclxuXHRcdFx0XHRDb250cm9sczogdGhpcy5Db250cm9sc1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbnRyb2xzOiBuZXcgRm9ybUdyb3VwKHt9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEZvcm1TY2hlbWFNb2RlbFtdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIHZhbGlkYXRpb24ge1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxuXHRtZXNzYWdlOiBzdHJpbmc7XHJcblx0dmFsdWU/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvciB7XHJcblx0cmVxdWlyZWQ6IHZhbGlkYXRpb247XHJcblx0bWlubGVuZ3RoOiB2YWxpZGF0aW9uO1xyXG5cdGVtYWlsOiB2YWxpZGF0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucmVxdWlyZWQgPSB7XHJcblx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdG1lc3NhZ2U6IFwiw5jCp8ObwozDmcKGIMOZwoHDm8KMw5nChMOYwq8gw5jCp8OZwoTDmMKyw5jCp8OZwoXDm8KMIMOYwqfDmMKzw5jCqlwiXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5taW5sZW5ndGggPSB7XHJcblx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdG1lc3NhZ2U6IFwiw5jCrcOYwq/DmMKnw5nCgsOZwoQgw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5rCqcOYwqfDmMKxw5rCqcOYwqrDmMKxw5nCh8OYwqdcIixcclxuXHRcdFx0dmFsdWU6IDVcclxuXHRcdH07XHJcblx0XHR0aGlzLmVtYWlsID0ge1xyXG5cdFx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0XHRtZXNzYWdlOiBcIsOZwoTDmMK3w5nCgcOYwqcgw5jCp8ObwozDmcKFw5vCjMOZwoQgw5jCtcOYwq3Dm8KMw5jCrSDDmcKIw5jCp8OYwrHDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCr1wiXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi9mb3JtLWZpZWxkLXZhbGlkYXRvci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkQ29uZmlnIHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdHR5cGU6IFwiZ3JvdXBcIiB8IFwiYXJyYXlcIiB8IFwiY29udHJvbFwiO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdWJ0eXBlOiBzdHJpbmc7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdHRpdGxlOiBzdHJpbmc7XHJcblx0cGFyZW50VHlwZT86IFwiYXJyYXlcIiB8IFwiZ3JvdXBcIjtcclxuXHRmb3JtR3JvdXBQYXRoPzogc3RyaW5nO1xyXG5cdHBhdGg/OiBzdHJpbmc7XHJcblx0aW5wdXRUeXBlOiBcInNlbGVjdFwiIHwgXCJ0ZXh0XCIgfCBcIm51bWJlclwiIHwgXCJlbWFpbFwiIHwgXCJjb2xvclwiIHwgXCJjaGVja2JveFwiIHwgXCJ0YWJsZVwiO1xyXG5cdHZhbHVlPzogYW55O1xyXG5cdG9yZGVyPzogbnVtYmVyO1xyXG5cdHdpZHRoPzogbnVtYmVyO1xyXG5cdG9wdGlvbnM6IHtcclxuXHRcdFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcblx0fVtdO1xyXG5cdGRhdGFFbmRwb2ludD86IHN0cmluZztcclxuXHRvcHRpb25zRW5kcG9pbnQ6IHN0cmluZztcclxuXHRmaWVsZHM/OiBGaWVsZENvbmZpZ1tdO1xyXG5cdHZhbGlkYXRvcjogVmFsaWRhdG9yO1xyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IFwiZ3JvdXBcIiB8IFwiYXJyYXlcIiB8IFwiY29udHJvbFwiKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0aWYgKHR5cGUgIT0gXCJjb250cm9sXCIpIHRoaXMuZmllbGRzID0gW107XHJcblx0XHR0aGlzLndpZHRoID0gMztcclxuXHRcdHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuL2ZpZWxkLWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1TY2hlbWFNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0Zm9ybTogRmllbGRDb25maWc7XHJcblx0ZXZlbnRzID0ge1xyXG5cdFx0YWNjZXB0OiB7XHJcblx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHR0ZXh0OiBcIsOYwqvDmMKow5jCqlwiXHJcblx0XHR9LFxyXG5cdFx0Y2FuY2VsOiB7XHJcblx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHR0ZXh0OiBcIsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSBuZXcgRmllbGRDb25maWcoXCJncm91cFwiKTtcclxuXHR9XHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuX2lkID0gKE1hdGgucmFuZG9tKCkgKiAxMCkudG9TdHJpbmcoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtTW9kdWxlQ29uZmlnIHtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRhZGRGb3JtOiBzdHJpbmc7XHJcblx0XHRlZGl0Rm9ybTogc3RyaW5nO1xyXG5cdFx0Z2V0Rm9ybTogc3RyaW5nO1xyXG5cdFx0Z2V0TGlzdDogc3RyaW5nO1xyXG5cdFx0ZGVsZXRlRm9ybTogc3RyaW5nO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRm9ybU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kL3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdGFkZEZvcm06IFwiXCIsXHJcblx0XHRlZGl0Rm9ybTogXCJcIixcclxuXHRcdGdldEZvcm06IFwiXCIsXHJcblx0XHRnZXRMaXN0OiBcIlwiLFxyXG5cdFx0ZGVsZXRlRm9ybTogXCJcIlxyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Rm9ybU1vZHVsZUNvbmZpZz4oXCJGb3JtTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0Rm9ybU1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybU1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9mb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vZm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uL21haW4tY29udGFpbmVyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1Db25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBGb3JtTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZ2V0Rm9ybU1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHVzZXJDb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIXVzZXJDb25maWcpIHJldHVybjtcclxuXHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB1c2VyQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCwgQWRkRm9ybUFwaU1vZGVsLCBFZGl0Rm9ybUFwaU1vZGVsLCBGb3JtTGlzdEFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9mb3JtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdGFkZChkYXRhOiBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmFkZEZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5hZGRGb3JtLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBBZGRGb3JtQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0fVxyXG5cdGdldChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXRGb3JtICE9IFwiXCIpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXRGb3JtLCB7IF9pZCB9KSlcclxuXHRcdFx0KVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogRWRpdEZvcm1BcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0Z2V0TGlzdCgpOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXRMaXN0ICE9IFwiXCIpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0TGlzdCkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBGb3JtTGlzdEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdH1cclxuXHR1cGRhdGUoZGF0YTogRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmVkaXRGb3JtICE9IFwiXCIpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucHV0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5lZGl0Rm9ybSwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0KVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogRWRpdEZvcm1BcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0ZGVsZXRlKF9pZDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdH1cclxuXHRzZWxlY3RGb3JtQnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGb3JtU2NoZW1hTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5mb3JtLmxpc3QuZGF0YSlcclxuXHRcdFx0LnBpcGUoZmlsdGVyKChmb3JtcykgPT4gZm9ybXMgIT0gbnVsbCksIG1hcCgoZm9ybXMpID0+IGZvcm1zLmZpbmQoKGZvcm0pID0+IGZvcm0uX2lkID09IF9pZCkpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKChmb3JtU2NoZW1hTW9kZWwpID0+IHN1YmplY3QubmV4dChmb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1zZWxlY3RcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIj5cclxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57e29wdGlvbi5rZXl9fTwvbWF0LW9wdGlvbj5cclxuICAgIDwvbWF0LXNlbGVjdD5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZCwgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLWNoZWNrYm94XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG4gICAgICAgIHt7Y29uZmlnLnRpdGxlfX1cclxuICAgIDwvbWF0LWNoZWNrYm94PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtZW1haWxcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICA8aW5wdXQgbWF0SW5wdXQgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLWNvbG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICA8aW5wdXQgbWF0SW5wdXQgW3R5cGVdPVwic2NoZW1hLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJzY2hlbWEudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInNjaGVtYS5uYW1lXCI+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC10YWJsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyIG1hdC1lbGV2YXRpb24tejhcIiAqbmdJZj1cInJlYWR5XCI+XHJcbiAgICA8bWF0LXRhYmxlICN0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XHJcbiAgXHJcbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic2VsZWN0XCI+XHJcbiAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIlxyXG4gICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiAhaXNBbGxTZWxlY3RlZCgpXCI+XHJcbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+XHJcbiAgICAgICAgICA8bWF0LWNoZWNrYm94IChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudCA/IHNlbGVjdGlvbi50b2dnbGUocm93KSA6IG51bGxcIlxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpXCI+XHJcbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L21hdC1jZWxsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbCBvZiBmaWxlZERpc3BsYXllZENvbHVtbnNcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICBbbWF0Q29sdW1uRGVmXT1cImNvbFwiPlxyXG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tjb2x9fSA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtjb2xdfX0gPC9tYXQtY2VsbD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+PC9tYXQtaGVhZGVyLWNlbGw+XHJcbiAgICAgICAgPG1hdC1jZWxsIGNsYXNzPSdsZWZ0LWFsaWduJyAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIsOYwqfDmcKGw5jCqsOYwq7DmMKnw5jCqFwiPmFycm93X2JhY2s8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2VsbD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgICAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9tYXQtaGVhZGVyLXJvdz5cclxuICAgICAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCIgKGNsaWNrKT1cInNlbGVjdGlvbi50b2dnbGUocm93KVwiPjwvbWF0LXJvdz5cclxuXHJcbiAgICA8L21hdC10YWJsZT5cclxuICA8L2Rpdj5cclxuXHJcblxyXG48IS0tIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gIFxyXG4gIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwic2NoZW1hLm5hbWVcIiBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuICBcclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7c2NoZW1hLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmVycm9ycz8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e3NjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuZW1haWw/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tzY2hlbWEudmFsaWRhdG9yLmVtYWlsLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG48L21hdC1mb3JtLWZpZWxkPiAtLT5cclxuICBcclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KHNjaGVtYS5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdHJlYWR5OiBib29sZWFuO1xyXG5cdGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cdGZpbGVkRGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XHJcblx0ZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPGFueT47XHJcblxyXG5cdHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRydWUsIFtdKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmh0dHAuZ2V0KHRoaXMuc2NoZW1hLmRhdGFFbmRwb2ludCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGRhdGEuZGlzcGxheWVkQ29sdW1ucztcclxuXHRcdFx0dGhpcy5maWxlZERpc3BsYXllZENvbHVtbnMgPSBkYXRhLmZpbGVkRGlzcGxheWVkQ29sdW1ucztcclxuXHRcdFx0dGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KGRhdGEuZGF0YVNvdXJjZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXHJcblx0aXNBbGxTZWxlY3RlZCgpIHtcclxuXHRcdGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xyXG5cdFx0dGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRbdGhpcy5zY2hlbWEubmFtZV06IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XHJcblx0XHRyZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XHJcblx0fVxyXG5cclxuXHQvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xyXG5cdG1hc3RlclRvZ2dsZSgpIHtcclxuXHRcdHRoaXMuaXNBbGxTZWxlY3RlZCgpID8gdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtbnVtYmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLXRleHRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuXHJcbiAgPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/LnJlcXVpcmVkXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IucmVxdWlyZWQubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPCEtLSA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lbWFpbD8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IuZW1haWwubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+IC0tPlxyXG5cclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChjb25maWcubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoY29uZmlnLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KGNvbmZpZy5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPlxyXG5cclxuPC9tYXQtZm9ybS1maWVsZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRm9ybXNMaXN0QWN0aW9uVHlwZXMge1xyXG5cdEZPUk1TX0xJU1QgPSBcIltGT1JNXVtMSVNUXSBGT1JNU19MSVNUXCIsXHJcblx0Rk9STVNfTElTVF9TVEFSVCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfU1RBUlRcIixcclxuXHRGT1JNU19MSVNUX1NVQ0NFRUQgPSBcIltGT1JNXVtMSVNUXSBGT1JNU19MSVNUX1NVQ0NFRURcIixcclxuXHRGT1JNU19MSVNUX0ZBSUxFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfRkFJTEVEXCIsXHJcblx0QUREX0ZPUk1fU0NIRU1BID0gXCJbRk9STV1bTElTVF0gQUREX0ZPUk1fU0NIRU1BXCIsXHJcblx0Rk9STV9TQ0hFTUFfVVBEQVRFID0gXCJbRk9STV1bTElTVF0gRk9STV9TQ0hFTUFfVVBEQVRFXCIsXHJcblx0R0VUX0ZPUk1fU0NIRU1BID0gXCJbRk9STV1bTElTVF0gR0VUX0ZPUk1fU0NIRU1BXCIsXHJcblx0Rk9STV9TQ0hFTUFfRkVUQ0hFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1fU0NIRU1BX0ZFVENIRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9VUERBVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVNjaGVtYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkFERF9GT1JNX1NDSEVNQTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRGb3JtU2NoZW1hQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuR0VUX0ZPUk1fU0NIRU1BO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1TY2hlbWFGZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEZvcm1zTGlzdEFjdGlvbnMgPVxyXG5cdHwgRm9ybXNMaXN0QWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgRm9ybXNMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgRm9ybXNMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBBZGRGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBHZXRGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBGb3JtU2NoZW1hRmVjaGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtZGF0ZVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGwgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG5cclxuICA8IS0tIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwiY29uZmlnLm5hbWVcIiBbdHlwZV09XCJjb25maWcuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj4gLS0+XHJcbiAgPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFttYXREYXRlcGlja2VyXT1cIl9kYXRlcGlja2VyXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj5cclxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cIl9kYXRlcGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgPG1hdC1kYXRlcGlja2VyICNfZGF0ZXBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/LnJlcXVpcmVkXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IucmVxdWlyZWQubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPCEtLSA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lbWFpbD8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IuZW1haWwubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+IC0tPlxyXG5cclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChjb25maWcubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoY29uZmlnLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KGNvbmZpZy5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPlxyXG5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbjwhLS0gXHJcblxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IFtAZmlsZWRBbmltYXRpb25dPVwibW9kZVwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZpdFwiIFsobmdDbGFzcyldPVwibW9kZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiX2RhdGVwaWNrZXJcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xOYW1lXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiX2RhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNfZGF0ZXBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInRvb2x0aXAgbWQtMThcIiAqbmdJZj1cInRvb2x0aXBcIiBbbWF0VG9vbHRpcF09XCJ0b29sdGlwXCI+aGVscDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtYm94XCI+IFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19IDpcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICAgICAge3soRGlzcGxheVZhbHVlJCB8IGFzeW5jIHwgcGVyc2lhbkRhdGUpfX0gXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb25maWcsIEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1maWxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleEZpbGwgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG5cclxuICA8IS0tIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwiY29uZmlnLm5hbWVcIiBbdHlwZV09XCJjb25maWcuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj4gLS0+XHJcbiAgPGlucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/LnJlcXVpcmVkXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IucmVxdWlyZWQubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPCEtLSA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lbWFpbD8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IuZW1haWwubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+IC0tPlxyXG5cclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChjb25maWcubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoY29uZmlnLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KGNvbmZpZy5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPlxyXG5cclxuPC9kaXY+XHJcblxyXG48IS0tIFxyXG5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBbQGZpbGVkQW5pbWF0aW9uXT1cIm1vZGVcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmaXRcIiBbKG5nQ2xhc3MpXT1cIm1vZGVcIj5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cIl9kYXRlcGlja2VyXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sTmFtZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cIl9kYXRlcGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjX2RhdGVwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJ0b29sdGlwIG1kLTE4XCIgKm5nSWY9XCJ0b29sdGlwXCIgW21hdFRvb2x0aXBdPVwidG9vbHRpcFwiPmhlbHA8L21hdC1pY29uPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlLWJveFwiPiBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICB7eyBwbGFjZWhvbGRlciB9fSA6XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgIHt7KERpc3BsYXlWYWx1ZSQgfCBhc3luYyB8IHBlcnNpYW5EYXRlKX19IFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiAtLT5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Vmlld0NoaWxkLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdENvbXBpbGVyLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHROZ01vZHVsZSxcclxuXHRJbnB1dCxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG5cdE9uQ2hhbmdlcyxcclxuXHREaXJlY3RpdmUsXHJcblx0VHlwZSxcclxuXHRPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNlbGVjdENvbXBvbmVudCxcclxuXHRFbWFpbENvbXBvbmVudCxcclxuXHRDb2xvckNvbXBvbmVudCxcclxuXHRDaGVja2JveENvbXBvbmVudCxcclxuXHRUZXh0Q29tcG9uZW50LFxyXG5cdFRhYmxlQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHNcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHZXRGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZywgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBEYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xzL2RhdGUvZGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vZm9ybS1jb250cm9scy9maWxlL2ZpbGUuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8Zm9ybSAqbmdJZj1cImZvcm1Hcm91cENyZWF0ZWQgJiYgY2FyZFwiIGNsYXNzPVwibmdzLWR5bmFtaWMtZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImFjY2VwdGVkKClcIj5cclxuICA8bWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIHt7KHNjaGVtYSQgfCBhc3luYyk/Lm5hbWV9fVxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgPGRpdiAgKm5nRm9yPVwibGV0IGZpZWxkIG9mIChzY2hlbWEkIHwgYXN5bmMpPy5mb3JtLmZpZWxkcztcIiBbZnhGbGV4XT1cImZpZWxkLndpZHRoICogMTBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIGR5bmFtaWNGaWVsZCAgW2NvbmZpZ109XCJmaWVsZFwiIFtncm91cF09XCJmb3JtR3JvdXBcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwuc2hvd1wiIChjbGljayk9XCJjYW5jZWwuZW1pdCgpXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuY2FuY2VsLnRleHR9fTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5hY2NlcHQuc2hvd1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPnt7KHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5hY2NlcHQudGV4dH19PC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Zvcm0+XHJcblxyXG48Zm9ybSAqbmdJZj1cImZvcm1Hcm91cENyZWF0ZWQgJiYgIWNhcmRcIiBjbGFzcz1cIm5ncy1keW5hbWljLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJhY2NlcHRlZCgpXCI+XHJcbiAgPGRpdj5cclxuICAgIDxoMz5cclxuICAgICAge3soc2NoZW1hJCB8IGFzeW5jKT8ubmFtZX19XHJcbiAgICA8L2gzPlxyXG4gICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgIDxkaXYgICpuZ0Zvcj1cImxldCBmaWVsZCBvZiAoc2NoZW1hJCB8IGFzeW5jKT8uZm9ybS5maWVsZHM7XCIgW2Z4RmxleF09XCJmaWVsZC53aWR0aCAqIDEwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBkeW5hbWljRmllbGQgIFtjb25maWddPVwiZmllbGRcIiBbZ3JvdXBdPVwiZm9ybUdyb3VwXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cIihzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuY2FuY2VsLnNob3dcIiAoY2xpY2spPVwiY2FuY2VsLmVtaXQoKVwiIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmNhbmNlbC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgKm5nSWY9XCIoc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC5zaG93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC50ZXh0fX08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0QE91dHB1dCgpIGFjY2VwdCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xyXG5cdEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcclxuXHRASW5wdXQoKSBsb2NhbDtcclxuXHRASW5wdXQoKSBjYXJkID0gZmFsc2U7XHJcblx0QElucHV0KClcclxuXHRzZXQgaWQoaWQ6IHN0cmluZykge1xyXG5cdFx0aWYgKCF0aGlzLmxvY2FsKSB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRGb3JtU2NoZW1hQWN0aW9uKGlkKSk7XHJcblx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0LnNlbGVjdEZvcm1CeUlkKGlkKVxyXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NoZW1hID0+IHRoaXMuc2NoZW1hJC5uZXh0KHNjaGVtYSkpO1xyXG5cdH1cclxuXHRASW5wdXQoKVxyXG5cdHNldCBzY2hlbWEoc2NoZW1hOiBGb3JtU2NoZW1hTW9kZWwpIHtcclxuXHRcdHRoaXMuc2NoZW1hJC5uZXh0KHNjaGVtYSk7XHJcblx0fVxyXG5cdF9pZDogc3RyaW5nO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGZvcm1Hcm91cENyZWF0ZWQgPSBmYWxzZTtcclxuXHRzY2hlbWEkOiBCZWhhdmlvclN1YmplY3Q8Rm9ybVNjaGVtYU1vZGVsPjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+XHJcblx0KSB7XHJcblx0XHR0aGlzLnNjaGVtYSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnNjaGVtYSQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpLnN1YnNjcmliZShzY2hlbWEgPT4ge1xyXG5cdFx0XHRpZiAoIXNjaGVtYSkgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuY3JlYXRlRnJvbShzY2hlbWEuZm9ybSkgYXMgRm9ybUdyb3VwO1xyXG5cdFx0XHRpZiAoIXNjaGVtYS5mb3JtLm5hbWUpIHJldHVybjtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXBDcmVhdGVkID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHRnZW5lcmF0ZShzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUZyb20oZGF0YTogRmllbGRDb25maWcsIHBhcmVudFBhdGggPSBcIlwiKTogQWJzdHJhY3RDb250cm9sIHtcclxuXHRcdGlmIChkYXRhLnR5cGUgPT0gXCJjb250cm9sXCIpIHtcclxuXHRcdFx0bGV0IGZvcm1Hcm91cFBhdGg7XHJcblx0XHRcdGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJhcnJheVwiKSB7XHJcblx0XHRcdFx0Ly8gcGFyZW50UGF0aCA9IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzWyR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9XWA7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGF0YS5wYXJlbnRUeXBlID09IFwiZ3JvdXBcIikge1xyXG5cdFx0XHRcdGZvcm1Hcm91cFBhdGggPSBwYXJlbnRQYXRoO1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9scy4keyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfWA7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgdmFsaWRhdG9ycyA9IFtdO1xyXG5cdFx0XHRpZiAoZGF0YS52YWxpZGF0b3IucmVxdWlyZWQgJiYgZGF0YS52YWxpZGF0b3IucmVxdWlyZWQuYWN0aXZlKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhLnZhbGlkYXRvci5taW5sZW5ndGggJiYgZGF0YS52YWxpZGF0b3IubWlubGVuZ3RoLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChkYXRhLnZhbGlkYXRvci5taW5sZW5ndGgudmFsdWUpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGF0YS52YWxpZGF0b3IuZW1haWwgJiYgZGF0YS52YWxpZGF0b3IuZW1haWwuYWN0aXZlKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMuZW1haWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGN0ciA9IG5ldyBGb3JtQ29udHJvbChkYXRhLnZhbHVlLCB2YWxpZGF0b3JzKTtcclxuXHRcdFx0KGN0ciBhcyBhbnkpLnNjaGVtYSA9IGRhdGE7XHJcblx0XHRcdChjdHIgYXMgYW55KS5zY2hlbWEucGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdChjdHIgYXMgYW55KS5zY2hlbWEuZm9ybUdyb3VwUGF0aCA9IGZvcm1Hcm91cFBhdGg7XHJcblx0XHRcdHJldHVybiBjdHI7XHJcblx0XHR9IGVsc2UgaWYgKGRhdGEudHlwZSA9PSBcImdyb3VwXCIpIHtcclxuXHRcdFx0Y29uc3QgZm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XHJcblx0XHRcdGlmIChkYXRhLnBhcmVudFR5cGUgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IChkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImFycmF5XCIpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHNbJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1dYDtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0KGZvcm1Hcm91cCBhcyBhbnkpLnNjaGVtYSA9IGRhdGE7XHJcblx0XHRcdChmb3JtR3JvdXAgYXMgYW55KS5zY2hlbWEucGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdGRhdGEuZmllbGRzLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0aXRlbS5wYXJlbnRUeXBlID0gXCJncm91cFwiO1xyXG5cdFx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGl0ZW0ubmFtZSwgdGhpcy5jcmVhdGVGcm9tKGl0ZW0sIHBhcmVudFBhdGgpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBmb3JtR3JvdXA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBmb3JtQXJyYXk6IEZvcm1BcnJheSA9IG5ldyBGb3JtQXJyYXkoW10pO1xyXG5cdFx0XHRwYXJlbnRQYXRoID1cclxuXHRcdFx0XHRwYXJlbnRQYXRoID09IFwiXCIgPyAoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZSA6IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0KGZvcm1BcnJheSBhcyBhbnkpLnNjaGVtYSA9IGRhdGE7XHJcblx0XHRcdChmb3JtQXJyYXkgYXMgYW55KS5zY2hlbWEucGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdGRhdGEuZmllbGRzLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xyXG5cdFx0XHRcdGl0ZW0ucGFyZW50VHlwZSA9IFwiYXJyYXlcIjtcclxuXHRcdFx0XHRpdGVtLm5hbWUgPSBpZHgudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRmb3JtQXJyYXkuY29udHJvbHMucHVzaCh0aGlzLmNyZWF0ZUZyb20oaXRlbSwgcGFyZW50UGF0aCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZvcm1BcnJheTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFjY2VwdGVkKCkge1xyXG5cdFx0dGhpcy5hY2NlcHQuZW1pdCh0aGlzLmZvcm1Hcm91cCk7XHJcblx0fVxyXG5cdGNhbmNlbGVkKCkge1xyXG5cdFx0dGhpcy5jYW5jZWwuZW1pdCh0aGlzLmZvcm1Hcm91cCk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzOiB7IFt0eXBlOiBzdHJpbmddOiBUeXBlPEZpZWxkPiB9ID0ge1xyXG5cdGNoZWNrYm94OiBDaGVja2JveENvbXBvbmVudCxcclxuXHR0ZXh0OiBUZXh0Q29tcG9uZW50LFxyXG5cdHBhc3N3b3JkOiBUZXh0Q29tcG9uZW50LFxyXG5cdGRhdGU6IERhdGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdGZpbGU6IEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdHRhYmxlOiBUYWJsZUNvbXBvbmVudCxcclxuXHRjb2xvcjogQ29sb3JDb21wb25lbnQsXHJcblx0ZW1haWw6IEVtYWlsQ29tcG9uZW50LFxyXG5cdHNlbGVjdDogU2VsZWN0Q29tcG9uZW50XHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbZHluYW1pY0ZpZWxkXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBGaWVsZCwgT25DaGFuZ2VzLCBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGNvbmZpZzogRmllbGRDb25maWc7XHJcblxyXG5cdEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPEZpZWxkPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge31cclxuXHJcblx0bmdPbkNoYW5nZXMoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGlmICghY29tcG9uZW50c1t0aGlzLmNvbmZpZy5pbnB1dFR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXMoY29tcG9uZW50cykuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0aGlzLmNvbmZpZy5pbnB1dFR5cGV9KS5cclxuXHRcdCAgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8RmllbGQ+KGNvbXBvbmVudHNbdGhpcy5jb25maWcuaW5wdXRUeXBlXSk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XHJcblx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3Jtc0xpc3RBY3Rpb25UeXBlcywgRm9ybXNMaXN0QWN0aW9ucyB9IGZyb20gXCIuL2xpc3QuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IEZvcm1TY2hlbWFNb2RlbFtdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IFtdXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEZvcm1zTGlzdEFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9VUERBVEU6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkFERF9GT1JNX1NDSEVNQToge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STV9TQ0hFTUFfRkVUQ0hFRDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgKiBhcyBsaXN0IGZyb20gXCIuLi9saXN0L2xpc3QucmVkdWNlcnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVN0YXRlIHtcclxuXHRsaXN0OiBsaXN0LlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybVJlZHVjZXJzID0ge1xyXG5cdGxpc3Q6IGxpc3QucmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYWluQ29udGFpbmVyU3RhdGUge1xyXG5cdFwiZm9ybVwiOiBGb3JtU3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1mb3JtLWdyb3VwXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQ+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcblxyXG4gICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiIW5vSGVhZGVyXCI+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS5uYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIiFub0hlYWRlclwiPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEudGl0bGVcIiBwbGFjZWhvbGRlcj1cIsOYwrnDmcKGw5nCiMOYwqfDmcKGXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24tcm93XCI+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYSlcIj4gYWRkRm9ybUdyb3VwIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1BcnJheShzY2hlbWEpXCI+IGFkZEZvcm1BcnJheSA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQ29udHJvbChzY2hlbWEpXCI+YWRkRm9ybUNvbnRyb2w8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHNjaGVtYS5maWVsZHM7bGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XHJcbiAgICAgICAgPGFwcC1mb3JtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1ncm91cD5cclxuICAgICAgICA8IS0tIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tYXJyYXk+IC0tPlxyXG4gICAgICAgIDxhcHAtZm9ybS1jb250cm9sICpuZ1N3aXRjaENhc2U9XCInY29udHJvbCdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCIgKGRlbGV0ZSk9XCJkZWxldGVGb3JtR3JvdXAoaSlcIj48L2FwcC1mb3JtLWNvbnRyb2w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuPC9tYXQtY2FyZD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXBDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0QElucHV0KCkgbm9IZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRAT3V0cHV0KCkgY2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Y2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KCk7XHJcblx0fVxyXG5cclxuXHRhZGRGb3JtR3JvdXAocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGdyb3VwID0gbmV3IEZpZWxkQ29uZmlnKFwiZ3JvdXBcIik7XHJcblx0XHRncm91cC5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goZ3JvdXApO1xyXG5cdFx0dGhpcy5zY2hlbWEuaWQgPSB0aGlzLnNjaGVtYS5pZCArIDE7XHJcblx0XHRyZXR1cm4gZ3JvdXA7XHJcblx0fVxyXG5cdGFkZEZvcm1BcnJheShyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgYXJyYXkgPSBuZXcgRmllbGRDb25maWcoXCJhcnJheVwiKTtcclxuXHRcdGFycmF5LmZpZWxkcyA9IFtdO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChhcnJheSk7XHJcblx0XHRyZXR1cm4gYXJyYXk7XHJcblx0fVxyXG5cdGFkZEZvcm1Db250cm9sKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gbmV3IEZpZWxkQ29uZmlnKFwiY29udHJvbFwiKTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goY29udHJvbCk7XHJcblx0XHRyZXR1cm4gY29udHJvbDtcclxuXHR9XHJcblx0ZGVsZXRlRm9ybUdyb3VwKGlkeDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnNjaGVtYS5maWVsZHMuc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1mb3JtLWFycmF5XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQ+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtR3JvdXAoc2NoZW1hKVwiPmFkZEZvcm1Hcm91cDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1BcnJheShzY2hlbWEpXCI+YWRkRm9ybUFycmF5PC9idXR0b24+XHJcbiAgICAgIDwhLS0gPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQ29udHJvbChzY2hlbWEpXCI+YWRkRm9ybUNvbnRyb2w8L2J1dHRvbj4gLS0+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2Ygc2NoZW1hLmZpZWxkc1wiPlxyXG4gICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XHJcbiAgICAgICAgPGFwcC1mb3JtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgICAgPGFwcC1mb3JtLWFycmF5ICpuZ1N3aXRjaENhc2U9XCInYXJyYXknXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tYXJyYXk+XHJcbiAgICAgICAgPCEtLSA8YXBwLWZvcm0tY29udHJvbCAqbmdTd2l0Y2hDYXNlPVwiJ2NvbnRyb2wnXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgkZXZlbnQpXCI+PC9hcHAtZm9ybS1jb250cm9sPiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuPC9tYXQtY2FyZD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQXJyYXlDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5jaGFuZ2VzLmVtaXQoKTtcclxuXHR9XHJcblxyXG5cdGFkZEZvcm1Hcm91cChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgZ3JvdXAgPSBuZXcgRmllbGRDb25maWcoXCJncm91cFwiKTtcclxuXHRcdGdyb3VwLmZpZWxkcyA9IFtdO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChncm91cCk7XHJcblx0XHRyZXR1cm4gZ3JvdXA7XHJcblx0fVxyXG5cdGFkZEZvcm1BcnJheShyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgYXJyYXkgPSBuZXcgRmllbGRDb25maWcoXCJhcnJheVwiKTtcclxuXHRcdGFycmF5LmZpZWxkcyA9IFtdO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChhcnJheSk7XHJcblx0XHRyZXR1cm4gYXJyYXk7XHJcblx0fVxyXG5cdGFkZEZvcm1Db250cm9sKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gbmV3IEZpZWxkQ29uZmlnKFwiY29udHJvbFwiKTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goY29udHJvbCk7XHJcblx0XHRyZXR1cm4gY29udHJvbDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1mb3JtLWNvbnRyb2xcIixcclxuXHR0ZW1wbGF0ZTogYCAgPG1hdC1leHBhbnNpb24tcGFuZWw+XHJcbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlbGV0ZS5lbWl0KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCIgaWNvbi1idXR0b25cIj5kZWxldGVfZm9yZXZlcjwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7e3NjaGVtYS5uYW1lfX1cclxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XHJcbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLm5hbWVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICBcclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS50aXRsZVwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgXHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInNjaGVtYS5pbnB1dFR5cGVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiSW5wdXQgVHlwZVwiPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0YWJsZVwiPnRhYmxlPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5zZWxlY3Q8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJudW1iZXJcIj5udW1iZXI8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImVtYWlsXCI+ZW1haWw8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNvbG9yXCI+Y29sb3I8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+cmFkaW88L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Y2hlY2tib3g8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLnZhbHVlXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIlZhbHVlXCIvPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICBcclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInNjaGVtYS53aWR0aFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJ3aWR0aFwiPlxyXG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB3aWR0aFwiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgIDxkaXYgKm5nSWY9XCJzY2hlbWEuaW5wdXRUeXBlPT0ndGFibGUnXCIgW2Zvcm1Hcm91cF09XCJ0YWJsZU9wdGlvbnNcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJkYXRhRW5kcG9pbnRcIiBwbGFjZWhvbGRlcj1cImRhdGFFbmRwb2ludFwiLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgKm5nSWY9XCJzY2hlbWEuaW5wdXRUeXBlPT0nc2VsZWN0J1wiPlxyXG4gICAgICAgIFtvcHRpb25zXVxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZE9wdGlvbigpXCI+KzwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImluc2VydE9wdGlvbnMoKVwiPmluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zLmNvbnRyb2xzO2luZGV4IGFzIGlcIj5cclxuICAgICAgICAgIHt7aX19XHJcbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwib3B0aW9ucy5jb250cm9sc1tpXVwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwia2V5XCIgcGxhY2Vob2xkZXI9XCJrZXlcIi8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJ2YWx1ZVwiIHBsYWNlaG9sZGVyPVwidmFsdWVcIi8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiAgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLnJlcXVpcmVkLmFjdGl2ZVwiPsOYwqfDmMKsw5jCqMOYwqfDmMKxw5vCjDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IucmVxdWlyZWQubWVzc2FnZVwiICBwbGFjZWhvbGRlcj1cIsOZwr7Dm8KMw5jCusOYwqfDmcKFXCIvPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiAgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLmVtYWlsLmFjdGl2ZVwiPsOYwqfDm8KMw5nChcObwozDmcKEPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlXCIgIHBsYWNlaG9sZGVyPVwiw5nCvsObwozDmMK6w5jCp8OZwoVcIi8+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiAgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLm1pbmxlbmd0aC5hY3RpdmVcIj7DmMKtw5jCr8OYwqfDmcKCw5nChCDDmMKqw5jCucOYwq/DmMKnw5jCryDDmsKpw5jCp8OYwrHDmMKnw5rCqcOYwqrDmMKxPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZVwiICBwbGFjZWhvbGRlcj1cIsOZwr7Dm8KMw5jCusOYwqfDmcKFXCIvPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLm1pbmxlbmd0aC52YWx1ZVwiICBwbGFjZWhvbGRlcj1cIsOYwqrDmMK5w5jCr8OYwqfDmMKvIMOYwq3DmMKvw5jCp8OZwoLDmcKEIMOawqnDmMKnw5jCscOYwqfDmsKpw5jCqsOYwrFcIi8+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgICBcclxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0d2lkdGggPSBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwIF07XHJcblx0b3B0aW9ucyA9IG5ldyBGb3JtQXJyYXkoW1xyXG5cdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGtleTogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdHZhbHVlOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0fSlcclxuXHRdKTtcclxuXHR0YWJsZU9wdGlvbnMgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGRhdGFFbmRwb2ludDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0fSk7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjaGFuZ2VkKCkge1xyXG5cdFx0aWYgKFsgdGhpcy5zY2hlbWEubmFtZSwgdGhpcy5zY2hlbWEudGl0bGUsIHRoaXMuc2NoZW1hLmlucHV0VHlwZSBdLnNvbWUoaXRlbSA9PiAhaXRlbSkpIHJldHVybiB0cnVlO1xyXG5cdFx0aWYgKHRoaXMuc2NoZW1hLmlucHV0VHlwZSA9PSBcInRhYmxlXCIpIHtcclxuXHRcdFx0dGhpcy5zY2hlbWEub3B0aW9ucyA9IHRoaXMudGFibGVPcHRpb25zLnZhbHVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjaGVtYS5pbnB1dFR5cGUgPT0gXCJzZWxlY3RcIikge1xyXG5cdFx0XHR0aGlzLnNjaGVtYS5vcHRpb25zID0gdGhpcy5vcHRpb25zLnZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jaGFuZ2VzLmVtaXQoKTtcclxuXHR9XHJcblxyXG5cdGFkZE9wdGlvbigpIHtcclxuXHRcdHRoaXMub3B0aW9ucy5wdXNoKFxyXG5cdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRrZXk6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdHZhbHVlOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0cmVtb3ZlT3B0aW9uKGkpIHtcclxuXHRcdHRoaXMub3B0aW9ucy5jb250cm9scy5zcGxpY2UoaSwgMSk7XHJcblx0fVxyXG5cdGluc2VydE9wdGlvbnMoKSB7XHJcblx0XHR0aGlzLnNjaGVtYS5vcHRpb25zID0gdGhpcy5vcHRpb25zLnZhbHVlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRGb3JtQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfRk9STSA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STVwiLFxyXG5cdEVESVRfRk9STV9TVEFSVCA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STV9TVEFSVFwiLFxyXG5cdEVESVRfRk9STV9TVUNDRUVEID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX1NVQ0NFRURcIixcclxuXHRFRElUX0ZPUk1fRkFJTEVEID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0Rm9ybUFjdGlvbnMgPSBFZGl0Rm9ybUFjdGlvbiB8IEVkaXRGb3JtU3RhcnRBY3Rpb24gfCBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24gfCBFZGl0Rm9ybUZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBBZGRGb3JtQWN0aW9uVHlwZXMge1xyXG5cdEFERF9GT1JNID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9QUk9GSUxFXCIsXHJcblx0QUREX0ZPUk1fU1RBUlQgPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX1NUQVJUXCIsXHJcblx0QUREX0ZPUk1fU1VDQ0VFRCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fU1VDQ0VFRFwiLFxyXG5cdEFERF9GT1JNX0ZBSUxFRCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1TdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1GYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBZGRGb3JtQWN0aW9ucyA9IEFkZEZvcm1BY3Rpb24gfCBBZGRGb3JtU3RhcnRBY3Rpb24gfCBBZGRGb3JtU3VjY2VlZEFjdGlvbiB8IEFkZEZvcm1GYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uLy4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUFjdGlvbiB9IGZyb20gXCIuLi9hZGQtZm9ybS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1TY2hlbWFBY3Rpb24sIFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGlzdC9saXN0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxuZ3MtZm9ybS1hZGQgXHJcblx0XHRcdFx0XHRbc2NoZW1hXT1cInNjaGVtYVwiIFxyXG5cdFx0XHRcdFx0KGNoYW5nZXMpPVwidXBkYXRlX3NjaGVtYSgkZXZlbnQpXCIgXHJcblx0XHRcdFx0XHQoc3VibWl0ZWQpPWFkZCgkZXZlbnQpXHJcblx0XHRcdFx0PjwvbmdzLWZvcm0tYWRkPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHNjaGVtYTogRm9ybVNjaGVtYU1vZGVsO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPiwgcHVibGljIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zY2hlbWEgPSBuZXcgRm9ybVNjaGVtYU1vZGVsKCk7XHJcblx0XHR0aGlzLnNjaGVtYS5pbml0KCk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGRGb3JtU2NoZW1hQWN0aW9uKHRoaXMuc2NoZW1hKSk7XHJcblx0fVxyXG5cdGFkZChmb3JtOiBGb3JtU2NoZW1hTW9kZWwpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZEZvcm1BY3Rpb24oZm9ybSkpO1xyXG5cdH1cclxuXHR1cGRhdGVfc2NoZW1hKGZvcm06IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbihmb3JtKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1BcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2VkaXQvZWRpdC1mb3JtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hZGQvYWRkLWZvcm0tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEdldEZvcm1TY2hlbWFBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGlzdC9saXN0LmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGVkaXQtZm9ybVxyXG5cdFx0XHRcdFx0W2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG5cdFx0XHRcdFx0W3NjaGVtYV09XCJzY2hlbWFcIlxyXG5cdFx0XHRcdFx0KGNoYW5nZXMpPVwidXBkYXRlX3NjaGVtYSgkZXZlbnQpXCJcclxuXHRcdFx0XHRcdChzdWJtaXRlZCk9XCJ1cGRhdGUoJGV2ZW50KVwiPlxyXG5cdFx0XHRcdDwvZWRpdC1mb3JtPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwID0gRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwdWJsaWMgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHN1cGVyKHN0b3JlLCBzZXJ2aWNlKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXNcclxuXHRcdFx0Lm1hcCgocGFyYW1zKSA9PiBwYXJhbXNbXCJfaWRcIl0pXHJcblx0XHRcdC5zdWJzY3JpYmUoKGlkKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRGb3JtU2NoZW1hQWN0aW9uKGlkKSkpO1xyXG5cclxuXHRcdHRoaXMucm91dGUucGFyYW1zXHJcblx0XHRcdC5tYXAoKHBhcmFtcykgPT4gcGFyYW1zW1wiX2lkXCJdKVxyXG5cdFx0XHQuc3dpdGNoTWFwKChpZCkgPT4gdGhpcy5zZXJ2aWNlLnNlbGVjdEZvcm1CeUlkKGlkKSlcclxuXHRcdFx0LmZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPSBudWxsKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3Vic2NyaWJlKChmb3JtU2NoZW1hKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zY2hlbWEgPSBmb3JtU2NoZW1hO1xyXG5cdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZm9ybVNjaGVtYSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEVkaXRGb3JtQWN0aW9uKGRhdGEpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsLCBBZGRGb3JtQXBpTW9kZWwsIEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tYWRkXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCJzY2hlbWFcIj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIiAqbmdJZj1cImZvcm1Hcm91cFwiPlxyXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoUgw5jCrMOYwq/Dm8KMw5jCrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nCgcOYwrHDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1BcnJheShzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBhcnJheTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQ29udHJvbChzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBjb250cm9sPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwic2NoZW1hLmZvcm0/LnR5cGVcIj5cclxuICAgICAgICAgICAgPGFwcC1mb3JtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIG5vSGVhZGVyPVwidHJ1ZVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgICAgICAgIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwic2NoZW1hLmZvcm1cIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPCEtLSA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJmb3JtLmdlbmVyYXRlKHNjaGVtYSlcIj7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoU8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJlbWl0KClcIiB0eXBlPVwic3VibWl0XCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5hY2NlcHRcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmMKnw5vCjMObwozDmMKvPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqrDmMKnw5vCjMObwozDmMKvXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5jYW5jZWxcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoXDmMKqw5nChiDDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIj5cclxuICAgIDxuZ3MtZm9ybS12aWV3IFtsb2NhbF09J3RydWUnIFtpZF09XCJzY2hlbWEuX2lkXCI+PC9uZ3MtZm9ybS12aWV3PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRASW5wdXQoKSBmb3JtR3JvdXAgPSBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0QE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRlbWl0KCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IGZvcm06IHRoaXMuc2NoZW1hLmZvcm0gfSk7XHJcblx0XHR0aGlzLnN1Ym1pdGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxuXHRjaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IGZvcm06IHRoaXMuc2NoZW1hLmZvcm0gfSk7XHJcblx0XHR0aGlzLmNoYW5nZXMuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cdGNoYW5nZU9yZGVyKCRldmVudCkge31cclxuXHJcblx0YWRkRm9ybUdyb3VwKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBncm91cCA9IG5ldyBGaWVsZENvbmZpZyhcImdyb3VwXCIpO1xyXG5cdFx0Z3JvdXAuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGdyb3VwKTtcclxuXHRcdHJldHVybiBncm91cDtcclxuXHR9XHJcblx0YWRkRm9ybUFycmF5KHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBhcnJheSA9IG5ldyBGaWVsZENvbmZpZyhcImFycmF5XCIpO1xyXG5cdFx0YXJyYXkuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGFycmF5KTtcclxuXHRcdHJldHVybiBhcnJheTtcclxuXHR9XHJcblx0YWRkRm9ybUNvbnRyb2wocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSBuZXcgRmllbGRDb25maWcoXCJjb250cm9sXCIpO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChjb250cm9sKTtcclxuXHRcdHJldHVybiBjb250cm9sO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgQWRkRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hZGQvYWRkLWZvcm1cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImVkaXQtZm9ybVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiICpuZ0lmPVwic2NoZW1hXCI+XHJcbiAgPGRpdiBbZnhGbGV4XT1cIjUwXCIgKm5nSWY9XCJmb3JtR3JvdXBcIj5cclxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgIDxtYXQtY2FyZD5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5nCgcOYwrHDmcKFIMOYwqzDmMKvw5vCjMOYwq88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwoHDmMKxw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJidXR0b24tcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Hcm91cChzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBncm91cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQXJyYXkoc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gYXJyYXk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUNvbnRyb2woc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gY29udHJvbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZD5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxkaXYgW25nU3dpdGNoXT1cInNjaGVtYS5mb3JtPy50eXBlXCI+XHJcbiAgICAgICAgICAgIDxhcHAtZm9ybS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFtzY2hlbWFdPVwic2NoZW1hLmZvcm1cIiBub0hlYWRlcj1cInRydWVcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWdyb3VwPlxyXG4gICAgICAgICAgICA8YXBwLWZvcm0tYXJyYXkgKm5nU3dpdGNoQ2FzZT1cIidhcnJheSdcIiBbc2NoZW1hXT1cInNjaGVtYS5mb3JtXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1hcnJheT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgIDwhLS0gPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiJGFueShmb3JtKS5nZW5lcmF0ZShzY2hlbWEpXCI+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5nCgcOYwrHDmcKFPC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZW1pdCgpXCIgdHlwZT1cInN1Ym1pdFwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuXHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLmV2ZW50cykuY29udHJvbHMuYWNjZXB0XCI+XHJcbiAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInNob3dcIj7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5jCp8ObwozDm8KMw5jCrzwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoXDmMKqw5nChiDDmMKqw5jCp8ObwozDm8KMw5jCr1wiIGZvcm1Db250cm9sTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLmV2ZW50cykuY29udHJvbHMuY2FuY2VsXCI+XHJcbiAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInNob3dcIj7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoE8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKFw5jCqsOZwoYgw5jCp8OZwobDmMK1w5jCscOYwqfDmcKBXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBbZnhGbGV4XT1cIjUwXCI+XHJcbiAgICA8bmdzLWZvcm0tdmlldyBbbG9jYWxdPSd0cnVlJyBbaWRdPVwic2NoZW1hLl9pZFwiPjwvbmdzLWZvcm0tdmlldz5cclxuICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1Db21wb25lbnQgZXh0ZW5kcyBBZGRGb3JtQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IGFueTtcclxuXHRlbWl0KCkge1xyXG5cdFx0aWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0cmV0dXJuIHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1zTGlzdEFjdGlvbiB9IGZyb20gXCIuLi8uLi9saXN0L2xpc3QuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8Zm9ybS1saXN0XHJcblx0XHRcdFx0XHRbZGF0YV09XCJkYXRhJFwiPlxyXG5cdFx0XHRcdDwvZm9ybS1saXN0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkYXRhJDogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWxbXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+KSB7XHJcblx0XHR0aGlzLmRhdGEkID0gdGhpcy5zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZm9ybS5saXN0LmRhdGEpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEZvcm1zTGlzdEFjdGlvbigpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJmb3JtLWxpc3RcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dFdyYXAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiA+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkcy1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKGRhdGEkIHwgYXN5bmMpXCIgZnhGbGV4PVwiNTFcIj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnZWRpdCcgLCAgaXRlbS5faWRdXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgZm9ybVwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICAgIDwvaDM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUxpc3RDb21wb25lbnQge1xyXG5cdEBJbnB1dChcImRhdGFcIikgZGF0YSQ6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsW10+O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIE1haW5Db250YWluZXJSZWR1Y2VyIGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclJlZHVjZXIuTWFpbkNvbnRhaW5lclN0YXRlPikge31cclxufVxyXG4iLCJpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQWN0aW9uVHlwZXMsIEFkZEZvcm1TdGFydEFjdGlvbiwgQWRkRm9ybVN1Y2NlZWRBY3Rpb24sIEFkZEZvcm1GYWlsZWRBY3Rpb24gfSBmcm9tIFwiLi9hZGQtZm9ybS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRBZGRGb3JtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBBZGRGb3JtU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0QWRkRm9ybVN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuYWRkKGRhdGEpKSxcclxuXHRcdFx0bWFwKHJlcyA9PiBuZXcgQWRkRm9ybVN1Y2NlZWRBY3Rpb24oKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgQWRkRm9ybUZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtcclxuXHRGb3Jtc0xpc3RBY3Rpb24sXHJcblx0Rm9ybXNMaXN0QWN0aW9uVHlwZXMsXHJcblx0Rm9ybXNMaXN0QWN0aW9ucyxcclxuXHRGb3Jtc0xpc3RGYWlsZWRBY3Rpb24sXHJcblx0Rm9ybXNMaXN0U3RhcnRBY3Rpb24sXHJcblx0Rm9ybXNMaXN0U3VjY2VlZEFjdGlvbixcclxuXHRGb3JtU2NoZW1hRmVjaGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vbGlzdC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUKS5tYXAoZGF0YSA9PiBuZXcgRm9ybXNMaXN0U3RhcnRBY3Rpb24oKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEdldEZvcm0kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShGb3Jtc0xpc3RBY3Rpb25UeXBlcy5HRVRfRk9STV9TQ0hFTUEpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0XHRcdG1hcChmb3JtU2NoZW1hID0+IG5ldyBGb3JtU2NoZW1hRmVjaGVkQWN0aW9uKGZvcm1TY2hlbWEpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0X2Zvcm1zX2xpc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHRcdFx0bWFwKHJlcyA9PiBuZXcgRm9ybXNMaXN0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBGb3Jtc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRGb3JtQWN0aW9uVHlwZXMsXHJcblx0RWRpdEZvcm1TdGFydEFjdGlvbixcclxuXHRFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24sXHJcblx0RWRpdEZvcm1GYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9lZGl0LWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uL2xpc3RcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0Rm9ybSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBFZGl0Rm9ybVN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRGb3JtU3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0Rm9ybUFwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMuc2VydmljZS51cGRhdGUoZGF0YSkpLFxyXG5cdFx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgRWRpdEZvcm1TdWNjZWVkQWN0aW9uKGZvcm1TY2hlbWEpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBFZGl0Rm9ybUZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwZGF0ZUZvcm1zTGlzdFN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1VDQ0VFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZm9ybVNjaGVtYSA9PiBuZXcgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbihmb3JtU2NoZW1hKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC9lZGl0LWZvcm0tY29udGFpbmVyL2VkaXQtZm9ybS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2Zvcm0tbGlzdC1jb250YWluZXIvZm9ybS1saXN0LmNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiZm9ybVwiLFxyXG5cdFx0Y29tcG9uZW50OiBNYWluQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiYWRkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOl9pZFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRWRpdEZvcm1Db250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBGb3JtTGlzdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuL2Zvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IEZvcm1SZWR1Y2VycyB9IGZyb20gXCIuL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtQXJyYXlDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvZm9ybS1hcnJheS9mb3JtLWFycmF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9mb3JtLWNvbnRyb2wvZm9ybS1jb250cm9sLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtVmlld0NvbXBvbmVudCwgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIH0gZnJvbSBcIi4vdmlldy9mb3JtLXZpZXcvZm9ybS12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL3RleHQvdGV4dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2VtYWlsL2VtYWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb2xvckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9jb2xvci9jb2xvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL251bWJlci9udW1iZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL3RhYmxlL3RhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC1mb3JtLWNvbnRhaW5lci9lZGl0LWZvcm0tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC1mb3JtL2VkaXQtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2Zvcm0tbGlzdC1jb250YWluZXIvZm9ybS1saXN0LmNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2Zvcm0tbGlzdC9mb3JtLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLmNvbXBvbmVudC9tYWluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9hZGQtZm9ybS9hZGQtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUVmZmVjdHMgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUVmZmVjdHMgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZvcm1zTGlzdEVmZmVjdHMgfSBmcm9tIFwiLi9saXN0L2xpc3QuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZm9ybS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBEYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9kYXRlL2RhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2ZpbGUvZmlsZS5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdEVkaXRGb3JtQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUxpc3RDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRGb3JtTGlzdENvbXBvbmVudCxcclxuXHRcdEFkZEZvcm1Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRNYWluQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0QWRkRm9ybUNvbXBvbmVudCxcclxuXHRcdEZvcm1Hcm91cENvbXBvbmVudCxcclxuXHRcdEZvcm1BcnJheUNvbXBvbmVudCxcclxuXHRcdEZvcm1Db250cm9sQ29tcG9uZW50LFxyXG5cdFx0Rm9ybVZpZXdDb21wb25lbnQsXHJcblx0XHREeW5hbWljRmllbGREaXJlY3RpdmUsXHJcblx0XHRTZWxlY3RDb21wb25lbnQsXHJcblx0XHRDaGVja2JveENvbXBvbmVudCxcclxuXHRcdEVtYWlsQ29tcG9uZW50LFxyXG5cdFx0Q29sb3JDb21wb25lbnQsXHJcblx0XHREYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0VGV4dENvbXBvbmVudCxcclxuXHRcdE51bWJlckNvbXBvbmVudCxcclxuXHRcdFRhYmxlQ29tcG9uZW50XHJcblx0XHQvLyBOZ3NGb3JtU2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0U2VsZWN0Q29tcG9uZW50LFxyXG5cdFx0Q2hlY2tib3hDb21wb25lbnQsXHJcblx0XHRFbWFpbENvbXBvbmVudCxcclxuXHRcdENvbG9yQ29tcG9uZW50LFxyXG5cdFx0RGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdFRleHRDb21wb25lbnQsXHJcblx0XHROdW1iZXJDb21wb25lbnQsXHJcblx0XHRUYWJsZUNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBGb3JtVmlld0NvbXBvbmVudCBdXHJcblx0Ly8gZXhwb3J0czogWyBGb3JtVmlld0NvbXBvbmVudCwgTmdzRm9ybVNlbGVjdG9yQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0Zvcm1Nb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IEZvcm1Nb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzRm9ybU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0Zvcm1Nb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZm9ybVwiLCBGb3JtUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgQWRkRm9ybUVmZmVjdHMsIEVkaXRGb3JtRWZmZWN0cywgRm9ybXNMaXN0RWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzRm9ybU1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzRm9ybU1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiQmVoYXZpb3JTdWJqZWN0IiwibGlzdC5yZWR1Y2VyIiwidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUdpQixlQUFlO0FBQWhDLFdBQWlCLGVBQWU7SUFDL0IsSUFBQTtRQUtDLGlCQUFZLFNBQXlDO1lBQXpDLDBCQUFBLEVBQUEsOEJBQVksRUFBNkIsQ0FBQTtZQUFyRCxpQkFFQztZQURBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLFFBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBQyxDQUFDLENBQUM7U0FDcEU7Ozs7UUFFRCxnQ0FBYzs7O1FBQWQ7WUFDQyxPQUFPO2dCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUs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
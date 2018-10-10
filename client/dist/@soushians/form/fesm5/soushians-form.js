import { FormGroup, FormControl, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken, Inject, Injectable, Component, EventEmitter, Output, Input, NgModule, ViewContainerRef, ComponentFactoryResolver, Compiler, Directive, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { getFormModuleConfig } from '@soushians/config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';
import { filter, map, take, switchMap, takeUntil, catchError } from 'rxjs/operators';
import { stringTemplate } from '@soushians/shared';
import { MatTableDataSource, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatDatepickerModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { __decorate, __metadata, __extends, __assign } from 'tslib';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: "frontend/server/did/not/set",
        server: "server/did/not/set"
    },
    endpoints: {
        addForm: "",
        editForm: "",
        getForm: "",
        getList: "",
        deleteForm: "",
        getCaptcha: "/api/authentication/captcha"
    }
};
/** @type {?} */
var MODULE_CONFIG_TOKEN = new InjectionToken("FormModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        var model = new AddFormApiModel.Request(data);
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
        /** @type {?} */
        var model = new EditFormApiModel.Request(data);
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
        /** @type {?} */
        var subject = new BehaviorSubject$1(undefined);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        var _a;
        /** @type {?} */
        var numSelected = this.selection.selected.length;
        this.form.patchValue((_a = {},
            _a[this.schema.name] = this.selection.selected,
            _a));
        /** @type {?} */
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FormCaptchaService = /** @class */ (function () {
    function FormCaptchaService(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    /**
     * @return {?}
     */
    FormCaptchaService.prototype.getCaptcha = /**
     * @return {?}
     */
    function () {
        var _this = this;
        debugger;
        return this.configurationService.config$.pipe(filter(function (captcha) { return captcha.endpoints.getCaptcha != ""; }), take(1), switchMap(function (captcha) {
            return _this.http.get(captcha.env.server + captcha.endpoints.getCaptcha);
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @return {?}
     */
    FormCaptchaService.prototype.sendCaptcha = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.getList != ""; }), switchMap(function (config) { return _this.http.get(config.env.server + config.endpoints.getList); }), map(function (response) { return response.Result; }));
    };
    FormCaptchaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    FormCaptchaService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: FormConfigurationService }
    ]; };
    /** @nocollapse */ FormCaptchaService.ngInjectableDef = defineInjectable({ factory: function FormCaptchaService_Factory() { return new FormCaptchaService(inject(HttpClient), inject(Store), inject(FormConfigurationService)); }, token: FormCaptchaService, providedIn: "root" });
    return FormCaptchaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CaptchaModel = /** @class */ (function () {
    function CaptchaModel(_a) {
        var _b = _a === void 0 ? {} : _a, captchaImg = _b.captchaImg, captchaCode = _b.captchaCode;
        this.captchaImg = captchaImg + "?" + Math.random();
        this.captchaCode = captchaCode || "";
    }
    return CaptchaModel;
}());
var UpsertCaptchaApiModel;
(function (UpsertCaptchaApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
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
            return this.Captcha.captchaCode;
        };
        return Request;
    }());
    UpsertCaptchaApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertCaptchaApiModel.Response = Response;
})(UpsertCaptchaApiModel || (UpsertCaptchaApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FormCaptchaComponent = /** @class */ (function () {
    function FormCaptchaComponent(service, store) {
        this.service = service;
        this.store = store;
        this.captcha = new CaptchaModel({
            captchaImg: "http://172.22.34.28:8001/api/authentication/captcha"
        });
        // this.captcha = new CaptchaModel;
    }
    /**
     * @return {?}
     */
    FormCaptchaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        debugger;
        // this.store.dispatch(new GetCaptchaAction());
    };
    /**
     * @return {?}
     */
    FormCaptchaComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.captcha.captchaImg = "http://172.22.34.28:8001/api/authentication/captcha?" + Math.random();
    };
    FormCaptchaComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-form-captcha",
                    template: "<div>\n  <img [src]=\"captcha.captchaImg\" />\n\n  <button (click)=\"refresh()\">refresh</button>\n\n  <div [formGroup]=\"group\">\n    <mat-form-field fxFlex>\n      <input matInput [id]=\"config.name\" [placeholder]=\"config.title\" [formControlName]=\"config.name\" />\n    </mat-form-field>\n  </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    FormCaptchaComponent.ctorParameters = function () { return [
        { type: FormCaptchaService },
        { type: Store }
    ]; };
    return FormCaptchaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            /** @type {?} */
            var formGroupPath = void 0;
            if (data.parentType == "array") ;
            else if (data.parentType == "group") {
                formGroupPath = parentPath;
                parentPath = parentPath + ".controls." + ((/** @type {?} */ (data))).name;
            }
            /** @type {?} */
            var validators = [];
            if (data.validator.required && data.validator.required.active) {
                validators.push(Validators.required);
            }
            if (data.validator.minlength && data.validator.minlength.active) {
                validators.push(Validators.minLength(data.validator.minlength.value));
            }
            if (data.validator.email && data.validator.email.active) {
                validators.push(Validators.email);
            }
            /** @type {?} */
            var ctr = new FormControl(data.value, validators);
            (/** @type {?} */ (ctr)).schema = data;
            (/** @type {?} */ (ctr)).schema.path = parentPath;
            (/** @type {?} */ (ctr)).schema.formGroupPath = formGroupPath;
            return ctr;
        }
        else if (data.type == "group") {
            /** @type {?} */
            var formGroup_1 = new FormGroup({});
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
            /** @type {?} */
            var formArray_1 = new FormArray([]);
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
                    template: "<div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n  <form *ngIf=\"formGroupCreated && card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n    <mat-card>\n      <mat-card-title>\n        {{(schema$ | async)?.name}}\n      </mat-card-title>\n      <mat-card-content fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n          <ng-container *ngIf=\"field && field.inputType\" dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\n        </div>\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\n          | async)?.events.cancel.text}}</button>\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\n          | async)?.events.accept.text}}</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n  <form *ngIf=\"formGroupCreated && !card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n    <div>\n      <h3>\n        {{(schema$ | async)?.name}}\n      </h3>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"5px\">\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n          <ng-container dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\n        </div>\n      </div>\n      <div>\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\n          | async)?.events.cancel.text}}</button>\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\n          | async)?.events.accept.text}}</button>\n      </div>\n    </div>\n  </form>\n\n</div>",
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
/** @type {?} */
var components = {
    checkbox: CheckboxComponent,
    text: TextComponent,
    password: TextComponent,
    date: DateFormInputControlComponent,
    file: FileFormInputControlComponent,
    table: TableComponent,
    color: ColorComponent,
    email: EmailComponent,
    captcha: FormCaptchaComponent,
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
        if (this.config.inputType == undefined)
            return;
        if (!components[this.config.inputType]) {
            /** @type {?} */
            var supportedTypes = Object.keys(components).join(", ");
            throw new Error("Trying to use an unsupported type (" + this.config.inputType + ").\n\t\t  Supported types: " + supportedTypes);
        }
        /** @type {?} */
        var component = this.resolver.resolveComponentFactory(components[this.config.inputType]);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
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
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        case FormsListActionTypes.ADD_FORM_SCHEMA: {
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return __assign({}, state, { data: data });
        }
        case FormsListActionTypes.FORM_SCHEMA_FETCHED: {
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var FormReducers = {
    list: reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        var group = new FieldConfig("group");
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
        /** @type {?} */
        var array = new FieldConfig("array");
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
        /** @type {?} */
        var control = new FieldConfig("control");
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
                    template: "<div>\n\n  <mat-form-field *ngIf=\"!noHeader\">\n    <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n  </mat-form-field>\n\n  <mat-form-field *ngIf=\"!noHeader\">\n    <input matInput [(ngModel)]=\"schema.title\" placeholder=\"\u0639\u0646\u0648\u0627\u0646\">\n  </mat-form-field>\n\n  <div class=\"button-row\">\n    <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\"> addFormGroup </button>\n    <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\"> addFormArray </button>\n    <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button>\n  </div>\n\n  <div *ngFor=\"let field of schema.fields;let i = index\">\n    <div [ngSwitch]=\"field.type\">\n      <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (change)=\"changed()\"></app-form-group>\n      <!-- <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (change)=\"changed()\"></app-form-array> -->\n      <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (changes)=\"changed()\" (delete)=\"deleteFormGroup(i)\"></app-form-control>\n    </div>\n  </div>\n</div>"
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        var group = new FieldConfig("group");
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
        /** @type {?} */
        var array = new FieldConfig("array");
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
        /** @type {?} */
        var control = new FieldConfig("control");
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    template: "<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <button mat-icon-button (click)=\"delete.emit()\">\n        <mat-icon aria-label=\"icon-button\">delete_forever</mat-icon>\n      </button>\n      <span>{{schema.name}}</span>\n\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\n    <mat-form-field fxFlex>\n      <input matInput [(ngModel)]=\"schema.name\" (change)=\"changed()\" placeholder=\"Name\">\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <input matInput [(ngModel)]=\"schema.title\" (change)=\"changed()\" placeholder=\"Placeholder\" />\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <mat-select [(ngModel)]=\"schema.inputType\" (change)=\"changed()\" placeholder=\"Input Type\">\n        <mat-option value=\"table\">table</mat-option>\n        <mat-option value=\"select\">select</mat-option>\n        <mat-option value=\"text\">text</mat-option>\n        <mat-option value=\"number\">number</mat-option>\n        <mat-option value=\"email\">email</mat-option>\n        <mat-option value=\"color\">color</mat-option>\n        <mat-option value=\"radio\">radio</mat-option>\n        <mat-option value=\"checkbox\">checkbox</mat-option>\n        <mat-option value=\"checkbox\">captcha</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\n    <mat-form-field fxFlex>\n      <input matInput [(ngModel)]=\"schema.value\" (change)=\"changed()\" placeholder=\"Value\" />\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <mat-select [(ngModel)]=\"schema.width\" (change)=\"changed()\" placeholder=\"width\">\n        <mat-option *ngFor=\"let item of width\" [value]=\"item\">{{item}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <div *ngIf=\"schema.inputType=='table'\" [formGroup]=\"tableOptions\">\n      <mat-form-field>\n        <input matInput (change)=\"changed()\" formControlName=\"dataEndpoint\" placeholder=\"dataEndpoint\" />\n      </mat-form-field>\n    </div>\n\n    <div *ngIf=\"schema.inputType=='select'\">\n      [options]\n      <button (click)=\"addOption()\">+</button>\n      <button (click)=\"insertOptions()\">insert</button>\n      <div *ngFor=\"let option of options.controls;index as i\">\n        {{i}}\n        <div [formGroup]=\"options.controls[i]\">\n          <mat-form-field>\n            <input matInput (change)=\"changed()\" formControlName=\"key\" placeholder=\"key\" />\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput (change)=\"changed()\" formControlName=\"value\" placeholder=\"value\" />\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <br />\n    <mat-card fxLayout=\"column\">\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.active\">\u0627\u062C\u0628\u0627\u0631\u06CC</mat-slide-toggle>\n      <mat-form-field>\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\n      </mat-form-field>\n    </mat-card>\n    <mat-card fxLayout=\"column\">\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.active\">\u0627\u06CC\u0645\u06CC\u0644</mat-slide-toggle>\n      <mat-form-field>\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\n      </mat-form-field>\n    </mat-card>\n    <mat-card fxLayout=\"column\">\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.active\">\u062D\u062F\u0627\u0642\u0644 \u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631</mat-slide-toggle>\n      <mat-form-field>\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.value\" placeholder=\"\u062A\u0639\u062F\u0627\u062F \u062D\u062F\u0627\u0642\u0644 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631\" />\n      </mat-form-field>\n    </mat-card>\n  </div>\n</mat-expansion-panel>"
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        var group = new FieldConfig("group");
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
        /** @type {?} */
        var array = new FieldConfig("array");
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
        /** @type {?} */
        var control = new FieldConfig("control");
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\" class=\"with-sticky-action\">\n      <div fxLayout=\"row wrap\" *ngIf=\"schema\" fxFlex=\"100\" fxLayoutAlign=\"start start\" fxLayoutAlign.lt-md=\"center\">\n        <div fxFlex.gt-md=\"50\" fxFlex.lt-md=\"100\" *ngIf=\"formGroup\">\n          <form [formGroup]=\"formGroup\">\n            <mat-card>\n              <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n              <mat-card-content>\n                <mat-form-field>\n                  <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n                </mat-form-field>\n                <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n                <mat-divider></mat-divider>\n                <div [ngSwitch]=\"schema.form?.type\" class=\"schema-form\">\n                  <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n                  <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n                </div>\n\n                <mat-divider></mat-divider>\n                <div class=\"form-buttons\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\n\n                  <div fxLayout=\"column\" [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n                    <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n                    <mat-form-field>\n                      <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n                    </mat-form-field>\n                  </div>\n                  <div fxLayout=\"column\" [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n                    <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n                    <mat-form-field>\n                      <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n\n                <mat-card-actions>\n                  <!-- <button mat-raised-button color=\"primary\" (click)=\"$any(form).generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n                  <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n                </mat-card-actions>\n\n              </mat-card-content>\n            </mat-card>\n          </form>\n        </div>\n        <div fxFlex.gt-md=\"50\" fxFlex.lt-md=\"100\" fxLayoutAlign=\"center start\">\n          <ngs-form-view [local]='true' [id]=\" schema._id\">\n          </ngs-form-view>\n\n        </div>\n      </div>\n    </mat-card>\n  </div>\n</div>",
                    styles: [".form-buttons,.schema-form{padding:25px 10px}"]
                },] },
    ];
    EditFormComponent.propDecorators = {
        schema: [{ type: Input }]
    };
    return EditFormComponent;
}(AddFormComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FormListComponent = /** @class */ (function () {
    function FormListComponent() {
    }
    FormListComponent.decorators = [
        { type: Component, args: [{
                    selector: "form-list",
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card class=\"with-sticky-action\">\n      <mat-card-header>\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-icon>assignment</mat-icon>\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0631\u0645 \u0647\u0627</span>\n        </mat-card-title>\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n          </span>\n        </mat-card-subtitle>\n      </mat-card-header>\n\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\n\n        <button fxFlex.lt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"32\" fxFlex.sm=\"49\" fxFlex.xs=\"100\" class='link'\n          mat-raised-button [routerLink]=\"['edit' ,  item._id]\" *ngFor=\"let item of (data$ | async)\">\n          <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>settings</mat-icon>\n            <h3 class='title'>{{item.name}}</h3>\n          </div>\n        </button>\n\n      </div>\n    </mat-card>\n  </div>\n</div>",
                    styles: ["button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}"]
                },] },
    ];
    FormListComponent.propDecorators = {
        data$: [{ type: Input, args: ["data",] }]
    };
    return FormListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MainContainerComponent = /** @class */ (function () {
    function MainContainerComponent(route, store) {
        this.route = route;
        this.store = store;
    }
    MainContainerComponent.decorators = [
        { type: Component, args: [{
                    template: "<router-outlet></router-outlet>",
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.add(data); }), map(function (res) { return new AddFormSucceedAction(); }), catchError(function () { return of(new AddFormFailedAction()); }));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            .pipe(switchMap(function (data) { return _this.service.getList(); }), map(function (res) { return new FormsListSucceedAction(res); }), catchError(function () { return of(new FormsListFailedAction()); }));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.update(data); }), map(function (formSchema) { return new EditFormSucceedAction(formSchema); }), catchError(function () { return of(new EditFormFailedAction()); }));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
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
/** @type {?} */
var RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var CaptchaActionTypes = {
    GET_CAPTCHA: "[CAPTCHA][GET] GET_CAPTCHA",
    GET_CAPTCHA_START: "[CAPTCHA][GET] GET_CAPTCHA_START",
    GET_CAPTCHA_SUCCEED: "[CAPTCHA][GET] GET_CAPTCHA_SUCCEED",
    GET_CAPTCHA_FAILED: "[CAPTCHA][GET] GET_CAPTCHA_FAILED",
};
var GetCaptchaStartAction = /** @class */ (function () {
    function GetCaptchaStartAction(payload) {
        this.payload = payload;
        this.type = CaptchaActionTypes.GET_CAPTCHA_START;
    }
    return GetCaptchaStartAction;
}());
var GetCaptchaSucceedAction = /** @class */ (function () {
    function GetCaptchaSucceedAction() {
        this.type = CaptchaActionTypes.GET_CAPTCHA_SUCCEED;
    }
    return GetCaptchaSucceedAction;
}());
var GetCaptchaFailedAction = /** @class */ (function () {
    function GetCaptchaFailedAction() {
        this.type = CaptchaActionTypes.GET_CAPTCHA_FAILED;
    }
    return GetCaptchaFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CaptchaEffects = /** @class */ (function () {
    function CaptchaEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.GetCaptcha$ = this.actions$
            .ofType(CaptchaActionTypes.GET_CAPTCHA)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new GetCaptchaStartAction(data); }));
        this.AddFormStart$ = this.actions$
            .ofType(CaptchaActionTypes.GET_CAPTCHA_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.getCaptcha(); }), map(function (res) { return new GetCaptchaSucceedAction(); }), catchError(function () { return of(new GetCaptchaFailedAction()); }));
    }
    CaptchaEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CaptchaEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: FormCaptchaService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], CaptchaEffects.prototype, "GetCaptcha$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], CaptchaEffects.prototype, "AddFormStart$", void 0);
    return CaptchaEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                        TableComponent,
                        FormCaptchaComponent
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
                        TableComponent,
                        FormCaptchaComponent
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
                        EffectsModule.forFeature([AddFormEffects, EditFormEffects, FormsListEffects, CaptchaEffects]),
                        RoutingModule
                    ],
                    exports: [NgsFormModule]
                },] },
    ];
    return RootNgsFormModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { FormService, FormViewComponent, DynamicFieldDirective, AddFormApiModel, EditFormApiModel, FormListApiModel, FormSchemaModel, FieldConfig, NgsFormModule, RootNgsFormModule, AddFormComponent as ɵi, AddFormContainerComponent as ɵg, AddFormContainerComponent as ɵl, AddFormEffects as ɵbc, AddFormComponent as ɵn, CaptchaEffects as ɵbf, FormArrayComponent as ɵp, FormControlComponent as ɵq, FormGroupComponent as ɵo, EditFormContainerComponent as ɵf, EditFormEffects as ɵbd, EditFormComponent as ɵh, RoutingModule as ɵbh, MODULE_CONFIG_TOKEN as ɵa, FormListContainerComponent as ɵj, FormListComponent as ɵk, FormsListEffects as ɵbe, reducer as ɵbb, MainContainerComponent as ɵm, FormReducers as ɵb, FormCaptchaService as ɵbg, FormConfigurationService as ɵd, CheckboxComponent as ɵs, ColorComponent as ɵu, DateFormInputControlComponent as ɵv, EmailComponent as ɵt, FileFormInputControlComponent as ɵw, FormCaptchaComponent as ɵba, NumberComponent as ɵy, SelectComponent as ɵr, TableComponent as ɵz, TextComponent as ɵx };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWZvcm0uanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2FkZC1mb3JtLmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZWRpdC1mb3JtLmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1saXN0LmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1maWVsZC12YWxpZGF0b3IubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2ZpZWxkLWNvbmZpZy5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1zY2hlbWEubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZm9ybS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvc2VydmljZXMvZm9ybS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvc2VydmljZXMvZm9ybS5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9lbWFpbC9lbWFpbC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2NvbG9yL2NvbG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2xpc3QuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvZmlsZS9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9zZXJ2aWNlcy9mb3JtLWNhcHRjaGEuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvY2FwdGNoYS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvZm9ybS1jYXB0Y2hhL2Zvcm0tY2FwdGNoYS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLXZpZXcvZm9ybS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2xpc3QucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2Zvcm0tYXJyYXkvZm9ybS1hcnJheS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2Zvcm0tY29udHJvbC9mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2VkaXQvZWRpdC1mb3JtLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2FkZC1mb3JtLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2FkZC1mb3JtLWNvbnRhaW5lci9hZGQtZm9ybS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2VkaXQvZWRpdC1mb3JtLWNvbnRhaW5lci9lZGl0LWZvcm0tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0vYWRkLWZvcm0uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2VkaXQvZWRpdC1mb3JtL2VkaXQtZm9ybS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbGlzdC9mb3JtLWxpc3QtY29udGFpbmVyL2Zvcm0tbGlzdC5jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2xpc3QvZm9ybS1saXN0L2Zvcm0tbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIuY29tcG9uZW50L21haW4tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0uZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2xpc3QuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9lZGl0L2VkaXQtZm9ybS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2Zvcm0tcm91dGluZy5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2NhcHRjaGEuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvY2FwdGNoYS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2Zvcm0ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQWRkRm9ybUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0Zm9ybTogYW55W107XHJcblx0XHRldmVudHM6IGFueVtdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30gYXMgQWRkRm9ybUFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXHJcblx0XHRcdFx0Zm9ybTogdGhpcy5mb3JtLFxyXG5cdFx0XHRcdGV2ZW50czogdGhpcy5ldmVudHNcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Zm9ybTogbmV3IEZvcm1Db250cm9sKHt9KSxcclxuXHRcdFx0XHRldmVudHM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0YWNjZXB0OiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFx0c2hvdzogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogbmV3IEZvcm1Db250cm9sKFwiw5jCq8OYwqjDmMKqXCIpXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdGNhbmNlbDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0Rm9ybUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0Zm9ybTogYW55W107XHJcblx0XHRldmVudHM6IGFueVtdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30gYXMgRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXHJcblx0XHRcdFx0Zm9ybTogdGhpcy5mb3JtLFxyXG5cdFx0XHRcdGV2ZW50czogdGhpcy5ldmVudHNcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Zm9ybTogbmV3IEZvcm1Db250cm9sKHt9KSxcclxuXHRcdFx0XHRldmVudHM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0YWNjZXB0OiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFx0c2hvdzogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogbmV3IEZvcm1Db250cm9sKFwiw5jCq8OYwqjDmMKqXCIpXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdGNhbmNlbDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBGb3JtTGlzdEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdE5hbWU6IHN0cmluZztcclxuXHRcdENvbnRyb2xzOiBvYmplY3RbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEZvcm1MaXN0QXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goKGtleSkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0TmFtZTogdGhpcy5OYW1lLFxyXG5cdFx0XHRcdENvbnRyb2xzOiB0aGlzLkNvbnRyb2xzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29udHJvbHM6IG5ldyBGb3JtR3JvdXAoe30pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogRm9ybVNjaGVtYU1vZGVsW107XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgdmFsaWRhdGlvbiB7XHJcblx0YWN0aXZlOiBib29sZWFuO1xyXG5cdG1lc3NhZ2U6IHN0cmluZztcclxuXHR2YWx1ZT86IGFueTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yIHtcclxuXHRyZXF1aXJlZDogdmFsaWRhdGlvbjtcclxuXHRtaW5sZW5ndGg6IHZhbGlkYXRpb247XHJcblx0ZW1haWw6IHZhbGlkYXRpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5yZXF1aXJlZCA9IHtcclxuXHRcdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdFx0bWVzc2FnZTogXCLDmMKnw5vCjMOZwoYgw5nCgcObwozDmcKEw5jCryDDmMKnw5nChMOYwrLDmMKnw5nChcObwowgw5jCp8OYwrPDmMKqXCJcclxuXHRcdH07XHJcblx0XHR0aGlzLm1pbmxlbmd0aCA9IHtcclxuXHRcdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdFx0bWVzc2FnZTogXCLDmMKtw5jCr8OYwqfDmcKCw5nChCDDmMKqw5jCucOYwq/DmMKnw5jCryDDmsKpw5jCp8OYwrHDmsKpw5jCqsOYwrHDmcKHw5jCp1wiLFxyXG5cdFx0XHR2YWx1ZTogNVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuZW1haWwgPSB7XHJcblx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdG1lc3NhZ2U6IFwiw5nChMOYwrfDmcKBw5jCpyDDmMKnw5vCjMOZwoXDm8KMw5nChCDDmMK1w5jCrcObwozDmMKtIMOZwojDmMKnw5jCscOYwq8gw5nChsOZwoXDmMKnw5vCjMObwozDmMKvXCJcclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCIuL2Zvcm0tZmllbGQtdmFsaWRhdG9yLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRDb25maWcge1xyXG5cdGlkOiBudW1iZXI7XHJcblx0dHlwZTogXCJncm91cFwiIHwgXCJhcnJheVwiIHwgXCJjb250cm9sXCI7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHN1YnR5cGU6IHN0cmluZztcclxuXHRkaXNhYmxlZD86IGJvb2xlYW47XHJcblx0dGl0bGU6IHN0cmluZztcclxuXHRwYXJlbnRUeXBlPzogXCJhcnJheVwiIHwgXCJncm91cFwiO1xyXG5cdGZvcm1Hcm91cFBhdGg/OiBzdHJpbmc7XHJcblx0cGF0aD86IHN0cmluZztcclxuXHRpbnB1dFR5cGU6IFwic2VsZWN0XCIgfCBcInRleHRcIiB8IFwibnVtYmVyXCIgfCBcImVtYWlsXCIgfCBcImNvbG9yXCIgfCBcImNoZWNrYm94XCIgfCBcInRhYmxlXCI7XHJcblx0dmFsdWU/OiBhbnk7XHJcblx0b3JkZXI/OiBudW1iZXI7XHJcblx0d2lkdGg/OiBudW1iZXI7XHJcblx0b3B0aW9uczoge1xyXG5cdFx0W2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcclxuXHR9W107XHJcblx0ZGF0YUVuZHBvaW50Pzogc3RyaW5nO1xyXG5cdG9wdGlvbnNFbmRwb2ludDogc3RyaW5nO1xyXG5cdGZpZWxkcz86IEZpZWxkQ29uZmlnW107XHJcblx0dmFsaWRhdG9yOiBWYWxpZGF0b3I7XHJcblx0Y29uc3RydWN0b3IodHlwZTogXCJncm91cFwiIHwgXCJhcnJheVwiIHwgXCJjb250cm9sXCIpIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHRpZiAodHlwZSAhPSBcImNvbnRyb2xcIikgdGhpcy5maWVsZHMgPSBbXTtcclxuXHRcdHRoaXMud2lkdGggPSAzO1xyXG5cdFx0dGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vZmllbGQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybVNjaGVtYU1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHRmb3JtOiBGaWVsZENvbmZpZztcclxuXHRldmVudHMgPSB7XHJcblx0XHRhY2NlcHQ6IHtcclxuXHRcdFx0c2hvdzogZmFsc2UsXHJcblx0XHRcdHRleHQ6IFwiw5jCq8OYwqjDmMKqXCJcclxuXHRcdH0sXHJcblx0XHRjYW5jZWw6IHtcclxuXHRcdFx0c2hvdzogZmFsc2UsXHJcblx0XHRcdHRleHQ6IFwiw5jCp8OZwobDmMK1w5jCscOYwqfDmcKBXCJcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZm9ybSA9IG5ldyBGaWVsZENvbmZpZyhcImdyb3VwXCIpO1xyXG5cdH1cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5faWQgPSAoTWF0aC5yYW5kb20oKSAqIDEwKS50b1N0cmluZygpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Nb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHRcdHNlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0YWRkRm9ybTogc3RyaW5nO1xyXG5cdFx0ZWRpdEZvcm06IHN0cmluZztcclxuXHRcdGdldEZvcm06IHN0cmluZztcclxuXHRcdGdldExpc3Q6IHN0cmluZztcclxuXHRcdGRlbGV0ZUZvcm06IHN0cmluZztcclxuXHRcdGdldENhcHRjaGE6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEZvcm1Nb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJmcm9udGVuZC9zZXJ2ZXIvZGlkL25vdC9zZXRcIixcclxuXHRcdHNlcnZlcjogXCJzZXJ2ZXIvZGlkL25vdC9zZXRcIlxyXG5cdH0sXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHRhZGRGb3JtOiBcIlwiLFxyXG5cdFx0ZWRpdEZvcm06IFwiXCIsXHJcblx0XHRnZXRGb3JtOiBcIlwiLFxyXG5cdFx0Z2V0TGlzdDogXCJcIixcclxuXHRcdGRlbGV0ZUZvcm06IFwiXCIsXHJcblx0XHRnZXRDYXB0Y2hhOiBcIi9hcGkvYXV0aGVudGljYXRpb24vY2FwdGNoYVwiXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxGb3JtTW9kdWxlQ29uZmlnPihcIkZvcm1Nb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRGb3JtTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL2Zvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9mb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vbWFpbi1jb250YWluZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IEZvcm1Nb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRGb3JtTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUodXNlckNvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghdXNlckNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsLCBBZGRGb3JtQXBpTW9kZWwsIEVkaXRGb3JtQXBpTW9kZWwsIEZvcm1MaXN0QXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2Zvcm0tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEZvcm1Db25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxuXHJcblx0YWRkKGRhdGE6IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuYWRkRm9ybSAhPSBcIlwiKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmFkZEZvcm0sIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IEFkZEZvcm1BcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0Z2V0KF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldEZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldEZvcm0sIHsgX2lkIH0pKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBFZGl0Rm9ybUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdH1cclxuXHRnZXRMaXN0KCk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldExpc3QgIT0gXCJcIilcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXRMaXN0KSlcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IEZvcm1MaXN0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0fVxyXG5cdHVwZGF0ZShkYXRhOiBFZGl0Rm9ybUFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZWRpdEZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wdXQoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmVkaXRGb3JtLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBFZGl0Rm9ybUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdH1cclxuXHRkZWxldGUoX2lkOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0fVxyXG5cdHNlbGVjdEZvcm1CeUlkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZvcm1TY2hlbWFNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLmZvcm0ubGlzdC5kYXRhKVxyXG5cdFx0XHQucGlwZShmaWx0ZXIoKGZvcm1zKSA9PiBmb3JtcyAhPSBudWxsKSwgbWFwKChmb3JtcykgPT4gZm9ybXMuZmluZCgoZm9ybSkgPT4gZm9ybS5faWQgPT0gX2lkKSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoKGZvcm1TY2hlbWFNb2RlbCkgPT4gc3ViamVjdC5uZXh0KGZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLXNlbGVjdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG48bWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiPlxyXG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7b3B0aW9uLmtleX19PC9tYXQtb3B0aW9uPlxyXG4gICAgPC9tYXQtc2VsZWN0PlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtY2hlY2tib3hcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcbiAgICAgICAge3tjb25maWcudGl0bGV9fVxyXG4gICAgPC9tYXQtY2hlY2tib3g+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb25maWcsIEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1lbWFpbFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG48bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJjb25maWcuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtY29sb3JcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG48bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLXRhYmxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16OFwiICpuZ0lmPVwicmVhZHlcIj5cclxuICAgIDxtYXQtdGFibGUgI3RhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cclxuICBcclxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzZWxlY3RcIj5cclxuICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxyXG4gICAgICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cIiRldmVudCA/IG1hc3RlclRvZ2dsZSgpIDogbnVsbFwiXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmIGlzQWxsU2VsZWN0ZWQoKVwiXHJcbiAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIj5cclxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgIDwvbWF0LWhlYWRlci1jZWxsPlxyXG4gICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwiJGV2ZW50ID8gc2VsZWN0aW9uLnRvZ2dsZShyb3cpIDogbnVsbFwiXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdylcIj5cclxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgIDwvbWF0LWNlbGw+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sIG9mIGZpbGVkRGlzcGxheWVkQ29sdW1uc1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgIFttYXRDb2x1bW5EZWZdPVwiY29sXCI+XHJcbiAgICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e2NvbH19IDwvbWF0LWhlYWRlci1jZWxsPlxyXG4gICAgICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50W2NvbF19fSA8L21hdC1jZWxsPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj48L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICA8bWF0LWNlbGwgY2xhc3M9J2xlZnQtYWxpZ24nICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiw5jCp8OZwobDmMKqw5jCrsOYwqfDmMKoXCI+YXJyb3dfYmFjazwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jZWxsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIFxyXG4gICAgICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L21hdC1oZWFkZXItcm93PlxyXG4gICAgICA8bWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIiAoY2xpY2spPVwic2VsZWN0aW9uLnRvZ2dsZShyb3cpXCI+PC9tYXQtcm93PlxyXG5cclxuICAgIDwvbWF0LXRhYmxlPlxyXG4gIDwvZGl2PlxyXG5cclxuXHJcbjwhLS0gPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGwgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgXHJcbiAgPGlucHV0IG1hdElucHV0IFtpZF09XCJzY2hlbWEubmFtZVwiIFt0eXBlXT1cInNjaGVtYS5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwic2NoZW1hLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJzY2hlbWEubmFtZVwiPlxyXG4gIFxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuZXJyb3JzPy5yZXF1aXJlZFwiPlxyXG4gICAge3tzY2hlbWEudmFsaWRhdG9yLnJlcXVpcmVkLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgIHt7c2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImZvcm0uZ2V0KHNjaGVtYS5uYW1lKS5lbWFpbD8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e3NjaGVtYS52YWxpZGF0b3IuZW1haWwubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbjwvbWF0LWZvcm0tZmllbGQ+IC0tPlxyXG4gIFxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KHNjaGVtYS5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChzY2hlbWEubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoc2NoZW1hLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0cmVhZHk6IGJvb2xlYW47XHJcblx0ZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XHJcblx0ZmlsZWREaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcclxuXHRkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PjtcclxuXHJcblx0c2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPGFueT4odHJ1ZSwgW10pO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG5cdFx0dGhpcy5yZWFkeSA9IGZhbHNlO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaHR0cC5nZXQodGhpcy5zY2hlbWEuZGF0YUVuZHBvaW50KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGF0YS5kaXNwbGF5ZWRDb2x1bW5zO1xyXG5cdFx0XHR0aGlzLmZpbGVkRGlzcGxheWVkQ29sdW1ucyA9IGRhdGEuZmlsZWREaXNwbGF5ZWRDb2x1bW5zO1xyXG5cdFx0XHR0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oZGF0YS5kYXRhU291cmNlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cclxuXHRpc0FsbFNlbGVjdGVkKCkge1xyXG5cdFx0Y29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XHJcblx0XHR0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFt0aGlzLnNjaGVtYS5uYW1lXTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcclxuXHRcdHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcclxuXHR9XHJcblxyXG5cdC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXHJcblx0bWFzdGVyVG9nZ2xlKCkge1xyXG5cdFx0dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDogdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1udW1iZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFt0eXBlXT1cInNjaGVtYS5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwic2NoZW1hLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJzY2hlbWEubmFtZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtdGV4dFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGwgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG5cclxuICA8aW5wdXQgbWF0SW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcblxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8IS0tIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVtYWlsPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj4gLS0+XHJcblxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChjb25maWcubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoY29uZmlnLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+XHJcblxyXG48L21hdC1mb3JtLWZpZWxkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBGb3Jtc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0Rk9STVNfTElTVCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RcIixcclxuXHRGT1JNU19MSVNUX1NUQVJUID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9TVEFSVFwiLFxyXG5cdEZPUk1TX0xJU1RfU1VDQ0VFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdEZPUk1TX0xJU1RfRkFJTEVEID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9GQUlMRURcIixcclxuXHRBRERfRk9STV9TQ0hFTUEgPSBcIltGT1JNXVtMSVNUXSBBRERfRk9STV9TQ0hFTUFcIixcclxuXHRGT1JNX1NDSEVNQV9VUERBVEUgPSBcIltGT1JNXVtMSVNUXSBGT1JNX1NDSEVNQV9VUERBVEVcIixcclxuXHRHRVRfRk9STV9TQ0hFTUEgPSBcIltGT1JNXVtMSVNUXSBHRVRfRk9STV9TQ0hFTUFcIixcclxuXHRGT1JNX1NDSEVNQV9GRVRDSEVEID0gXCJbRk9STV1bTElTVF0gRk9STV9TQ0hFTUFfRkVUQ0hFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX1VQREFURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU2NoZW1hQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuQUREX0ZPUk1fU0NIRU1BO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEZvcm1TY2hlbWFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5HRVRfRk9STV9TQ0hFTUE7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybVNjaGVtYUZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm9ybXNMaXN0QWN0aW9ucyA9XHJcblx0fCBGb3Jtc0xpc3RBY3Rpb25cclxuXHR8IEZvcm1zTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEFkZEZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEdldEZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEZvcm1TY2hlbWFGZWNoZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb25maWcsIEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1kYXRlXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbCBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcblxyXG4gIDwhLS0gPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPiAtLT5cclxuICA8aW5wdXQgbWF0SW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW21hdERhdGVwaWNrZXJdPVwiX2RhdGVwaWNrZXJcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiX2RhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICA8bWF0LWRhdGVwaWNrZXIgI19kYXRlcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcblxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8IS0tIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVtYWlsPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj4gLS0+XHJcblxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChjb25maWcubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoY29uZmlnLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+XHJcblxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuPCEtLSBcclxuXHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgW0BmaWxlZEFuaW1hdGlvbl09XCJtb2RlXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZml0XCIgWyhuZ0NsYXNzKV09XCJtb2RlXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJfZGF0ZXBpY2tlclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbE5hbWVcIj5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJfZGF0ZXBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI19kYXRlcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwidG9vbHRpcCBtZC0xOFwiICpuZ0lmPVwidG9vbHRpcFwiIFttYXRUb29sdGlwXT1cInRvb2x0aXBcIj5oZWxwPC9tYXQtaWNvbj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZS1ib3hcIj4gXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAge3sgcGxhY2Vob2xkZXIgfX0gOlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxyXG4gICAgICAgICAgICB7eyhEaXNwbGF5VmFsdWUkIHwgYXN5bmMgfCBwZXJzaWFuRGF0ZSl9fSBcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLWZpbGVcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4RmlsbCBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcblxyXG4gIDwhLS0gPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPiAtLT5cclxuICA8aW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcblxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8IS0tIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVtYWlsPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj4gLS0+XHJcblxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChjb25maWcubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoY29uZmlnLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwhLS0gXHJcblxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IFtAZmlsZWRBbmltYXRpb25dPVwibW9kZVwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZpdFwiIFsobmdDbGFzcyldPVwibW9kZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiX2RhdGVwaWNrZXJcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xOYW1lXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiX2RhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNfZGF0ZXBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInRvb2x0aXAgbWQtMThcIiAqbmdJZj1cInRvb2x0aXBcIiBbbWF0VG9vbHRpcF09XCJ0b29sdGlwXCI+aGVscDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtYm94XCI+IFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19IDpcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICAgICAge3soRGlzcGxheVZhbHVlJCB8IGFzeW5jIHwgcGVyc2lhbkRhdGUpfX0gXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCwgQWRkRm9ybUFwaU1vZGVsLCBFZGl0Rm9ybUFwaU1vZGVsLCBGb3JtTGlzdEFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9mb3JtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVwc2VydENhcHRjaGFBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvY2FwdGNoYS5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ2FwdGNoYVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEZvcm1Db25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkgeyB9XHJcblxyXG5cdGdldENhcHRjaGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNhcHRjaGEpID0+IGNhcHRjaGEuZW5kcG9pbnRzLmdldENhcHRjaGEgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcCgoY2FwdGNoYSkgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KGNhcHRjaGEuZW52LnNlcnZlciArIGNhcHRjaGEuZW5kcG9pbnRzLmdldENhcHRjaGEpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuUmVzdWx0KSxcclxuXHRcdCk7XHJcblx0fVxyXG5cdHNlbmRDYXB0Y2hhKCk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0TGlzdCAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVudi5zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldExpc3QpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogRm9ybUxpc3RBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiXHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhTW9kZWwge1xyXG5cdGNhcHRjaGFJbWc6IHN0cmluZztcclxuXHRjYXB0Y2hhQ29kZTogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKHsgY2FwdGNoYUltZywgY2FwdGNoYUNvZGUgfTogeyBjYXB0Y2hhSW1nPzogc3RyaW5nOyBjYXB0Y2hhQ29kZT86IHN0cmluZzsgfSA9IHt9KSB7XHJcblx0XHR0aGlzLmNhcHRjaGFJbWcgPSBgJHtjYXB0Y2hhSW1nfT8ke01hdGgucmFuZG9tKCl9YDtcclxuXHRcdHRoaXMuY2FwdGNoYUNvZGUgPSBjYXB0Y2hhQ29kZSB8fCBcIlwiO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRDYXB0Y2hhQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdENhcHRjaGE6IENhcHRjaGFNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogUGFydGlhbDxVcHNlcnRDYXB0Y2hhQXBpTW9kZWwuUmVxdWVzdD4gPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLkNhcHRjaGEuY2FwdGNoYUNvZGU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IENhcHRjaGFNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkgeyB9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXksIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybUNhcHRjaGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2Zvcm0tY2FwdGNoYS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENhcHRjaGFNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvY2FwdGNoYS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHZXRDYXB0Y2hhQWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2FkZC9jYXB0Y2hhLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL21haW4tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFJlZnJlc2ggfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHMvc3JjL2FjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxpYi1mb3JtLWNhcHRjaGFcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXY+XHJcbiAgPGltZyBbc3JjXT1cImNhcHRjaGEuY2FwdGNoYUltZ1wiIC8+XHJcblxyXG4gIDxidXR0b24gKGNsaWNrKT1cInJlZnJlc2goKVwiPnJlZnJlc2g8L2J1dHRvbj5cclxuXHJcbiAgPGRpdiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNhcHRjaGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNhcHRjaGE6IENhcHRjaGFNb2RlbDtcclxuXHRjYXB0Y2hhU3JjOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBGb3JtQ2FwdGNoYVNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMuY2FwdGNoYSA9IG5ldyBDYXB0Y2hhTW9kZWwoe1xyXG5cdFx0XHRjYXB0Y2hhSW1nOiBcImh0dHA6Ly8xNzIuMjIuMzQuMjg6ODAwMS9hcGkvYXV0aGVudGljYXRpb24vY2FwdGNoYVwiXHJcblx0XHR9KTtcclxuXHRcdC8vIHRoaXMuY2FwdGNoYSA9IG5ldyBDYXB0Y2hhTW9kZWw7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHQvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRDYXB0Y2hhQWN0aW9uKCkpO1xyXG5cdH1cclxuXHRyZWZyZXNoKCkge1xyXG5cdFx0dGhpcy5jYXB0Y2hhLmNhcHRjaGFJbWcgPSBgaHR0cDovLzE3Mi4yMi4zNC4yODo4MDAxL2FwaS9hdXRoZW50aWNhdGlvbi9jYXB0Y2hhPyR7TWF0aC5yYW5kb20oKX1gXHJcblx0fVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Vmlld0NoaWxkLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdENvbXBpbGVyLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHROZ01vZHVsZSxcclxuXHRJbnB1dCxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG5cdE9uQ2hhbmdlcyxcclxuXHREaXJlY3RpdmUsXHJcblx0VHlwZSxcclxuXHRPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNlbGVjdENvbXBvbmVudCxcclxuXHRFbWFpbENvbXBvbmVudCxcclxuXHRDb2xvckNvbXBvbmVudCxcclxuXHRDaGVja2JveENvbXBvbmVudCxcclxuXHRUZXh0Q29tcG9uZW50LFxyXG5cdFRhYmxlQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHNcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHZXRGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZywgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBEYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xzL2RhdGUvZGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vZm9ybS1jb250cm9scy9maWxlL2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1DYXB0Y2hhQ29tcG9uZW50IH0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHMvZm9ybS1jYXB0Y2hhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgPGZvcm0gKm5nSWY9XCJmb3JtR3JvdXBDcmVhdGVkICYmIGNhcmRcIiBjbGFzcz1cIm5ncy1keW5hbWljLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJhY2NlcHRlZCgpXCI+XHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICB7eyhzY2hlbWEkIHwgYXN5bmMpPy5uYW1lfX1cclxuICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIChzY2hlbWEkIHwgYXN5bmMpPy5mb3JtLmZpZWxkcztcIiBbZnhGbGV4XT1cImZpZWxkLndpZHRoICogMTBcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZCAmJiBmaWVsZC5pbnB1dFR5cGVcIiBkeW5hbWljRmllbGQgW2NvbmZpZ109XCJmaWVsZFwiIFtncm91cF09XCJmb3JtR3JvdXBcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwuc2hvd1wiIChjbGljayk9XCJjYW5jZWwuZW1pdCgpXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkXHJcbiAgICAgICAgICB8IGFzeW5jKT8uZXZlbnRzLmNhbmNlbC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAqbmdJZj1cIihzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuYWNjZXB0LnNob3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkXHJcbiAgICAgICAgICB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+XHJcbiAgPGZvcm0gKm5nSWY9XCJmb3JtR3JvdXBDcmVhdGVkICYmICFjYXJkXCIgY2xhc3M9XCJuZ3MtZHluYW1pYy1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiYWNjZXB0ZWQoKVwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIHt7KHNjaGVtYSQgfCBhc3luYyk/Lm5hbWV9fVxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIChzY2hlbWEkIHwgYXN5bmMpPy5mb3JtLmZpZWxkcztcIiBbZnhGbGV4XT1cImZpZWxkLndpZHRoICogMTBcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgZHluYW1pY0ZpZWxkIFtjb25maWddPVwiZmllbGRcIiBbZ3JvdXBdPVwiZm9ybUdyb3VwXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwuc2hvd1wiIChjbGljayk9XCJjYW5jZWwuZW1pdCgpXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkXHJcbiAgICAgICAgICB8IGFzeW5jKT8uZXZlbnRzLmNhbmNlbC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAqbmdJZj1cIihzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuYWNjZXB0LnNob3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkXHJcbiAgICAgICAgICB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcblxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRAT3V0cHV0KCkgYWNjZXB0ID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtR3JvdXA+KCk7XHJcblx0QE91dHB1dCgpIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xyXG5cdEBJbnB1dCgpIGxvY2FsO1xyXG5cdEBJbnB1dCgpIGNhcmQgPSBmYWxzZTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBpZChpZDogc3RyaW5nKSB7XHJcblx0XHRpZiAoIXRoaXMubG9jYWwpIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEZvcm1TY2hlbWFBY3Rpb24oaWQpKTtcclxuXHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHQuc2VsZWN0Rm9ybUJ5SWQoaWQpXHJcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0LnN1YnNjcmliZShzY2hlbWEgPT4gdGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKSk7XHJcblx0fVxyXG5cdEBJbnB1dCgpXHJcblx0c2V0IHNjaGVtYShzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKTtcclxuXHR9XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Zm9ybUdyb3VwQ3JlYXRlZCA9IGZhbHNlO1xyXG5cdHNjaGVtYSQ6IEJlaGF2aW9yU3ViamVjdDxGb3JtU2NoZW1hTW9kZWw+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbXBpbGVyOiBDb21waWxlcixcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT5cclxuXHQpIHtcclxuXHRcdHRoaXMuc2NoZW1hJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc2NoZW1hJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSkuc3Vic2NyaWJlKHNjaGVtYSA9PiB7XHJcblx0XHRcdGlmICghc2NoZW1hKSByZXR1cm47XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5jcmVhdGVGcm9tKHNjaGVtYS5mb3JtKSBhcyBGb3JtR3JvdXA7XHJcblx0XHRcdGlmICghc2NoZW1hLmZvcm0ubmFtZSkgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cENyZWF0ZWQgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdGdlbmVyYXRlKHNjaGVtYTogRm9ybVNjaGVtYU1vZGVsKSB7XHJcblx0XHR0aGlzLnNjaGVtYSQubmV4dChzY2hlbWEpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRnJvbShkYXRhOiBGaWVsZENvbmZpZywgcGFyZW50UGF0aCA9IFwiXCIpOiBBYnN0cmFjdENvbnRyb2wge1xyXG5cdFx0aWYgKGRhdGEudHlwZSA9PSBcImNvbnRyb2xcIikge1xyXG5cdFx0XHRsZXQgZm9ybUdyb3VwUGF0aDtcclxuXHRcdFx0aWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImFycmF5XCIpIHtcclxuXHRcdFx0XHQvLyBwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHNbJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1dYDtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdFx0Zm9ybUdyb3VwUGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB2YWxpZGF0b3JzID0gW107XHJcblx0XHRcdGlmIChkYXRhLnZhbGlkYXRvci5yZXF1aXJlZCAmJiBkYXRhLnZhbGlkYXRvci5yZXF1aXJlZC5hY3RpdmUpIHtcclxuXHRcdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRhdGEudmFsaWRhdG9yLm1pbmxlbmd0aCAmJiBkYXRhLnZhbGlkYXRvci5taW5sZW5ndGguYWN0aXZlKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKGRhdGEudmFsaWRhdG9yLm1pbmxlbmd0aC52YWx1ZSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhLnZhbGlkYXRvci5lbWFpbCAmJiBkYXRhLnZhbGlkYXRvci5lbWFpbC5hY3RpdmUpIHtcclxuXHRcdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgY3RyID0gbmV3IEZvcm1Db250cm9sKGRhdGEudmFsdWUsIHZhbGlkYXRvcnMpO1xyXG5cdFx0XHQoY3RyIGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGN0ciBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0KGN0ciBhcyBhbnkpLnNjaGVtYS5mb3JtR3JvdXBQYXRoID0gZm9ybUdyb3VwUGF0aDtcclxuXHRcdFx0cmV0dXJuIGN0cjtcclxuXHRcdH0gZWxzZSBpZiAoZGF0YS50eXBlID09IFwiZ3JvdXBcIikge1xyXG5cdFx0XHRjb25zdCBmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuXHRcdFx0aWYgKGRhdGEucGFyZW50VHlwZSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gKGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGF0YS5wYXJlbnRUeXBlID09IFwiYXJyYXlcIikge1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9sc1skeyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfV1gO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImdyb3VwXCIpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHMuJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1gO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQoZm9ybUdyb3VwIGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGZvcm1Hcm91cCBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0ZGF0YS5maWVsZHMuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtLnBhcmVudFR5cGUgPSBcImdyb3VwXCI7XHJcblx0XHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woaXRlbS5uYW1lLCB0aGlzLmNyZWF0ZUZyb20oaXRlbSwgcGFyZW50UGF0aCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZvcm1Hcm91cDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IGZvcm1BcnJheTogRm9ybUFycmF5ID0gbmV3IEZvcm1BcnJheShbXSk7XHJcblx0XHRcdHBhcmVudFBhdGggPVxyXG5cdFx0XHRcdHBhcmVudFBhdGggPT0gXCJcIiA/IChkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lIDogYCR7cGFyZW50UGF0aH0uY29udHJvbHMuJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1gO1xyXG5cdFx0XHQoZm9ybUFycmF5IGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGZvcm1BcnJheSBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0ZGF0YS5maWVsZHMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcblx0XHRcdFx0aXRlbS5wYXJlbnRUeXBlID0gXCJhcnJheVwiO1xyXG5cdFx0XHRcdGl0ZW0ubmFtZSA9IGlkeC50b1N0cmluZygpO1xyXG5cdFx0XHRcdGZvcm1BcnJheS5jb250cm9scy5wdXNoKHRoaXMuY3JlYXRlRnJvbShpdGVtLCBwYXJlbnRQYXRoKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gZm9ybUFycmF5O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWNjZXB0ZWQoKSB7XHJcblx0XHR0aGlzLmFjY2VwdC5lbWl0KHRoaXMuZm9ybUdyb3VwKTtcclxuXHR9XHJcblx0Y2FuY2VsZWQoKSB7XHJcblx0XHR0aGlzLmNhbmNlbC5lbWl0KHRoaXMuZm9ybUdyb3VwKTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudHM6IHsgW3R5cGU6IHN0cmluZ106IFR5cGU8RmllbGQ+IH0gPSB7XHJcblx0Y2hlY2tib3g6IENoZWNrYm94Q29tcG9uZW50LFxyXG5cdHRleHQ6IFRleHRDb21wb25lbnQsXHJcblx0cGFzc3dvcmQ6IFRleHRDb21wb25lbnQsXHJcblx0ZGF0ZTogRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0ZmlsZTogRmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0dGFibGU6IFRhYmxlQ29tcG9uZW50LFxyXG5cdGNvbG9yOiBDb2xvckNvbXBvbmVudCxcclxuXHRlbWFpbDogRW1haWxDb21wb25lbnQsXHJcblx0Y2FwdGNoYTogRm9ybUNhcHRjaGFDb21wb25lbnQsXHJcblx0c2VsZWN0OiBTZWxlY3RDb21wb25lbnRcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltkeW5hbWljRmllbGRdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEZpZWxkLCBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcblx0QElucHV0KCkgY29uZmlnOiBGaWVsZENvbmZpZztcclxuXHJcblx0QElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8RmllbGQ+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuXHJcblx0bmdPbkNoYW5nZXMoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGlmICh0aGlzLmNvbmZpZy5pbnB1dFR5cGUgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblx0XHRpZiAoIWNvbXBvbmVudHNbdGhpcy5jb25maWcuaW5wdXRUeXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7dGhpcy5jb25maWcuaW5wdXRUeXBlfSkuXHJcblx0XHQgIFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PEZpZWxkPihjb21wb25lbnRzW3RoaXMuY29uZmlnLmlucHV0VHlwZV0pO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybXNMaXN0QWN0aW9uVHlwZXMsIEZvcm1zTGlzdEFjdGlvbnMgfSBmcm9tIFwiLi9saXN0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBGb3JtU2NoZW1hTW9kZWxbXTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBGb3Jtc0xpc3RBY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STV9TQ0hFTUFfVVBEQVRFOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5BRERfRk9STV9TQ0hFTUE6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX0ZFVENIRUQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0ICogYXMgbGlzdCBmcm9tIFwiLi4vbGlzdC9saXN0LnJlZHVjZXJzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1TdGF0ZSB7XHJcblx0bGlzdDogbGlzdC5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1SZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBsaXN0LnJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFpbkNvbnRhaW5lclN0YXRlIHtcclxuXHRcImZvcm1cIjogRm9ybVN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1ncm91cFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdj5cclxuXHJcbiAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiIW5vSGVhZGVyXCI+XHJcbiAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEubmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIiFub0hlYWRlclwiPlxyXG4gICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLnRpdGxlXCIgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiPlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJidXR0b24tcm93XCI+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Hcm91cChzY2hlbWEpXCI+IGFkZEZvcm1Hcm91cCA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUFycmF5KHNjaGVtYSlcIj4gYWRkRm9ybUFycmF5IDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQ29udHJvbChzY2hlbWEpXCI+YWRkRm9ybUNvbnRyb2w8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2Ygc2NoZW1hLmZpZWxkcztsZXQgaSA9IGluZGV4XCI+XHJcbiAgICA8ZGl2IFtuZ1N3aXRjaF09XCJmaWVsZC50eXBlXCI+XHJcbiAgICAgIDxhcHAtZm9ybS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgIDwhLS0gPGFwcC1mb3JtLWFycmF5ICpuZ1N3aXRjaENhc2U9XCInYXJyYXknXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1hcnJheT4gLS0+XHJcbiAgICAgIDxhcHAtZm9ybS1jb250cm9sICpuZ1N3aXRjaENhc2U9XCInY29udHJvbCdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCIgKGRlbGV0ZSk9XCJkZWxldGVGb3JtR3JvdXAoaSlcIj48L2FwcC1mb3JtLWNvbnRyb2w+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdEBJbnB1dCgpIG5vSGVhZGVyOiBib29sZWFuID0gZmFsc2U7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGNoYW5nZWQoKSB7XHJcblx0XHR0aGlzLmNoYW5nZXMuZW1pdCgpO1xyXG5cdH1cclxuXHJcblx0YWRkRm9ybUdyb3VwKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBncm91cCA9IG5ldyBGaWVsZENvbmZpZyhcImdyb3VwXCIpO1xyXG5cdFx0Z3JvdXAuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGdyb3VwKTtcclxuXHRcdHRoaXMuc2NoZW1hLmlkID0gdGhpcy5zY2hlbWEuaWQgKyAxO1xyXG5cdFx0cmV0dXJuIGdyb3VwO1xyXG5cdH1cclxuXHRhZGRGb3JtQXJyYXkocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGFycmF5ID0gbmV3IEZpZWxkQ29uZmlnKFwiYXJyYXlcIik7XHJcblx0XHRhcnJheS5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goYXJyYXkpO1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHRhZGRGb3JtQ29udHJvbChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IG5ldyBGaWVsZENvbmZpZyhcImNvbnRyb2xcIik7XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGNvbnRyb2w7XHJcblx0fVxyXG5cdGRlbGV0ZUZvcm1Hcm91cChpZHg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5zY2hlbWEuZmllbGRzLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1hcnJheVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS5uYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24tcm93XCI+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYSlcIj5hZGRGb3JtR3JvdXA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQXJyYXkoc2NoZW1hKVwiPmFkZEZvcm1BcnJheTwvYnV0dG9uPlxyXG4gICAgICA8IS0tIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUNvbnRyb2woc2NoZW1hKVwiPmFkZEZvcm1Db250cm9sPC9idXR0b24+IC0tPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHNjaGVtYS5maWVsZHNcIj5cclxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxyXG4gICAgICAgIDxhcHAtZm9ybS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWdyb3VwPlxyXG4gICAgICAgIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PlxyXG4gICAgICAgIDwhLS0gPGFwcC1mb3JtLWNvbnRyb2wgKm5nU3dpdGNoQ2FzZT1cIidjb250cm9sJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlKT1cImNoYW5nZWQoJGV2ZW50KVwiPjwvYXBwLWZvcm0tY29udHJvbD4gLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUFycmF5Q29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Y2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KCk7XHJcblx0fVxyXG5cclxuXHRhZGRGb3JtR3JvdXAocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGdyb3VwID0gbmV3IEZpZWxkQ29uZmlnKFwiZ3JvdXBcIik7XHJcblx0XHRncm91cC5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goZ3JvdXApO1xyXG5cdFx0cmV0dXJuIGdyb3VwO1xyXG5cdH1cclxuXHRhZGRGb3JtQXJyYXkocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGFycmF5ID0gbmV3IEZpZWxkQ29uZmlnKFwiYXJyYXlcIik7XHJcblx0XHRhcnJheS5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goYXJyYXkpO1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHRhZGRGb3JtQ29udHJvbChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IG5ldyBGaWVsZENvbmZpZyhcImNvbnRyb2xcIik7XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGNvbnRyb2w7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1jb250cm9sXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWV4cGFuc2lvbi1wYW5lbD5cclxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XHJcbiAgICA8bWF0LXBhbmVsLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlLmVtaXQoKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiaWNvbi1idXR0b25cIj5kZWxldGVfZm9yZXZlcjwvbWF0LWljb24+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8c3Bhbj57e3NjaGVtYS5uYW1lfX08L3NwYW4+XHJcblxyXG4gICAgPC9tYXQtcGFuZWwtdGl0bGU+XHJcbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjEwcHhcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS5uYW1lXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLnRpdGxlXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIklucHV0IFR5cGVcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRhYmxlXCI+dGFibGU8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5zZWxlY3Q8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dDwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm51bWJlclwiPm51bWJlcjwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImVtYWlsXCI+ZW1haWw8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjb2xvclwiPmNvbG9yPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmFkaW9cIj5yYWRpbzwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Y2hlY2tib3g8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPmNhcHRjaGE8L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsdWVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiVmFsdWVcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInNjaGVtYS53aWR0aFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJ3aWR0aFwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHdpZHRoXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwic2NoZW1hLmlucHV0VHlwZT09J3RhYmxlJ1wiIFtmb3JtR3JvdXBdPVwidGFibGVPcHRpb25zXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJkYXRhRW5kcG9pbnRcIiBwbGFjZWhvbGRlcj1cImRhdGFFbmRwb2ludFwiIC8+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwic2NoZW1hLmlucHV0VHlwZT09J3NlbGVjdCdcIj5cclxuICAgICAgW29wdGlvbnNdXHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZE9wdGlvbigpXCI+KzwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9XCJpbnNlcnRPcHRpb25zKClcIj5pbnNlcnQ8L2J1dHRvbj5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnMuY29udHJvbHM7aW5kZXggYXMgaVwiPlxyXG4gICAgICAgIHt7aX19XHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIm9wdGlvbnMuY29udHJvbHNbaV1cIj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwia2V5XCIgcGxhY2Vob2xkZXI9XCJrZXlcIiAvPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwidmFsdWVcIiBwbGFjZWhvbGRlcj1cInZhbHVlXCIgLz5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnIgLz5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5yZXF1aXJlZC5hY3RpdmVcIj7DmMKnw5jCrMOYwqjDmMKnw5jCscObwow8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IucmVxdWlyZWQubWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiw5nCvsObwozDmMK6w5jCp8OZwoVcIiAvPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5lbWFpbC5hY3RpdmVcIj7DmMKnw5vCjMOZwoXDm8KMw5nChDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCLDmcK+w5vCjMOYwrrDmMKnw5nChVwiIC8+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLm1pbmxlbmd0aC5hY3RpdmVcIj7DmMKtw5jCr8OYwqfDmcKCw5nChCDDmMKqw5jCucOYwq/DmMKnw5jCryDDmsKpw5jCp8OYwrHDmMKnw5rCqcOYwqrDmMKxPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCLDmcK+w5vCjMOYwrrDmMKnw5nChVwiIC8+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLnZhbHVlXCIgcGxhY2Vob2xkZXI9XCLDmMKqw5jCucOYwq/DmMKnw5jCryDDmMKtw5jCr8OYwqfDmcKCw5nChCDDmsKpw5jCp8OYwrHDmMKnw5rCqcOYwqrDmMKxXCIgLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWV4cGFuc2lvbi1wYW5lbD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbENvbXBvbmVudCB7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRAT3V0cHV0KCkgY2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHR3aWR0aCA9IFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAgXTtcclxuXHRvcHRpb25zID0gbmV3IEZvcm1BcnJheShbXHJcblx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0a2V5OiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0dmFsdWU6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHR9KVxyXG5cdF0pO1xyXG5cdHRhYmxlT3B0aW9ucyA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0ZGF0YUVuZHBvaW50OiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHR9KTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGNoYW5nZWQoKSB7XHJcblx0XHRpZiAoWyB0aGlzLnNjaGVtYS5uYW1lLCB0aGlzLnNjaGVtYS50aXRsZSwgdGhpcy5zY2hlbWEuaW5wdXRUeXBlIF0uc29tZShpdGVtID0+ICFpdGVtKSkgcmV0dXJuIHRydWU7XHJcblx0XHRpZiAodGhpcy5zY2hlbWEuaW5wdXRUeXBlID09IFwidGFibGVcIikge1xyXG5cdFx0XHR0aGlzLnNjaGVtYS5vcHRpb25zID0gdGhpcy50YWJsZU9wdGlvbnMudmFsdWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLmlucHV0VHlwZSA9PSBcInNlbGVjdFwiKSB7XHJcblx0XHRcdHRoaXMuc2NoZW1hLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMudmFsdWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmNoYW5nZXMuZW1pdCgpO1xyXG5cdH1cclxuXHJcblx0YWRkT3B0aW9uKCkge1xyXG5cdFx0dGhpcy5vcHRpb25zLnB1c2goXHJcblx0XHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGtleTogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdFx0dmFsdWU6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHRyZW1vdmVPcHRpb24oaSkge1xyXG5cdFx0dGhpcy5vcHRpb25zLmNvbnRyb2xzLnNwbGljZShpLCAxKTtcclxuXHR9XHJcblx0aW5zZXJ0T3B0aW9ucygpIHtcclxuXHRcdHRoaXMuc2NoZW1hLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMudmFsdWU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdEZvcm1BY3Rpb25UeXBlcyB7XHJcblx0RURJVF9GT1JNID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNXCIsXHJcblx0RURJVF9GT1JNX1NUQVJUID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX1NUQVJUXCIsXHJcblx0RURJVF9GT1JNX1NVQ0NFRUQgPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1fU1VDQ0VFRFwiLFxyXG5cdEVESVRfRk9STV9GQUlMRUQgPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1TdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1GYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVkaXRGb3JtQWN0aW9ucyA9IEVkaXRGb3JtQWN0aW9uIHwgRWRpdEZvcm1TdGFydEFjdGlvbiB8IEVkaXRGb3JtU3VjY2VlZEFjdGlvbiB8IEVkaXRGb3JtRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEFkZEZvcm1BY3Rpb25UeXBlcyB7XHJcblx0QUREX0ZPUk0gPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX1BST0ZJTEVcIixcclxuXHRBRERfRk9STV9TVEFSVCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fU1RBUlRcIixcclxuXHRBRERfRk9STV9TVUNDRUVEID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9TVUNDRUVEXCIsXHJcblx0QUREX0ZPUk1fRkFJTEVEID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFkZEZvcm1BY3Rpb25zID0gQWRkRm9ybUFjdGlvbiB8IEFkZEZvcm1TdGFydEFjdGlvbiB8IEFkZEZvcm1TdWNjZWVkQWN0aW9uIHwgQWRkRm9ybUZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQWN0aW9uIH0gZnJvbSBcIi4uL2FkZC1mb3JtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgQWRkRm9ybVNjaGVtYUFjdGlvbiwgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saXN0L2xpc3QuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPG5ncy1mb3JtLWFkZCBcclxuXHRcdFx0XHRcdFtzY2hlbWFdPVwic2NoZW1hXCIgXHJcblx0XHRcdFx0XHQoY2hhbmdlcyk9XCJ1cGRhdGVfc2NoZW1hKCRldmVudClcIiBcclxuXHRcdFx0XHRcdChzdWJtaXRlZCk9YWRkKCRldmVudClcclxuXHRcdFx0XHQ+PC9uZ3MtZm9ybS1hZGQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0c2NoZW1hOiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+LCBwdWJsaWMgc2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnNjaGVtYSA9IG5ldyBGb3JtU2NoZW1hTW9kZWwoKTtcclxuXHRcdHRoaXMuc2NoZW1hLmluaXQoKTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZEZvcm1TY2hlbWFBY3Rpb24odGhpcy5zY2hlbWEpKTtcclxuXHR9XHJcblx0YWRkKGZvcm06IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkRm9ybUFjdGlvbihmb3JtKSk7XHJcblx0fVxyXG5cdHVwZGF0ZV9zY2hlbWEoZm9ybTogRm9ybVNjaGVtYU1vZGVsKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uKGZvcm0pKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1BY3Rpb24gfSBmcm9tIFwiLi4vLi4vZWRpdC9lZGl0LWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FkZC9hZGQtZm9ybS1jb250YWluZXJcIjtcclxuaW1wb3J0IHsgR2V0Rm9ybVNjaGVtYUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saXN0L2xpc3QuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZWRpdC1mb3JtXHJcblx0XHRcdFx0XHRbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiXHJcblx0XHRcdFx0XHRbc2NoZW1hXT1cInNjaGVtYVwiXHJcblx0XHRcdFx0XHQoY2hhbmdlcyk9XCJ1cGRhdGVfc2NoZW1hKCRldmVudClcIlxyXG5cdFx0XHRcdFx0KHN1Ym1pdGVkKT1cInVwZGF0ZSgkZXZlbnQpXCI+XHJcblx0XHRcdFx0PC9lZGl0LWZvcm0+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXAgPSBFZGl0Rm9ybUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHB1YmxpYyBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPikge1xyXG5cdFx0c3VwZXIoc3RvcmUsIHNlcnZpY2UpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtc1xyXG5cdFx0XHQubWFwKChwYXJhbXMpID0+IHBhcmFtc1tcIl9pZFwiXSlcclxuXHRcdFx0LnN1YnNjcmliZSgoaWQpID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEZvcm1TY2hlbWFBY3Rpb24oaWQpKSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXNcclxuXHRcdFx0Lm1hcCgocGFyYW1zKSA9PiBwYXJhbXNbXCJfaWRcIl0pXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGlkKSA9PiB0aGlzLnNlcnZpY2Uuc2VsZWN0Rm9ybUJ5SWQoaWQpKVxyXG5cdFx0XHQuZmlsdGVyKChkYXRhKSA9PiBkYXRhICE9IG51bGwpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zdWJzY3JpYmUoKGZvcm1TY2hlbWEpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNjaGVtYSA9IGZvcm1TY2hlbWE7XHJcblx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShmb3JtU2NoZW1hKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRWRpdEZvcm1BY3Rpb24oZGF0YSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwsIEFkZEZvcm1BcGlNb2RlbCwgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1hZGRcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiAqbmdJZj1cInNjaGVtYVwiPlxyXG4gIDxkaXYgW2Z4RmxleF09XCI1MFwiICpuZ0lmPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwoHDmMKxw5nChSDDmMKsw5jCr8ObwozDmMKvPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChSDDmcKBw5jCscOZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtR3JvdXAoc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gZ3JvdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUFycmF5KHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGFycmF5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Db250cm9sKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L21hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJzY2hlbWEuZm9ybT8udHlwZVwiPlxyXG4gICAgICAgICAgICA8YXBwLWZvcm0tZ3JvdXAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIiBbc2NoZW1hXT1cInNjaGVtYS5mb3JtXCIgbm9IZWFkZXI9XCJ0cnVlXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1ncm91cD5cclxuICAgICAgICAgICAgPGFwcC1mb3JtLWFycmF5ICpuZ1N3aXRjaENhc2U9XCInYXJyYXknXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tYXJyYXk+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8IS0tIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImZvcm0uZ2VuZXJhdGUoc2NoZW1hKVwiPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwoHDmMKxw5nChTwvYnV0dG9uPiAtLT5cclxuICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImVtaXQoKVwiIHR5cGU9XCJzdWJtaXRcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcblxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5ldmVudHMpLmNvbnRyb2xzLmFjY2VwdFwiPlxyXG4gICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJzaG93XCI+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOYwqfDm8KMw5vCjMOYwq88L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKFw5jCqsOZwoYgw5jCqsOYwqfDm8KMw5vCjMOYwq9cIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5ldmVudHMpLmNvbnRyb2xzLmNhbmNlbFwiPlxyXG4gICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJzaG93XCI+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiIGZvcm1Db250cm9sTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L21hdC1jYXJkPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgW2Z4RmxleF09XCI1MFwiPlxyXG4gICAgPG5ncy1mb3JtLXZpZXcgW2xvY2FsXT0ndHJ1ZScgW2lkXT1cInNjaGVtYS5faWRcIj48L25ncy1mb3JtLXZpZXc+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1Db21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRm9ybVNjaGVtYU1vZGVsO1xyXG5cdEBJbnB1dCgpIGZvcm1Hcm91cCA9IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGVtaXQoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgZm9ybTogdGhpcy5zY2hlbWEuZm9ybSB9KTtcclxuXHRcdHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cdGNoYW5nZWQoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgZm9ybTogdGhpcy5zY2hlbWEuZm9ybSB9KTtcclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcblx0Y2hhbmdlT3JkZXIoJGV2ZW50KSB7fVxyXG5cclxuXHRhZGRGb3JtR3JvdXAocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGdyb3VwID0gbmV3IEZpZWxkQ29uZmlnKFwiZ3JvdXBcIik7XHJcblx0XHRncm91cC5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goZ3JvdXApO1xyXG5cdFx0cmV0dXJuIGdyb3VwO1xyXG5cdH1cclxuXHRhZGRGb3JtQXJyYXkocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGFycmF5ID0gbmV3IEZpZWxkQ29uZmlnKFwiYXJyYXlcIik7XHJcblx0XHRhcnJheS5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goYXJyYXkpO1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHRhZGRGb3JtQ29udHJvbChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IG5ldyBGaWVsZENvbmZpZyhcImNvbnRyb2xcIik7XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGNvbnRyb2w7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBBZGRGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FkZC9hZGQtZm9ybVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJlZGl0LWZvcm1cIixcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0XCIgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgKm5nSWY9XCJzY2hlbWFcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dEFsaWduPVwic3RhcnQgc3RhcnRcIiBmeExheW91dEFsaWduLmx0LW1kPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBmeEZsZXguZ3QtbWQ9XCI1MFwiIGZ4RmxleC5sdC1tZD1cIjEwMFwiICpuZ0lmPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwoHDmMKxw5nChSDDmMKsw5jCr8ObwozDmMKvPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChSDDmcKBw5jCscOZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtR3JvdXAoc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gZ3JvdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUFycmF5KHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGFycmF5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Db250cm9sKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgW25nU3dpdGNoXT1cInNjaGVtYS5mb3JtPy50eXBlXCIgY2xhc3M9XCJzY2hlbWEtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YXBwLWZvcm0tZ3JvdXAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIiBbc2NoZW1hXT1cInNjaGVtYS5mb3JtXCIgbm9IZWFkZXI9XCJ0cnVlXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1ncm91cD5cclxuICAgICAgICAgICAgICAgICAgPGFwcC1mb3JtLWFycmF5ICpuZ1N3aXRjaENhc2U9XCInYXJyYXknXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tYXJyYXk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ1dHRvbnNcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5ldmVudHMpLmNvbnRyb2xzLmFjY2VwdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmMKnw5vCjMObwozDmMKvPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKFw5jCqsOZwoYgw5jCqsOYwqfDm8KMw5vCjMOYwq9cIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBbZm9ybUdyb3VwXT1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLmV2ZW50cykuY29udHJvbHMuY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJzaG93XCI+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKFw5jCqsOZwoYgw5jCp8OZwobDmMK1w5jCscOYwqfDmcKBXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIiRhbnkoZm9ybSkuZ2VuZXJhdGUoc2NoZW1hKVwiPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwoHDmMKxw5nChTwvYnV0dG9uPiAtLT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZW1pdCgpXCIgdHlwZT1cInN1Ym1pdFwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG5cclxuICAgICAgICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXguZ3QtbWQ9XCI1MFwiIGZ4RmxleC5sdC1tZD1cIjEwMFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgc3RhcnRcIj5cclxuICAgICAgICAgIDxuZ3MtZm9ybS12aWV3IFtsb2NhbF09J3RydWUnIFtpZF09XCIgc2NoZW1hLl9pZFwiPlxyXG4gICAgICAgICAgPC9uZ3MtZm9ybS12aWV3PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gICAgc3R5bGVzOiBbYC5mb3JtLWJ1dHRvbnMsLnNjaGVtYS1mb3Jte3BhZGRpbmc6MjVweCAxMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUNvbXBvbmVudCBleHRlbmRzIEFkZEZvcm1Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgc2NoZW1hOiBhbnk7XHJcbiAgICBlbWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3Jtc0xpc3RBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGlzdC9saXN0LmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGZvcm0tbGlzdFxyXG5cdFx0XHRcdFx0W2RhdGFdPVwiZGF0YSRcIj5cclxuXHRcdFx0XHQ8L2Zvcm0tbGlzdD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtTGlzdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YSQ6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsW10+O1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPikge1xyXG5cdFx0dGhpcy5kYXRhJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZvcm0ubGlzdC5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBGb3Jtc0xpc3RBY3Rpb24oKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZm9ybS1saXN0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPmFzc2lnbm1lbnQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPHNwYW4+w5nChcOYwq/Dm8KMw5jCscObwozDmMKqIMOZwoHDmMKxw5nChSDDmcKHw5jCpzwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIMOYwrTDmMKnw5nChcOZwoQgw5jCqsOZwoXDmMKnw5nChcObwowgw5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqsOiwoDCjMOZwofDmMKnIMOYwqfDmMKyIMOZwoLDmMKow5vCjMOZwoQgw5jCr8OYwqfDmMKmw5jCscObwozDmMKMIMOYwqzDmcKFw5jCucOiwoDCjMOYwqLDmcKIw5jCscObwowgw5nCiCAuLi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXN1YnRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuXHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydFwiPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleC5sdC1sZz1cIjE5XCIgZnhGbGV4LmxnPVwiMjRcIiBmeEZsZXgubWQ9XCIzMlwiIGZ4RmxleC5zbT1cIjQ5XCIgZnhGbGV4LnhzPVwiMTAwXCIgY2xhc3M9J2xpbmsnXHJcbiAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIGl0ZW0uX2lkXVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIChkYXRhJCB8IGFzeW5jKVwiPlxyXG4gICAgICAgICAgPGRpdiBmeExheW91dD0nY29sdW1uJyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5Jz5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGl0bGUnPnt7aXRlbS5uYW1lfX08L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYGJ1dHRvbi5saW5re3BhZGRpbmc6MjVweCAxNXB4O21hcmdpbjouNSU7Ym94LXNpemluZzpib3JkZXItYm94fWJ1dHRvbiBtYXQtaWNvbntmb250LXNpemU6MzRweDt3aWR0aDozNHB4O2hlaWdodDozNHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtTGlzdENvbXBvbmVudCB7XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG5cdEBJbnB1dChcImRhdGFcIikgZGF0YSQ6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsW10+O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIE1haW5Db250YWluZXJSZWR1Y2VyIGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIixcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db250YWluZXJDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyUmVkdWNlci5NYWluQ29udGFpbmVyU3RhdGU+KSB7IH1cclxufVxyXG4iLCJpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQWN0aW9uVHlwZXMsIEFkZEZvcm1TdGFydEFjdGlvbiwgQWRkRm9ybVN1Y2NlZWRBY3Rpb24sIEFkZEZvcm1GYWlsZWRBY3Rpb24gfSBmcm9tIFwiLi9hZGQtZm9ybS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRBZGRGb3JtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBBZGRGb3JtU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0QWRkRm9ybVN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuYWRkKGRhdGEpKSxcclxuXHRcdFx0bWFwKHJlcyA9PiBuZXcgQWRkRm9ybVN1Y2NlZWRBY3Rpb24oKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEFkZEZvcm1GYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7XHJcblx0Rm9ybXNMaXN0QWN0aW9uLFxyXG5cdEZvcm1zTGlzdEFjdGlvblR5cGVzLFxyXG5cdEZvcm1zTGlzdEFjdGlvbnMsXHJcblx0Rm9ybXNMaXN0RmFpbGVkQWN0aW9uLFxyXG5cdEZvcm1zTGlzdFN0YXJ0QWN0aW9uLFxyXG5cdEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24sXHJcblx0Rm9ybVNjaGVtYUZlY2hlZEFjdGlvblxyXG59IGZyb20gXCIuL2xpc3QuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVCkubWFwKGRhdGEgPT4gbmV3IEZvcm1zTGlzdFN0YXJ0QWN0aW9uKCkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRHZXRGb3JtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRm9ybXNMaXN0QWN0aW9uVHlwZXMuR0VUX0ZPUk1fU0NIRU1BKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLmdldChpZCkpLFxyXG5cdFx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgRm9ybVNjaGVtYUZlY2hlZEFjdGlvbihmb3JtU2NoZW1hKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldF9mb3Jtc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEZvcm1zTGlzdEZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7XHJcblx0RWRpdEZvcm1BY3Rpb25UeXBlcyxcclxuXHRFZGl0Rm9ybVN0YXJ0QWN0aW9uLFxyXG5cdEVkaXRGb3JtU3VjY2VlZEFjdGlvbixcclxuXHRFZGl0Rm9ybUZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2VkaXQtZm9ybS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24gfSBmcm9tIFwiLi4vbGlzdFwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRGb3JtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk0pXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEVkaXRGb3JtU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdEZvcm1TdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLnVwZGF0ZShkYXRhKSksXHJcblx0XHRcdG1hcChmb3JtU2NoZW1hID0+IG5ldyBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24oZm9ybVNjaGVtYSkpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBFZGl0Rm9ybUZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwZGF0ZUZvcm1zTGlzdFN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1VDQ0VFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZm9ybVNjaGVtYSA9PiBuZXcgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbihmb3JtU2NoZW1hKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC9lZGl0LWZvcm0tY29udGFpbmVyL2VkaXQtZm9ybS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2Zvcm0tbGlzdC1jb250YWluZXIvZm9ybS1saXN0LmNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiZm9ybVwiLFxyXG5cdFx0Y29tcG9uZW50OiBNYWluQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiYWRkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOl9pZFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRWRpdEZvcm1Db250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBGb3JtTGlzdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENhcHRjaGFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvY2FwdGNoYS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gQ2FwdGNoYUFjdGlvblR5cGVzIHtcclxuXHRHRVRfQ0FQVENIQSA9IFwiW0NBUFRDSEFdW0dFVF0gR0VUX0NBUFRDSEFcIixcclxuXHRHRVRfQ0FQVENIQV9TVEFSVCA9IFwiW0NBUFRDSEFdW0dFVF0gR0VUX0NBUFRDSEFfU1RBUlRcIixcclxuXHRHRVRfQ0FQVENIQV9TVUNDRUVEID0gXCJbQ0FQVENIQV1bR0VUXSBHRVRfQ0FQVENIQV9TVUNDRUVEXCIsXHJcblx0R0VUX0NBUFRDSEFfRkFJTEVEID0gXCJbQ0FQVENIQV1bR0VUXSBHRVRfQ0FQVENIQV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q2FwdGNoYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQTtcclxuXHQvLyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2FwdGNoYU1vZGVsKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0Q2FwdGNoYVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDYXB0Y2hhTW9kZWwpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRDYXB0Y2hhU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQV9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRDYXB0Y2hhRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ2FwdGNoYUFjdGlvbnMgPSBHZXRDYXB0Y2hhQWN0aW9uIHwgR2V0Q2FwdGNoYVN0YXJ0QWN0aW9uIHwgR2V0Q2FwdGNoYVN1Y2NlZWRBY3Rpb24gfCBHZXRDYXB0Y2hhRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdENhcHRjaGFBY3Rpb25UeXBlcyxcclxuXHRHZXRDYXB0Y2hhU3VjY2VlZEFjdGlvbixcclxuXHRHZXRDYXB0Y2hhRmFpbGVkQWN0aW9uLFxyXG5cdEdldENhcHRjaGFTdGFydEFjdGlvblxyXG59IGZyb20gXCIuL2NhcHRjaGEuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ2FwdGNoYVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS1jYXB0Y2hhLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhcHRjaGFFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogRm9ybUNhcHRjaGFTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRHZXRDYXB0Y2hhJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBHZXRDYXB0Y2hhU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0QWRkRm9ybVN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuZ2V0Q2FwdGNoYSgpKSxcclxuXHRcdFx0bWFwKHJlcyA9PiBuZXcgR2V0Q2FwdGNoYVN1Y2NlZWRBY3Rpb24oKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEdldENhcHRjaGFGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUsIG1lcmdlRWZmZWN0cyB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi9mb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGb3JtUmVkdWNlcnMgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUFycmF5Q29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2Zvcm0tYXJyYXkvZm9ybS1hcnJheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybVZpZXdDb21wb25lbnQsIER5bmFtaWNGaWVsZERpcmVjdGl2ZSB9IGZyb20gXCIuL3ZpZXcvZm9ybS12aWV3L2Zvcm0tdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy90ZXh0L3RleHQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbWFpbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9lbWFpbC9lbWFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29sb3JDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvY29sb3IvY29sb3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWJlckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy90YWJsZS90YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS1jb250YWluZXIvZWRpdC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9mb3JtLWxpc3QtY29udGFpbmVyL2Zvcm0tbGlzdC5jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9mb3JtLWxpc3QvZm9ybS1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtLWNvbnRhaW5lci9hZGQtZm9ybS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0vYWRkLWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1FZmZlY3RzIH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1FZmZlY3RzIH0gZnJvbSBcIi4vZWRpdC9lZGl0LWZvcm0uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGb3Jtc0xpc3RFZmZlY3RzIH0gZnJvbSBcIi4vbGlzdC9saXN0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2Zvcm0tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvZGF0ZS9kYXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9maWxlL2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhcHRjaGFFZmZlY3RzIH0gZnJvbSBcIi4vYWRkL2NhcHRjaGEuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGb3JtQ2FwdGNoYUNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9mb3JtLWNhcHRjaGFcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdEVkaXRGb3JtQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUxpc3RDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRGb3JtTGlzdENvbXBvbmVudCxcclxuXHRcdEFkZEZvcm1Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRNYWluQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0QWRkRm9ybUNvbXBvbmVudCxcclxuXHRcdEZvcm1Hcm91cENvbXBvbmVudCxcclxuXHRcdEZvcm1BcnJheUNvbXBvbmVudCxcclxuXHRcdEZvcm1Db250cm9sQ29tcG9uZW50LFxyXG5cdFx0Rm9ybVZpZXdDb21wb25lbnQsXHJcblx0XHREeW5hbWljRmllbGREaXJlY3RpdmUsXHJcblx0XHRTZWxlY3RDb21wb25lbnQsXHJcblx0XHRDaGVja2JveENvbXBvbmVudCxcclxuXHRcdEVtYWlsQ29tcG9uZW50LFxyXG5cdFx0Q29sb3JDb21wb25lbnQsXHJcblx0XHREYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0VGV4dENvbXBvbmVudCxcclxuXHRcdE51bWJlckNvbXBvbmVudCxcclxuXHRcdFRhYmxlQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUNhcHRjaGFDb21wb25lbnRcclxuXHRcdC8vIE5nc0Zvcm1TZWxlY3RvckNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRTZWxlY3RDb21wb25lbnQsXHJcblx0XHRDaGVja2JveENvbXBvbmVudCxcclxuXHRcdEVtYWlsQ29tcG9uZW50LFxyXG5cdFx0Q29sb3JDb21wb25lbnQsXHJcblx0XHREYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0VGV4dENvbXBvbmVudCxcclxuXHRcdE51bWJlckNvbXBvbmVudCxcclxuXHRcdFRhYmxlQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUNhcHRjaGFDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtGb3JtVmlld0NvbXBvbmVudF1cclxuXHQvLyBleHBvcnRzOiBbIEZvcm1WaWV3Q29tcG9uZW50LCBOZ3NGb3JtU2VsZWN0b3JDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzRm9ybU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogRm9ybU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NGb3JtTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfV1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0Zvcm1Nb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZm9ybVwiLCBGb3JtUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtBZGRGb3JtRWZmZWN0cywgRWRpdEZvcm1FZmZlY3RzLCBGb3Jtc0xpc3RFZmZlY3RzLCBDYXB0Y2hhRWZmZWN0c10pLFxyXG5cdFx0Um91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogW05nc0Zvcm1Nb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzRm9ybU1vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbIkJlaGF2aW9yU3ViamVjdCIsImxpc3Qu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
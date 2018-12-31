import { stringTemplate } from '@soushians/shared';
import { getFormModuleConfig } from '@soushians/config';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';
import { BehaviorSubject, Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableDataSource, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatDatepickerModule } from '@angular/material';
import { FormGroup, FormControl, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/Observable';
import { Store, StoreModule } from '@ngrx/store';
import { __decorate, __metadata } from 'tslib';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { InjectionToken, Inject, Injectable, Component, Input, Output, EventEmitter, NgModule, ViewContainerRef, ComponentFactoryResolver, Compiler, Directive, defineInjectable, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { filter, map, take, switchMap, takeUntil, catchError } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AddFormApiModel;
(function (AddFormApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                name: this.name,
                form: this.form,
                events: this.events
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
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
        }
    }
    AddFormApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    AddFormApiModel.Response = Response;
})(AddFormApiModel || (AddFormApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EditFormApiModel;
(function (EditFormApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                _id: this._id,
                name: this.name,
                form: this.form,
                events: this.events
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
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
        }
    }
    EditFormApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    EditFormApiModel.Response = Response;
})(EditFormApiModel || (EditFormApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FormListApiModel;
(function (FormListApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                Name: this.Name,
                Controls: this.Controls
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Name: new FormControl("", [Validators.required]),
                Controls: new FormGroup({})
            });
        }
    }
    FormListApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    FormListApiModel.Response = Response;
})(FormListApiModel || (FormListApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Validator {
    constructor() {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FieldConfig {
    /**
     * @param {?} type
     */
    constructor(type) {
        this.type = type;
        if (type != "control")
            this.fields = [];
        this.width = 3;
        this.validator = new Validator();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormSchemaModel {
    constructor() {
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
    init() {
        this._id = (Math.random() * 10).toString();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MODULE_DEFAULT_CONFIG = {
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
        captchaUrl: ""
    },
};
/** @type {?} */
const MODULE_CONFIG_TOKEN = new InjectionToken("FormModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getFormModuleConfig).subscribe(userConfig => {
            if (!userConfig)
                return;
            this._config = Object.assign({}, this._config, userConfig.Config);
            this.config$.next(this._config);
        });
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
FormConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
FormConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ FormConfigurationService.ngInjectableDef = defineInjectable({ factory: function FormConfigurationService_Factory() { return new FormConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: FormConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    add(data) {
        /** @type {?} */
        const model = new AddFormApiModel.Request(data);
        return this.configurationService.config$
            .filter((config) => config.endpoints.addForm != "")
            .take(1)
            .switchMap((config) => this.http.post(config.env.frontend_server + config.endpoints.addForm, model.getRequestBody()))
            .map((response) => response.Result);
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    get(_id) {
        return this.configurationService.config$
            .filter((config) => config.endpoints.getForm != "")
            .take(1)
            .switchMap((config) => this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.getForm, { _id })))
            .map((response) => response.Result);
    }
    /**
     * @return {?}
     */
    getList() {
        return this.configurationService.config$
            .filter((config) => config.endpoints.getList != "")
            .switchMap((config) => this.http.get(config.env.frontend_server + config.endpoints.getList))
            .map((response) => response.Result);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    update(data) {
        /** @type {?} */
        const model = new EditFormApiModel.Request(data);
        return this.configurationService.config$
            .filter((config) => config.endpoints.editForm != "")
            .take(1)
            .switchMap((config) => this.http.put(config.env.frontend_server + config.endpoints.editForm, model.getRequestBody()))
            .map((response) => response.Result);
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    delete(_id) {
        return this.configurationService.config$
            .filter((config) => config.endpoints.deleteForm != "")
            .switchMap((config) => this.http.get(config.env.frontend_server + config.endpoints.deleteForm));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectFormById(_id) {
        /** @type {?} */
        const subject = new BehaviorSubject$1(undefined);
        this.store
            .select((state) => state.form.list.data)
            .pipe(filter((forms) => forms != null), map((forms) => forms.find((form) => form._id == _id)))
            .subscribe((formSchemaModel) => subject.next(formSchemaModel));
        return subject.asObservable();
    }
}
FormService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
FormService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: FormConfigurationService }
];
/** @nocollapse */ FormService.ngInjectableDef = defineInjectable({ factory: function FormService_Factory() { return new FormService(inject(HttpClient), inject(Store), inject(FormConfigurationService)); }, token: FormService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() { }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-select",
                template: "<div  [formGroup]=\"group\">\r\n<mat-form-field>\r\n    <mat-select [formControlName]=\"config.name\" [placeholder]=\"config.title\">\r\n      <mat-option *ngFor=\"let option of config.options\" [value]=\"option.value\">{{option.key}}</mat-option>\r\n    </mat-select>\r\n</mat-form-field>\r\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CheckboxComponent {
    constructor() { }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-checkbox",
                template: "<div [formGroup]=\"group\">\r\n    <mat-checkbox [formControlName]=\"config.name\">\r\n        {{config.title}}\r\n    </mat-checkbox>\r\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EmailComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
EmailComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-email",
                template: "<div  [formGroup]=\"group\">\r\n<mat-form-field fxFlexFill>\r\n    <input matInput [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\r\n</mat-form-field>\r\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            }] }
];
/** @nocollapse */
EmailComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ColorComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ColorComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-color",
                template: "<div  [formGroup]=\"form\">\r\n<mat-form-field fxFlexFill>\r\n    <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\r\n</mat-form-field>\r\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            }] }
];
/** @nocollapse */
ColorComponent.ctorParameters = () => [];
ColorComponent.propDecorators = {
    form: [{ type: Input }],
    schema: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TableComponent {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.selection = new SelectionModel(true, []);
        this.ready = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.http.get(this.schema.dataEndpoint).subscribe((data) => {
            this.ready = true;
            this.displayedColumns = data.displayedColumns;
            this.filedDisplayedColumns = data.filedDisplayedColumns;
            this.dataSource = new MatTableDataSource(data.dataSource);
        });
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        this.form.patchValue({
            [this.schema.name]: this.selection.selected
        });
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-table",
                template: "<div class=\"example-container mat-elevation-z8\" *ngIf=\"ready\">\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n  \r\n      <ng-container matColumnDef=\"select\">\r\n        <mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n            [checked]=\"selection.hasValue() && isAllSelected()\"\r\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n          </mat-checkbox>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n            (change)=\"$event ? selection.toggle(row) : null\"\r\n            [checked]=\"selection.isSelected(row)\">\r\n          </mat-checkbox>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <div *ngFor=\"let col of filedDisplayedColumns\">\r\n        <ng-container  [matColumnDef]=\"col\">\r\n          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>\r\n        </ng-container>\r\n      </div>\r\n        \r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n        <mat-cell class='left-align' *matCellDef=\"let row\">\r\n          <button mat-icon-button>\r\n            <mat-icon aria-label=\"\u0627\u0646\u062A\u062E\u0627\u0628\">arrow_back</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n    \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>\r\n\r\n    </mat-table>\r\n  </div>\r\n\r\n\r\n<!-- <mat-form-field fxFlexFill [formGroup]=\"form\">\r\n  \r\n  <input matInput [id]=\"schema.name\" [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\r\n  \r\n  <mat-error *ngIf=\"form.get(schema.name).errors?.required\">\r\n    {{schema.validator.required.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"form.get(schema.name).errors?.minlength\">\r\n    {{schema.validator.minlength.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"form.get(schema.name).email?.minlength\">\r\n    {{schema.validator.email.message}}\r\n  </mat-error>\r\n</mat-form-field> -->\r\n  \r\n  <!-- <div *ngIf=\"form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)\" class=\"alert alert-danger\">\r\n  </div> -->",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: HttpClient }
];
TableComponent.propDecorators = {
    form: [{ type: Input }],
    schema: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NumberComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
NumberComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-number",
                template: "<div  [formGroup]=\"form\">\r\n    <mat-form-field fxFlexFill>\r\n        <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\r\n    </mat-form-field>\r\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            }] }
];
/** @nocollapse */
NumberComponent.ctorParameters = () => [];
NumberComponent.propDecorators = {
    form: [{ type: Input }],
    schema: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TextComponent {
    constructor() { }
}
TextComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-text",
                template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\r\n\r\n  <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\r\n\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\r\n    {{config.validator.required.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\r\n    {{config.validator.minlength.message}}\r\n  </mat-error>\r\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\r\n    {{config.validator.email.message}}\r\n  </mat-error> -->\r\n\r\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\r\n  </div> -->\r\n\r\n</mat-form-field>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            }] }
];
/** @nocollapse */
TextComponent.ctorParameters = () => [];

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
class FormsListAction {
    constructor() {
        this.type = FormsListActionTypes.FORMS_LIST;
    }
}
class FormsListStartAction {
    constructor() {
        this.type = FormsListActionTypes.FORMS_LIST_START;
    }
}
class FormsListSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORMS_LIST_SUCCEED;
    }
}
class FormsListFailedAction {
    constructor() {
        this.type = FormsListActionTypes.FORMS_LIST_FAILED;
    }
}
class UpdateFormSchemaAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
    }
}
class AddFormSchemaAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
    }
}
class GetFormSchemaAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.GET_FORM_SCHEMA;
    }
}
class FormSchemaFechedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_FETCHED;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DateFormInputControlComponent {
    constructor() { }
}
DateFormInputControlComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-date",
                template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\r\n\r\n  <!-- <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\"> -->\r\n  <input matInput [id]=\"config.name\" [matDatepicker]=\"_datepicker\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\r\n  <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #_datepicker></mat-datepicker>\r\n\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\r\n    {{config.validator.required.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\r\n    {{config.validator.minlength.message}}\r\n  </mat-error>\r\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\r\n    {{config.validator.email.message}}\r\n  </mat-error> -->\r\n\r\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\r\n  </div> -->\r\n\r\n</mat-form-field>\r\n\r\n<!-- \r\n\r\n<div [formGroup]=\"formGroup\">\r\n    <div class=\"field-wrapper\">\r\n      <div [@filedAnimation]=\"mode\">\r\n        <mat-form-field class=\"fit\" [(ngClass)]=\"mode\">\r\n            <input matInput [matDatepicker]=\"_datepicker\" [placeholder]=\"placeholder\" [formControlName]=\"controlName\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #_datepicker></mat-datepicker>\r\n            \r\n          <mat-icon class=\"tooltip md-18\" *ngIf=\"tooltip\" [matTooltip]=\"tooltip\">help</mat-icon>\r\n        </mat-form-field>\r\n        <div class=\"value-box\"> \r\n          <span class=\"name\">\r\n            {{ placeholder }} :\r\n          </span>\r\n          <span class=\"value\">\r\n            {{(DisplayValue$ | async | persianDate)}} \r\n          </span>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div> -->",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            }] }
];
/** @nocollapse */
DateFormInputControlComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FileFormInputControlComponent {
    constructor() { }
}
FileFormInputControlComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-file",
                template: "<div fxFlexFill [formGroup]=\"group\">\r\n\r\n  <!-- <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\"> -->\r\n  <input [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\r\n\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\r\n    {{config.validator.required.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\r\n    {{config.validator.minlength.message}}\r\n  </mat-error>\r\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\r\n    {{config.validator.email.message}}\r\n  </mat-error> -->\r\n\r\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\r\n  </div> -->\r\n\r\n</div>\r\n\r\n<!-- \r\n\r\n<div [formGroup]=\"formGroup\">\r\n    <div class=\"field-wrapper\">\r\n      <div [@filedAnimation]=\"mode\">\r\n        <mat-form-field class=\"fit\" [(ngClass)]=\"mode\">\r\n            <input matInput [matDatepicker]=\"_datepicker\" [placeholder]=\"placeholder\" [formControlName]=\"controlName\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #_datepicker></mat-datepicker>\r\n            \r\n          <mat-icon class=\"tooltip md-18\" *ngIf=\"tooltip\" [matTooltip]=\"tooltip\">help</mat-icon>\r\n        </mat-form-field>\r\n        <div class=\"value-box\"> \r\n          <span class=\"name\">\r\n            {{ placeholder }} :\r\n          </span>\r\n          <span class=\"value\">\r\n            {{(DisplayValue$ | async | persianDate)}} \r\n          </span>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div> -->",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            }] }
];
/** @nocollapse */
FileFormInputControlComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormCaptchaService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    /**
     * @return {?}
     */
    getCaptcha() {
        debugger;
        return this.configurationService.config$.pipe(filter((captcha) => captcha.endpoints.captchaUrl != ""), take(1), switchMap((captcha) => this.http.get(captcha.env.server + captcha.endpoints.captchaUrl)), map((response) => response.Result));
    }
    /**
     * @return {?}
     */
    sendCaptcha() {
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.getList != ""), switchMap((config) => this.http.get(config.env.server + config.endpoints.getList)), map((response) => response.Result));
    }
}
FormCaptchaService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
FormCaptchaService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: FormConfigurationService }
];
/** @nocollapse */ FormCaptchaService.ngInjectableDef = defineInjectable({ factory: function FormCaptchaService_Factory() { return new FormCaptchaService(inject(HttpClient), inject(Store), inject(FormConfigurationService)); }, token: FormCaptchaService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CaptchaModel {
    /**
     * @param {?=} __0
     */
    constructor({ captchaImg, captchaCode } = {}) {
        this.captchaImg = `${captchaImg}?${Math.random()}`;
        this.captchaCode = captchaCode || "";
    }
}
var UpsertCaptchaApiModel;
(function (UpsertCaptchaApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.Captcha.captchaCode;
        }
    }
    UpsertCaptchaApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    UpsertCaptchaApiModel.Response = Response;
})(UpsertCaptchaApiModel || (UpsertCaptchaApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormCaptchaComponent {
    /**
     * @param {?} service
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(service, store, configurationService) {
        // this.captcha = new CaptchaModel({
        // 	captchaImg: "http://172.22.34.28:8001/api/authentication/captcha"
        // });
        this.service = service;
        this.store = store;
        this.configurationService = configurationService;
        this._captcha_generate();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        debugger;
    }
    /**
     * @return {?}
     */
    refresh() {
        this.captcha.captchaImg = this._captcha_generate() + `?${Math.random()}`;
    }
    /**
     * @return {?}
     */
    _captcha_generate() {
        this.configurationService.config$.pipe(map(config => config.env.server + config.endpoints.captchaUrl)).subscribe(captcha => {
            this.captcha = new CaptchaModel({
                captchaImg: captcha
            });
        });
    }
}
FormCaptchaComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-form-captcha",
                template: "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n  <img [src]=\"captcha.captchaImg\" />\r\n\r\n  <button mat-icon-button color=\"primary\" (click)=\"refresh()\">\r\n    <mat-icon>refresh</mat-icon>\r\n  </button>\r\n\r\n  <div [formGroup]=\"group\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput [id]=\"config.name\" [placeholder]=\"config.title\" [formControlName]=\"config.name\" />\r\n    </mat-form-field>\r\n  </div>\r\n</div>",
                styles: ["img{border:1px solid #e4e4e4}"]
            }] }
];
/** @nocollapse */
FormCaptchaComponent.ctorParameters = () => [
    { type: FormCaptchaService },
    { type: Store },
    { type: FormConfigurationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormViewComponent {
    /**
     * @param {?} service
     * @param {?} compiler
     * @param {?} resolver
     * @param {?} store
     */
    constructor(service, compiler, resolver, store) {
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
        this.schema$.pipe(takeUntil(this.unsubscribe)).subscribe(schema => {
            if (!schema)
                return;
            this.formGroup = /** @type {?} */ (this.createFrom(schema.form));
            if (!schema.form.name)
                return;
            this.formGroupCreated = true;
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set id(id) {
        if (!this.local)
            this.store.dispatch(new GetFormSchemaAction(id));
        this.service
            .selectFormById(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(schema => this.schema$.next(schema));
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    set schema(schema) {
        this.schema$.next(schema);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    generate(schema) {
        this.schema$.next(schema);
    }
    /**
     * @param {?} data
     * @param {?=} parentPath
     * @return {?}
     */
    createFrom(data, parentPath = "") {
        if (data.type == "control") {
            /** @type {?} */
            let formGroupPath;
            if (data.parentType == "array") ;
            else if (data.parentType == "group") {
                formGroupPath = parentPath;
                parentPath = `${parentPath}.controls.${((/** @type {?} */ (data))).name}`;
            }
            /** @type {?} */
            const validators = [];
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
            const ctr = new FormControl(data.value, validators);
            (/** @type {?} */ (ctr)).schema = data;
            (/** @type {?} */ (ctr)).schema.path = parentPath;
            (/** @type {?} */ (ctr)).schema.formGroupPath = formGroupPath;
            return ctr;
        }
        else if (data.type == "group") {
            /** @type {?} */
            const formGroup = new FormGroup({});
            if (data.parentType == undefined) {
                parentPath = (/** @type {?} */ (data)).name;
            }
            else if (data.parentType == "array") {
                parentPath = `${parentPath}.controls[${((/** @type {?} */ (data))).name}]`;
            }
            else if (data.parentType == "group") {
                parentPath = `${parentPath}.controls.${((/** @type {?} */ (data))).name}`;
            }
            (/** @type {?} */ (formGroup)).schema = data;
            (/** @type {?} */ (formGroup)).schema.path = parentPath;
            data.fields.forEach(item => {
                item.parentType = "group";
                formGroup.addControl(item.name, this.createFrom(item, parentPath));
            });
            return formGroup;
        }
        else {
            /** @type {?} */
            const formArray = new FormArray([]);
            parentPath =
                parentPath == "" ? (/** @type {?} */ (data)).name : `${parentPath}.controls.${((/** @type {?} */ (data))).name}`;
            (/** @type {?} */ (formArray)).schema = data;
            (/** @type {?} */ (formArray)).schema.path = parentPath;
            data.fields.forEach((item, idx) => {
                item.parentType = "array";
                item.name = idx.toString();
                formArray.controls.push(this.createFrom(item, parentPath));
            });
            return formArray;
        }
    }
    /**
     * @return {?}
     */
    accepted() {
        this.accept.emit(this.formGroup);
    }
    /**
     * @return {?}
     */
    canceled() {
        this.cancel.emit(this.formGroup);
    }
}
FormViewComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-view",
                template: "<div fxFlex=\"nogrow\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n  <form *ngIf=\"formGroupCreated && card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        {{(schema$ | async)?.name}}\r\n      </mat-card-title>\r\n      <mat-card-content fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\r\n          <ng-container *ngIf=\"field && field.inputType\" dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\r\n        </div>\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\">\r\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\r\n          | async)?.events.cancel.text}}</button>\r\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\r\n          | async)?.events.accept.text}}</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n  <form *ngIf=\"formGroupCreated && !card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\r\n    <div>\r\n      <h3>\r\n        {{(schema$ | async)?.name}}\r\n      </h3>\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"5px\">\r\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\r\n          <ng-container dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\r\n          | async)?.events.cancel.text}}</button>\r\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\r\n          | async)?.events.accept.text}}</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
FormViewComponent.ctorParameters = () => [
    { type: FormService },
    { type: Compiler },
    { type: ComponentFactoryResolver },
    { type: Store }
];
FormViewComponent.propDecorators = {
    accept: [{ type: Output }],
    cancel: [{ type: Output }],
    local: [{ type: Input }],
    card: [{ type: Input }],
    id: [{ type: Input }],
    schema: [{ type: Input }]
};
/** @type {?} */
const components = {
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
class DynamicFieldDirective {
    /**
     * @param {?} resolver
     * @param {?} container
     */
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        debugger;
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        debugger;
        if (this.config.inputType == undefined)
            return;
        if (!components[this.config.inputType]) {
            /** @type {?} */
            const supportedTypes = Object.keys(components).join(", ");
            throw new Error(`Trying to use an unsupported type (${this.config.inputType}).
		  Supported types: ${supportedTypes}`);
        }
        /** @type {?} */
        const component = this.resolver.resolveComponentFactory(components[this.config.inputType]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
}
DynamicFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dynamicField]"
            },] }
];
/** @nocollapse */
DynamicFieldDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicFieldDirective.propDecorators = {
    config: [{ type: Input }],
    group: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState = {
    status: "pristine",
    data: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer(state = initialState, action) {
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
            /** @type {?} */
            const data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(form => form._id == action.payload._id);
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case FormsListActionTypes.ADD_FORM_SCHEMA: {
            /** @type {?} */
            const data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(form => form._id == action.payload._id);
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case FormsListActionTypes.FORM_SCHEMA_FETCHED: {
            /** @type {?} */
            const data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(form => form._id == action.payload._id);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const FormReducers = {
    list: reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormGroupComponent {
    constructor() {
        this.noHeader = false;
        this.changes = new EventEmitter();
        this.delete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    changed() {
        this.changes.emit();
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormGroup(root) {
        /** @type {?} */
        const group = new FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        this.schema.id = this.schema.id + 1;
        return group;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormArray(root) {
        /** @type {?} */
        const array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormControl(root) {
        /** @type {?} */
        const control = new FieldConfig("control");
        root.fields.push(control);
        return control;
    }
    /**
     * @param {?} idx
     * @return {?}
     */
    deleteFormGroup(idx) {
        this.schema.fields.splice(idx, 1);
    }
}
FormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: "app-form-group",
                template: "<div>\r\n\r\n  <mat-form-field *ngIf=\"!noHeader\">\r\n    <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field *ngIf=\"!noHeader\">\r\n    <input matInput [(ngModel)]=\"schema.title\" placeholder=\"\u0639\u0646\u0648\u0627\u0646\">\r\n  </mat-form-field>\r\n\r\n  <div class=\"button-row\">\r\n    <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\"> addFormGroup </button>\r\n    <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\"> addFormArray </button>\r\n    <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button>\r\n  </div>\r\n\r\n  <div *ngFor=\"let field of schema.fields;let i = index\">\r\n    <div [ngSwitch]=\"field.type\">\r\n      <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (change)=\"changed()\"></app-form-group>\r\n      <!-- <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (change)=\"changed()\"></app-form-array> -->\r\n      <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (changes)=\"changed()\" (delete)=\"deleteFormGroup(i)\"></app-form-control>\r\n    </div>\r\n  </div>\r\n</div>"
            }] }
];
/** @nocollapse */
FormGroupComponent.ctorParameters = () => [];
FormGroupComponent.propDecorators = {
    schema: [{ type: Input }],
    noHeader: [{ type: Input }],
    changes: [{ type: Output }],
    delete: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormArrayComponent {
    constructor() {
        this.changes = new EventEmitter();
    }
    /**
     * @return {?}
     */
    changed() {
        this.changes.emit();
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormGroup(root) {
        /** @type {?} */
        const group = new FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        return group;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormArray(root) {
        /** @type {?} */
        const array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormControl(root) {
        /** @type {?} */
        const control = new FieldConfig("control");
        root.fields.push(control);
        return control;
    }
}
FormArrayComponent.decorators = [
    { type: Component, args: [{
                selector: "app-form-array",
                template: "<mat-card>\r\n  <mat-card-content>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\r\n    </mat-form-field>\r\n      \r\n    <div class=\"button-row\">\r\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\">addFormGroup</button>\r\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\">addFormArray</button>\r\n      <!-- <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button> -->\r\n    </div>\r\n    \r\n    <div *ngFor=\"let field of schema.fields\">\r\n      <div [ngSwitch]=\"field.type\">\r\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-group>\r\n        <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-array>\r\n        <!-- <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (change)=\"changed($event)\"></app-form-control> -->\r\n      </div>\r\n    </div>\r\n    \r\n  </mat-card-content>\r\n</mat-card>"
            }] }
];
/** @nocollapse */
FormArrayComponent.ctorParameters = () => [];
FormArrayComponent.propDecorators = {
    schema: [{ type: Input }],
    changes: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormControlComponent {
    constructor() {
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
    changed() {
        if ([this.schema.name, this.schema.title, this.schema.inputType].some(item => !item))
            return true;
        if (this.schema.inputType == "table") {
            this.schema.options = this.tableOptions.value;
        }
        else if (this.schema.inputType == "select") {
            this.schema.options = this.options.value;
        }
        this.changes.emit();
    }
    /**
     * @return {?}
     */
    addOption() {
        this.options.push(new FormGroup({
            key: new FormControl(),
            value: new FormControl()
        }));
    }
    /**
     * @param {?} i
     * @return {?}
     */
    removeOption(i) {
        this.options.controls.splice(i, 1);
    }
    /**
     * @return {?}
     */
    insertOptions() {
        this.schema.options = this.options.value;
    }
}
FormControlComponent.decorators = [
    { type: Component, args: [{
                selector: "app-form-control",
                template: "<mat-expansion-panel>\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <button mat-icon-button (click)=\"delete.emit()\">\r\n        <mat-icon aria-label=\"icon-button\">delete_forever</mat-icon>\r\n      </button>\r\n      <span>{{schema.name}}</span>\r\n\r\n    </mat-panel-title>\r\n  </mat-expansion-panel-header>\r\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput [(ngModel)]=\"schema.name\" (change)=\"changed()\" placeholder=\"Name\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field fxFlex>\r\n      <input matInput [(ngModel)]=\"schema.title\" (change)=\"changed()\" placeholder=\"Placeholder\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field fxFlex>\r\n      <mat-select [(ngModel)]=\"schema.inputType\" (change)=\"changed()\" placeholder=\"Input Type\">\r\n        <mat-option value=\"table\">table</mat-option>\r\n        <mat-option value=\"select\">select</mat-option>\r\n        <mat-option value=\"text\">text</mat-option>\r\n        <mat-option value=\"number\">number</mat-option>\r\n        <mat-option value=\"email\">email</mat-option>\r\n        <mat-option value=\"color\">color</mat-option>\r\n        <mat-option value=\"radio\">radio</mat-option>\r\n        <mat-option value=\"checkbox\">checkbox</mat-option>\r\n        <mat-option value=\"checkbox\">captcha</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput [(ngModel)]=\"schema.value\" (change)=\"changed()\" placeholder=\"Value\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field fxFlex>\r\n      <mat-select [(ngModel)]=\"schema.width\" (change)=\"changed()\" placeholder=\"width\">\r\n        <mat-option *ngFor=\"let item of width\" [value]=\"item\">{{item}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n    <div *ngIf=\"schema.inputType=='table'\" [formGroup]=\"tableOptions\">\r\n      <mat-form-field>\r\n        <input matInput (change)=\"changed()\" formControlName=\"dataEndpoint\" placeholder=\"dataEndpoint\" />\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div *ngIf=\"schema.inputType=='select'\">\r\n      [options]\r\n      <button (click)=\"addOption()\">+</button>\r\n      <button (click)=\"insertOptions()\">insert</button>\r\n      <div *ngFor=\"let option of options.controls;index as i\">\r\n        {{i}}\r\n        <div [formGroup]=\"options.controls[i]\">\r\n          <mat-form-field>\r\n            <input matInput (change)=\"changed()\" formControlName=\"key\" placeholder=\"key\" />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput (change)=\"changed()\" formControlName=\"value\" placeholder=\"value\" />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <mat-card fxLayout=\"column\">\r\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.active\">\u0627\u062C\u0628\u0627\u0631\u06CC</mat-slide-toggle>\r\n      <mat-form-field>\r\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\r\n      </mat-form-field>\r\n    </mat-card>\r\n    <mat-card fxLayout=\"column\">\r\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.active\">\u0627\u06CC\u0645\u06CC\u0644</mat-slide-toggle>\r\n      <mat-form-field>\r\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\r\n      </mat-form-field>\r\n    </mat-card>\r\n    <mat-card fxLayout=\"column\">\r\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.active\">\u062D\u062F\u0627\u0642\u0644 \u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631</mat-slide-toggle>\r\n      <mat-form-field>\r\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.value\" placeholder=\"\u062A\u0639\u062F\u0627\u062F \u062D\u062F\u0627\u0642\u0644 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631\" />\r\n      </mat-form-field>\r\n    </mat-card>\r\n  </div>\r\n</mat-expansion-panel>"
            }] }
];
/** @nocollapse */
FormControlComponent.ctorParameters = () => [];
FormControlComponent.propDecorators = {
    schema: [{ type: Input }],
    changes: [{ type: Output }],
    delete: [{ type: Output }]
};

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
class EditFormAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM;
    }
}
class EditFormStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_START;
    }
}
class EditFormSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_SUCCEED;
    }
}
class EditFormFailedAction {
    constructor() {
        this.type = EditFormActionTypes.EDIT_FORM_FAILED;
    }
}

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
class AddFormAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM;
    }
}
class AddFormStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM_START;
    }
}
class AddFormSucceedAction {
    constructor() {
        this.type = AddFormActionTypes.ADD_FORM_SUCCEED;
    }
}
class AddFormFailedAction {
    constructor() {
        this.type = AddFormActionTypes.ADD_FORM_FAILED;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AddFormContainerComponent {
    /**
     * @param {?} store
     * @param {?} service
     */
    constructor(store, service) {
        this.store = store;
        this.service = service;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.schema = new FormSchemaModel();
        this.schema.init();
        this.store.dispatch(new AddFormSchemaAction(this.schema));
    }
    /**
     * @param {?} form
     * @return {?}
     */
    add(form) {
        this.store.dispatch(new AddFormAction(form));
    }
    /**
     * @param {?} form
     * @return {?}
     */
    update_schema(form) {
        this.store.dispatch(new UpdateFormSchemaAction(form));
    }
}
AddFormContainerComponent.decorators = [
    { type: Component, args: [{
                template: `<ngs-form-add 
					[schema]="schema" 
					(changes)="update_schema($event)" 
					(submited)=add($event)
				></ngs-form-add>`
            }] }
];
/** @nocollapse */
AddFormContainerComponent.ctorParameters = () => [
    { type: Store },
    { type: FormService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EditFormContainerComponent extends AddFormContainerComponent {
    /**
     * @param {?} service
     * @param {?} route
     * @param {?} store
     */
    constructor(service, route, store) {
        super(store, service);
        this.service = service;
        this.route = route;
        this.store = store;
        this.formGroup = EditFormApiModel.Request.formGroup;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.route.params
            .map((params) => params["_id"])
            .subscribe((id) => this.store.dispatch(new GetFormSchemaAction(id)));
        this.route.params
            .map((params) => params["_id"])
            .switchMap((id) => this.service.selectFormById(id))
            .filter((data) => data != null)
            .take(1)
            .subscribe((formSchema) => {
            this.schema = formSchema;
            this.formGroup.patchValue(formSchema);
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    update(data) {
        this.store.dispatch(new EditFormAction(data));
    }
}
EditFormContainerComponent.decorators = [
    { type: Component, args: [{
                template: `<edit-form
					[formGroup]="formGroup"
					[schema]="schema"
					(changes)="update_schema($event)"
					(submited)="update($event)">
				</edit-form>`
            }] }
];
/** @nocollapse */
EditFormContainerComponent.ctorParameters = () => [
    { type: FormService },
    { type: ActivatedRoute },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AddFormComponent {
    constructor() {
        this.formGroup = AddFormApiModel.Request.formGroup;
        this.submited = new EventEmitter();
        this.changes = new EventEmitter();
    }
    /**
     * @return {?}
     */
    emit() {
        this.formGroup.patchValue({ form: this.schema.form });
        this.submited.emit(this.formGroup.value);
    }
    /**
     * @return {?}
     */
    changed() {
        this.formGroup.patchValue({ form: this.schema.form });
        this.changes.emit(this.formGroup.value);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    changeOrder($event) { }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormGroup(root) {
        /** @type {?} */
        const group = new FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        return group;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormArray(root) {
        /** @type {?} */
        const array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormControl(root) {
        /** @type {?} */
        const control = new FieldConfig("control");
        root.fields.push(control);
        return control;
    }
}
AddFormComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-add",
                template: "<div fxLayout=\"row\" *ngIf=\"schema\">\r\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\r\n    <form [formGroup]=\"formGroup\">\r\n      <mat-card>\r\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\r\n          </mat-form-field>\r\n          <!-- <div class=\"button-row\">\r\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\r\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\r\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\r\n              </div> -->\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div [ngSwitch]=\"schema.form?.type\">\r\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\r\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"form.generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\r\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\r\n        </mat-card-actions>\r\n\r\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\r\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\r\n          <mat-form-field>\r\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\r\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\r\n          <mat-form-field>\r\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </mat-card>\r\n    </form>\r\n  </div>\r\n  <div [fxFlex]=\"50\">\r\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\r\n  </div>\r\n</div>"
            }] }
];
AddFormComponent.propDecorators = {
    schema: [{ type: Input }],
    formGroup: [{ type: Input }],
    submited: [{ type: Output }],
    changes: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EditFormComponent extends AddFormComponent {
    /**
     * @return {?}
     */
    emit() {
        if (!this.formGroup.valid)
            return;
        return this.submited.emit(this.formGroup.value);
    }
}
EditFormComponent.decorators = [
    { type: Component, args: [{
                selector: "edit-form",
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\" class=\"with-sticky-action\">\r\n      <div fxLayout=\"row wrap\" *ngIf=\"schema\" fxFlex=\"100\" fxLayoutAlign=\"start start\" fxLayoutAlign.lt-md=\"center\">\r\n        <div fxFlex.gt-md=\"50\" fxFlex.lt-md=\"100\" *ngIf=\"formGroup\">\r\n          <form [formGroup]=\"formGroup\">\r\n            <mat-card>\r\n              <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n              <mat-card-content>\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\r\n                </mat-form-field>\r\n                <!-- <div class=\"button-row\">\r\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\r\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\r\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\r\n              </div> -->\r\n                <mat-divider></mat-divider>\r\n                <div [ngSwitch]=\"schema.form?.type\" class=\"schema-form\">\r\n                  <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\r\n                  <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\r\n                </div>\r\n\r\n                <mat-divider></mat-divider>\r\n                <div class=\"form-buttons\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n\r\n                  <div fxLayout=\"column\" [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\r\n                    <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\r\n                    <mat-form-field>\r\n                      <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div fxLayout=\"column\" [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\r\n                    <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\r\n                    <mat-form-field>\r\n                      <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <mat-card-actions>\r\n                  <!-- <button mat-raised-button color=\"primary\" (click)=\"$any(form).generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\r\n                  <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\r\n                </mat-card-actions>\r\n\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </form>\r\n        </div>\r\n        <div fxFlex.gt-md=\"50\" fxFlex.lt-md=\"100\" fxLayoutAlign=\"center start\">\r\n          <ngs-form-view [local]='true' [id]=\" schema._id\">\r\n          </ngs-form-view>\r\n\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>",
                styles: [".form-buttons,.schema-form{padding:25px 10px}"]
            }] }
];
EditFormComponent.propDecorators = {
    schema: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormListContainerComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.data$ = this.store.select(state => state.form.list.data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.dispatch(new FormsListAction());
    }
}
FormListContainerComponent.decorators = [
    { type: Component, args: [{
                template: `<form-list
					[data]="data$">
				</form-list>`
            }] }
];
/** @nocollapse */
FormListContainerComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormListComponent {
}
FormListComponent.decorators = [
    { type: Component, args: [{
                selector: "form-list",
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>assignment</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0631\u0645 \u0647\u0627</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\r\n\r\n        <button fxFlex.lt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"32\" fxFlex.sm=\"49\" fxFlex.xs=\"100\" class='link'\r\n          mat-raised-button [routerLink]=\"['edit' ,  item._id]\" *ngFor=\"let item of (data$ | async)\">\r\n          <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>settings</mat-icon>\r\n            <h3 class='title'>{{item.name}}</h3>\r\n          </div>\r\n        </button>\r\n\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>",
                styles: ["button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}"]
            }] }
];
FormListComponent.propDecorators = {
    data$: [{ type: Input, args: ["data",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MainContainerComponent {
    /**
     * @param {?} route
     * @param {?} store
     */
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
}
MainContainerComponent.decorators = [
    { type: Component, args: [{
                template: "<router-outlet></router-outlet>"
            }] }
];
/** @nocollapse */
MainContainerComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AddFormEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.AddForm$ = this.actions$
            .ofType(AddFormActionTypes.ADD_FORM)
            .pipe(map(action => action.payload), map(data => new AddFormStartAction(data)));
        this.AddFormStart$ = this.actions$
            .ofType(AddFormActionTypes.ADD_FORM_START)
            .pipe(map(action => action.payload), switchMap((data) => this.service.add(data)), map(res => new AddFormSucceedAction()), catchError(() => of(new AddFormFailedAction())));
    }
}
AddFormEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AddFormEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FormService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AddFormEffects.prototype, "AddForm$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AddFormEffects.prototype, "AddFormStart$", void 0);

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
class FormsListEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.ofType(FormsListActionTypes.FORMS_LIST).map(data => new FormsListStartAction());
        this.GetForm$ = this.actions$
            .ofType(FormsListActionTypes.GET_FORM_SCHEMA)
            .pipe(map(action => action.payload), switchMap(id => this.service.get(id)), map(formSchema => new FormSchemaFechedAction(formSchema)));
        this.get_forms_list$ = this.actions$
            .ofType(FormsListActionTypes.FORMS_LIST_START)
            .pipe(switchMap((data) => this.service.getList()), map(res => new FormsListSucceedAction(res)), catchError(() => of(new FormsListFailedAction())));
    }
}
FormsListEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormsListEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FormService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EditFormEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditForm$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM)
            .pipe(map(action => action.payload), map(data => new EditFormStartAction(data)));
        this.EditFormStart$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM_START)
            .pipe(map(action => action.payload), switchMap((data) => this.service.update(data)), map(formSchema => new EditFormSucceedAction(formSchema)), catchError(() => of(new EditFormFailedAction())));
        this.UpdateFormsListStart$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM_SUCCEED)
            .pipe(map(action => action.payload), map(formSchema => new UpdateFormSchemaAction(formSchema)));
    }
}
EditFormEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EditFormEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FormService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
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
const RoutingModule = RouterModule.forChild(routes);

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
class GetCaptchaStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CaptchaActionTypes.GET_CAPTCHA_START;
    }
}
class GetCaptchaSucceedAction {
    constructor() {
        this.type = CaptchaActionTypes.GET_CAPTCHA_SUCCEED;
    }
}
class GetCaptchaFailedAction {
    constructor() {
        this.type = CaptchaActionTypes.GET_CAPTCHA_FAILED;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CaptchaEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.GetCaptcha$ = this.actions$
            .ofType(CaptchaActionTypes.GET_CAPTCHA)
            .pipe(map(action => action.payload), map(data => new GetCaptchaStartAction(data)));
        this.AddFormStart$ = this.actions$
            .ofType(CaptchaActionTypes.GET_CAPTCHA_START)
            .pipe(map(action => action.payload), switchMap((data) => this.service.getCaptcha()), map(res => new GetCaptchaSucceedAction()), catchError(() => of(new GetCaptchaFailedAction())));
    }
}
CaptchaEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CaptchaEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FormCaptchaService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], CaptchaEffects.prototype, "GetCaptcha$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], CaptchaEffects.prototype, "AddFormStart$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgsFormModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsFormModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, FormConfigurationService]
        };
    }
}
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
            },] }
];
class RootNgsFormModule {
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { FormService, FormViewComponent, DynamicFieldDirective, NgsFormModule, RootNgsFormModule, AddFormComponent as ɵi, AddFormContainerComponent as ɵg, AddFormContainerComponent as ɵl, AddFormEffects as ɵbd, AddFormComponent as ɵn, CaptchaEffects as ɵbg, FormArrayComponent as ɵp, FormControlComponent as ɵq, FormGroupComponent as ɵo, EditFormContainerComponent as ɵf, EditFormEffects as ɵbe, EditFormComponent as ɵh, RoutingModule as ɵbh, MODULE_CONFIG_TOKEN as ɵa, FormListContainerComponent as ɵj, FormListComponent as ɵk, FormsListEffects as ɵbf, reducer as ɵbc, MainContainerComponent as ɵm, FormReducers as ɵb, FormCaptchaService as ɵbb, FormConfigurationService as ɵd, CheckboxComponent as ɵs, ColorComponent as ɵu, DateFormInputControlComponent as ɵv, EmailComponent as ɵt, FileFormInputControlComponent as ɵw, FormCaptchaComponent as ɵba, NumberComponent as ɵy, SelectComponent as ɵr, TableComponent as ɵz, TextComponent as ɵx };

//# sourceMappingURL=soushians-form.js.map
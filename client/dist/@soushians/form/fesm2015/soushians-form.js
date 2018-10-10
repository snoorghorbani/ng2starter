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
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import 'rxjs/Observable';
import { __decorate, __metadata } from 'tslib';
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
        getCaptcha: "/api/authentication/captcha"
    }
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
            },] },
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
            },] },
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
                template: `<div  [formGroup]="group">
<mat-form-field>
    <mat-select [formControlName]="config.name" [placeholder]="config.title">
      <mat-option *ngFor="let option of config.options" [value]="option.value">{{option.key}}</mat-option>
    </mat-select>
</mat-form-field>
</div>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
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
                template: `<div [formGroup]="group">
    <mat-checkbox [formControlName]="config.name">
        {{config.title}}
    </mat-checkbox>
</div>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
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
                template: `<div  [formGroup]="group">
<mat-form-field fxFlexFill>
    <input matInput [type]="config.inputType" [placeholder]="config.title" [formControlName]="config.name">
</mat-form-field>
</div>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
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
                template: `<div  [formGroup]="form">
<mat-form-field fxFlexFill>
    <input matInput [type]="schema.inputType" [placeholder]="schema.title" [formControlName]="schema.name">
</mat-form-field>
</div>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
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
                template: `<div class="example-container mat-elevation-z8" *ngIf="ready">
    <mat-table #table [dataSource]="dataSource">
  
      <ng-container matColumnDef="select">
        <mat-header-cell *matHeaderCellDef>
          <mat-checkbox (change)="$event ? masterToggle() : null"
            [checked]="selection.hasValue() && isAllSelected()"
            [indeterminate]="selection.hasValue() && !isAllSelected()">
          </mat-checkbox>
        </mat-header-cell>
        <mat-cell *matCellDef="let row">
          <mat-checkbox (click)="$event.stopPropagation()"
            (change)="$event ? selection.toggle(row) : null"
            [checked]="selection.isSelected(row)">
          </mat-checkbox>
        </mat-cell>
      </ng-container>

      <div *ngFor="let col of filedDisplayedColumns">
        <ng-container  [matColumnDef]="col">
          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{element[col]}} </mat-cell>
        </ng-container>
      </div>
        
      <ng-container matColumnDef="actions">
        <mat-header-cell *matHeaderCellDef></mat-header-cell>
        <mat-cell class='left-align' *matCellDef="let row">
          <button mat-icon-button>
            <mat-icon aria-label="انتخاب">arrow_back</mat-icon>
          </button>
        </mat-cell>
      </ng-container>
    
      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;" (click)="selection.toggle(row)"></mat-row>

    </mat-table>
  </div>


<!-- <mat-form-field fxFlexFill [formGroup]="form">
  
  <input matInput [id]="schema.name" [type]="schema.inputType" [placeholder]="schema.title" [formControlName]="schema.name">
  
  <mat-error *ngIf="form.get(schema.name).errors?.required">
    {{schema.validator.required.message}}
  </mat-error>
  <mat-error *ngIf="form.get(schema.name).errors?.minlength">
    {{schema.validator.minlength.message}}
  </mat-error>
  <mat-error *ngIf="form.get(schema.name).email?.minlength">
    {{schema.validator.email.message}}
  </mat-error>
</mat-form-field> -->
  
  <!-- <div *ngIf="form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)" class="alert alert-danger">
  </div> -->`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
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
                template: `<div  [formGroup]="form">
    <mat-form-field fxFlexFill>
        <input matInput [type]="schema.inputType" [placeholder]="schema.title" [formControlName]="schema.name">
    </mat-form-field>
</div>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
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
                template: `<mat-form-field fxFlexFill [formGroup]="group">

  <input matInput [id]="config.name" [type]="config.inputType" [placeholder]="config.title" [formControlName]="config.name">

  <mat-error *ngIf="group.get(config.name).errors?.required">
    {{config.validator.required.message}}
  </mat-error>
  <mat-error *ngIf="group.get(config.name).errors?.minlength">
    {{config.validator.minlength.message}}
  </mat-error>
  <!-- <mat-error *ngIf="group.get(config.name).email?.minlength">
    {{config.validator.email.message}}
  </mat-error> -->

  <!-- <div *ngIf="form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)" class="alert alert-danger">
  </div> -->

</mat-form-field>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
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
const FormsListActionTypes = {
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
                template: `<mat-form-field fxFlexFill [formGroup]="group">

  <!-- <input matInput [id]="config.name" [type]="config.inputType" [placeholder]="config.title" [formControlName]="config.name"> -->
  <input matInput [id]="config.name" [matDatepicker]="_datepicker" [placeholder]="config.title" [formControlName]="config.name">
  <mat-datepicker-toggle matSuffix [for]="_datepicker"></mat-datepicker-toggle>
  <mat-datepicker #_datepicker></mat-datepicker>

  <mat-error *ngIf="group.get(config.name).errors?.required">
    {{config.validator.required.message}}
  </mat-error>
  <mat-error *ngIf="group.get(config.name).errors?.minlength">
    {{config.validator.minlength.message}}
  </mat-error>
  <!-- <mat-error *ngIf="group.get(config.name).email?.minlength">
    {{config.validator.email.message}}
  </mat-error> -->

  <!-- <div *ngIf="form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)" class="alert alert-danger">
  </div> -->

</mat-form-field>

<!-- 

<div [formGroup]="formGroup">
    <div class="field-wrapper">
      <div [@filedAnimation]="mode">
        <mat-form-field class="fit" [(ngClass)]="mode">
            <input matInput [matDatepicker]="_datepicker" [placeholder]="placeholder" [formControlName]="controlName">
            <mat-datepicker-toggle matSuffix [for]="_datepicker"></mat-datepicker-toggle>
            <mat-datepicker #_datepicker></mat-datepicker>
            
          <mat-icon class="tooltip md-18" *ngIf="tooltip" [matTooltip]="tooltip">help</mat-icon>
        </mat-form-field>
        <div class="value-box"> 
          <span class="name">
            {{ placeholder }} :
          </span>
          <span class="value">
            {{(DisplayValue$ | async | persianDate)}} 
          </span>
          </div>
      </div>
    </div>
</div> -->`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
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
                template: `<div fxFlexFill [formGroup]="group">

  <!-- <input matInput [id]="config.name" [type]="config.inputType" [placeholder]="config.title" [formControlName]="config.name"> -->
  <input [id]="config.name" [type]="config.inputType" [placeholder]="config.title" [formControlName]="config.name">

  <mat-error *ngIf="group.get(config.name).errors?.required">
    {{config.validator.required.message}}
  </mat-error>
  <mat-error *ngIf="group.get(config.name).errors?.minlength">
    {{config.validator.minlength.message}}
  </mat-error>
  <!-- <mat-error *ngIf="group.get(config.name).email?.minlength">
    {{config.validator.email.message}}
  </mat-error> -->

  <!-- <div *ngIf="form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)" class="alert alert-danger">
  </div> -->

</div>

<!-- 

<div [formGroup]="formGroup">
    <div class="field-wrapper">
      <div [@filedAnimation]="mode">
        <mat-form-field class="fit" [(ngClass)]="mode">
            <input matInput [matDatepicker]="_datepicker" [placeholder]="placeholder" [formControlName]="controlName">
            <mat-datepicker-toggle matSuffix [for]="_datepicker"></mat-datepicker-toggle>
            <mat-datepicker #_datepicker></mat-datepicker>
            
          <mat-icon class="tooltip md-18" *ngIf="tooltip" [matTooltip]="tooltip">help</mat-icon>
        </mat-form-field>
        <div class="value-box"> 
          <span class="name">
            {{ placeholder }} :
          </span>
          <span class="value">
            {{(DisplayValue$ | async | persianDate)}} 
          </span>
          </div>
      </div>
    </div>
</div> -->`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
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
        return this.configurationService.config$.pipe(filter((captcha) => captcha.endpoints.getCaptcha != ""), take(1), switchMap((captcha) => this.http.get(captcha.env.server + captcha.endpoints.getCaptcha)), map((response) => response.Result));
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
            },] },
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
     */
    constructor(service, store) {
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
    ngOnInit() {
        debugger;
        // this.store.dispatch(new GetCaptchaAction());
    }
    /**
     * @return {?}
     */
    refresh() {
        this.captcha.captchaImg = `http://172.22.34.28:8001/api/authentication/captcha?${Math.random()}`;
    }
}
FormCaptchaComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-form-captcha",
                template: `<div>
  <img [src]="captcha.captchaImg" />

  <button (click)="refresh()">refresh</button>

  <div [formGroup]="group">
    <mat-form-field fxFlex>
      <input matInput [id]="config.name" [placeholder]="config.title" [formControlName]="config.name" />
    </mat-form-field>
  </div>
</div>`
            },] },
];
/** @nocollapse */
FormCaptchaComponent.ctorParameters = () => [
    { type: FormCaptchaService },
    { type: Store }
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
                template: `<div fxFlex="100" fxLayoutAlign="center center">
  <form *ngIf="formGroupCreated && card" class="ngs-dynamic-form" [formGroup]="formGroup" (ngSubmit)="accepted()">
    <mat-card>
      <mat-card-title>
        {{(schema$ | async)?.name}}
      </mat-card-title>
      <mat-card-content fxLayout="row wrap" fxLayoutGap="25px">
        <div *ngFor="let field of (schema$ | async)?.form.fields;" [fxFlex]="field.width * 10">
          <ng-container *ngIf="field && field.inputType" dynamicField [config]="field" [group]="formGroup"></ng-container>
        </div>
      </mat-card-content>
      <mat-card-actions align="end">
        <button type="button" *ngIf="(schema$ | async)?.events.cancel.show" (click)="cancel.emit()" mat-button color="primary">{{(schema$
          | async)?.events.cancel.text}}</button>
        <button type="submit" *ngIf="(schema$ | async)?.events.accept.show" mat-raised-button color="primary">{{(schema$
          | async)?.events.accept.text}}</button>
      </mat-card-actions>
    </mat-card>
  </form>
  <form *ngIf="formGroupCreated && !card" class="ngs-dynamic-form" [formGroup]="formGroup" (ngSubmit)="accepted()">
    <div>
      <h3>
        {{(schema$ | async)?.name}}
      </h3>
      <div fxLayout="row wrap" fxLayoutGap="5px">
        <div *ngFor="let field of (schema$ | async)?.form.fields;" [fxFlex]="field.width * 10">
          <ng-container dynamicField [config]="field" [group]="formGroup"></ng-container>
        </div>
      </div>
      <div>
        <button type="button" *ngIf="(schema$ | async)?.events.cancel.show" (click)="cancel.emit()" mat-button color="primary">{{(schema$
          | async)?.events.cancel.text}}</button>
        <button type="submit" *ngIf="(schema$ | async)?.events.accept.show" mat-raised-button color="primary">{{(schema$
          | async)?.events.accept.text}}</button>
      </div>
    </div>
  </form>

</div>`,
                styles: [``]
            },] },
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
            },] },
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
                template: `<div>

  <mat-form-field *ngIf="!noHeader">
    <input matInput [(ngModel)]="schema.name" placeholder="Name">
  </mat-form-field>

  <mat-form-field *ngIf="!noHeader">
    <input matInput [(ngModel)]="schema.title" placeholder="عنوان">
  </mat-form-field>

  <div class="button-row">
    <button mat-button color="primary" (click)="addFormGroup(schema)"> addFormGroup </button>
    <button mat-button color="primary" (click)="addFormArray(schema)"> addFormArray </button>
    <button mat-button color="primary" (click)="addFormControl(schema)">addFormControl</button>
  </div>

  <div *ngFor="let field of schema.fields;let i = index">
    <div [ngSwitch]="field.type">
      <app-form-group *ngSwitchCase="'group'" [schema]="field" (change)="changed()"></app-form-group>
      <!-- <app-form-array *ngSwitchCase="'array'" [schema]="field" (change)="changed()"></app-form-array> -->
      <app-form-control *ngSwitchCase="'control'" [schema]="field" (changes)="changed()" (delete)="deleteFormGroup(i)"></app-form-control>
    </div>
  </div>
</div>`
            },] },
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
                template: `<mat-card>
  <mat-card-content>
    <mat-form-field>
        <input matInput [(ngModel)]="schema.name" placeholder="Name">
    </mat-form-field>
      
    <div class="button-row">
      <button mat-button color="primary" (click)="addFormGroup(schema)">addFormGroup</button>
      <button mat-button color="primary" (click)="addFormArray(schema)">addFormArray</button>
      <!-- <button mat-button color="primary" (click)="addFormControl(schema)">addFormControl</button> -->
    </div>
    
    <div *ngFor="let field of schema.fields">
      <div [ngSwitch]="field.type">
        <app-form-group *ngSwitchCase="'group'" [schema]="field" (changes)="changed()"></app-form-group>
        <app-form-array *ngSwitchCase="'array'" [schema]="field" (changes)="changed()"></app-form-array>
        <!-- <app-form-control *ngSwitchCase="'control'" [schema]="field" (change)="changed($event)"></app-form-control> -->
      </div>
    </div>
    
  </mat-card-content>
</mat-card>`
            },] },
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
                template: `<mat-expansion-panel>
  <mat-expansion-panel-header>
    <mat-panel-title fxLayout="row" fxLayoutAlign="start center">
      <button mat-icon-button (click)="delete.emit()">
        <mat-icon aria-label="icon-button">delete_forever</mat-icon>
      </button>
      <span>{{schema.name}}</span>

    </mat-panel-title>
  </mat-expansion-panel-header>
  <div fxLayout="row wrap" fxLayoutGap="10px">
    <mat-form-field fxFlex>
      <input matInput [(ngModel)]="schema.name" (change)="changed()" placeholder="Name">
    </mat-form-field>

    <mat-form-field fxFlex>
      <input matInput [(ngModel)]="schema.title" (change)="changed()" placeholder="Placeholder" />
    </mat-form-field>

    <mat-form-field fxFlex>
      <mat-select [(ngModel)]="schema.inputType" (change)="changed()" placeholder="Input Type">
        <mat-option value="table">table</mat-option>
        <mat-option value="select">select</mat-option>
        <mat-option value="text">text</mat-option>
        <mat-option value="number">number</mat-option>
        <mat-option value="email">email</mat-option>
        <mat-option value="color">color</mat-option>
        <mat-option value="radio">radio</mat-option>
        <mat-option value="checkbox">checkbox</mat-option>
        <mat-option value="checkbox">captcha</mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  <div fxLayout="row wrap" fxLayoutGap="10px">
    <mat-form-field fxFlex>
      <input matInput [(ngModel)]="schema.value" (change)="changed()" placeholder="Value" />
    </mat-form-field>

    <mat-form-field fxFlex>
      <mat-select [(ngModel)]="schema.width" (change)="changed()" placeholder="width">
        <mat-option *ngFor="let item of width" [value]="item">{{item}}</mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  <div fxLayout="column" fxLayoutGap="10px">
    <div *ngIf="schema.inputType=='table'" [formGroup]="tableOptions">
      <mat-form-field>
        <input matInput (change)="changed()" formControlName="dataEndpoint" placeholder="dataEndpoint" />
      </mat-form-field>
    </div>

    <div *ngIf="schema.inputType=='select'">
      [options]
      <button (click)="addOption()">+</button>
      <button (click)="insertOptions()">insert</button>
      <div *ngFor="let option of options.controls;index as i">
        {{i}}
        <div [formGroup]="options.controls[i]">
          <mat-form-field>
            <input matInput (change)="changed()" formControlName="key" placeholder="key" />
          </mat-form-field>
          <mat-form-field>
            <input matInput (change)="changed()" formControlName="value" placeholder="value" />
          </mat-form-field>
        </div>
      </div>
    </div>
    <br />
    <mat-card fxLayout="column">
      <mat-slide-toggle (change)="changed()" [(ngModel)]="schema.validator.required.active">اجباری</mat-slide-toggle>
      <mat-form-field>
        <input matInput (change)="changed()" [(ngModel)]="schema.validator.required.message" placeholder="پیغام" />
      </mat-form-field>
    </mat-card>
    <mat-card fxLayout="column">
      <mat-slide-toggle (change)="changed()" [(ngModel)]="schema.validator.email.active">ایمیل</mat-slide-toggle>
      <mat-form-field>
        <input matInput (change)="changed()" [(ngModel)]="schema.validator.email.message" placeholder="پیغام" />
      </mat-form-field>
    </mat-card>
    <mat-card fxLayout="column">
      <mat-slide-toggle (change)="changed()" [(ngModel)]="schema.validator.minlength.active">حداقل تعداد کاراکتر</mat-slide-toggle>
      <mat-form-field>
        <input matInput (change)="changed()" [(ngModel)]="schema.validator.minlength.message" placeholder="پیغام" />
      </mat-form-field>
      <mat-form-field>
        <input matInput (change)="changed()" [(ngModel)]="schema.validator.minlength.value" placeholder="تعداد حداقل کاراکتر" />
      </mat-form-field>
    </mat-card>
  </div>
</mat-expansion-panel>`
            },] },
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
const EditFormActionTypes = {
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
const AddFormActionTypes = {
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
            },] },
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
            },] },
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
                template: `<div fxLayout="row" *ngIf="schema">
  <div [fxFlex]="50" *ngIf="formGroup">
    <form [formGroup]="formGroup">
      <mat-card>
        <mat-card-title>ایجاد فرم جدید</mat-card-title>
        <mat-card-content>
          <mat-form-field>
            <input type="text" matInput (change)="changed()" placeholder="نام فرم" formControlName="name">
          </mat-form-field>
          <!-- <div class="button-row">
                <button mat-button color="primary" (click)="addFormGroup(schema.form)">Add form group</button>
                <button mat-button color="primary" (click)="addFormArray(schema.form)">Add form array</button>
                <button mat-button color="primary" (click)="addFormControl(schema.form)">Add form control</button>
              </div> -->
        </mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-content>
          <div [ngSwitch]="schema.form?.type">
            <app-form-group *ngSwitchCase="'group'" [schema]="schema.form" noHeader="true" (changes)="changed()"></app-form-group>
            <app-form-array *ngSwitchCase="'array'" [schema]="schema.form" (changes)="changed()"></app-form-array>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <!-- <button mat-raised-button color="primary" (click)="form.generate(schema)">ایجاد فرم</button> -->
          <button mat-raised-button color="primary" (click)="emit()" type="submit">ثبت</button>
        </mat-card-actions>

        <div [formGroup]="$any(formGroup.controls.events).controls.accept">
          <mat-slide-toggle (change)="changed()" formControlName="show">نمایش تایید</mat-slide-toggle>
          <mat-form-field>
            <input type="text" (change)="changed()" matInput placeholder="متن تایید" formControlName="text">
          </mat-form-field>
        </div>
        <div [formGroup]="$any(formGroup.controls.events).controls.cancel">
          <mat-slide-toggle (change)="changed()" formControlName="show">نمایش انصراف</mat-slide-toggle>
          <mat-form-field>
            <input type="text" (change)="changed()" matInput placeholder="متن انصراف" formControlName="text">
          </mat-form-field>
        </div>

      </mat-card>
    </form>
  </div>
  <div [fxFlex]="50">
    <ngs-form-view [local]='true' [id]="schema._id"></ngs-form-view>
  </div>
</div>`
            },] },
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
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px" class="main-container">

  <div class="content-action">
    <mat-card fxLayout="column" fxLayoutGap="10px" fxLayoutAlign="start" class="with-sticky-action">
      <div fxLayout="row wrap" *ngIf="schema" fxFlex="100" fxLayoutAlign="start start" fxLayoutAlign.lt-md="center">
        <div fxFlex.gt-md="50" fxFlex.lt-md="100" *ngIf="formGroup">
          <form [formGroup]="formGroup">
            <mat-card>
              <mat-card-title>ایجاد فرم جدید</mat-card-title>
              <mat-card-content>
                <mat-form-field>
                  <input type="text" matInput (change)="changed()" placeholder="نام فرم" formControlName="name">
                </mat-form-field>
                <!-- <div class="button-row">
                <button mat-button color="primary" (click)="addFormGroup(schema.form)">Add form group</button>
                <button mat-button color="primary" (click)="addFormArray(schema.form)">Add form array</button>
                <button mat-button color="primary" (click)="addFormControl(schema.form)">Add form control</button>
              </div> -->
                <mat-divider></mat-divider>
                <div [ngSwitch]="schema.form?.type" class="schema-form">
                  <app-form-group *ngSwitchCase="'group'" [schema]="schema.form" noHeader="true" (changes)="changed()"></app-form-group>
                  <app-form-array *ngSwitchCase="'array'" [schema]="schema.form" (changes)="changed()"></app-form-array>
                </div>

                <mat-divider></mat-divider>
                <div class="form-buttons" fxLayout="row wrap" fxLayoutGap="10px">

                  <div fxLayout="column" [formGroup]="$any(formGroup.controls.events).controls.accept">
                    <mat-slide-toggle (change)="changed()" formControlName="show">نمایش تایید</mat-slide-toggle>
                    <mat-form-field>
                      <input type="text" (change)="changed()" matInput placeholder="متن تایید" formControlName="text">
                    </mat-form-field>
                  </div>
                  <div fxLayout="column" [formGroup]="$any(formGroup.controls.events).controls.cancel">
                    <mat-slide-toggle (change)="changed()" formControlName="show">نمایش انصراف</mat-slide-toggle>
                    <mat-form-field>
                      <input type="text" (change)="changed()" matInput placeholder="متن انصراف" formControlName="text">
                    </mat-form-field>
                  </div>
                </div>


                <mat-card-actions>
                  <!-- <button mat-raised-button color="primary" (click)="$any(form).generate(schema)">ایجاد فرم</button> -->
                  <button mat-raised-button color="primary" (click)="emit()" type="submit">ثبت</button>
                </mat-card-actions>

              </mat-card-content>
            </mat-card>
          </form>
        </div>
        <div fxFlex.gt-md="50" fxFlex.lt-md="100" fxLayoutAlign="center start">
          <ngs-form-view [local]='true' [id]=" schema._id">
          </ngs-form-view>

        </div>
      </div>
    </mat-card>
  </div>
</div>`,
                styles: [`.form-buttons,.schema-form{padding:25px 10px}`]
            },] },
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
            },] },
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
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px" class="main-container">

  <div class="content-action">
    <mat-card class="with-sticky-action">
      <mat-card-header>
        <mat-card-title fxLayout="row" fxLayoutGap="5px">
          <mat-icon>assignment</mat-icon>
          <span>مدیریت فرم ها</span>
        </mat-card-title>
        <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
          <span>
            شامل تمامی درخواست‌ها از قبیل دائری، جمع‌آوری و ...
          </span>
        </mat-card-subtitle>
      </mat-card-header>

      <div fxLayout="row wrap" fxLayoutGap="10px" fxLayoutAlign="start">

        <button fxFlex.lt-lg="19" fxFlex.lg="24" fxFlex.md="32" fxFlex.sm="49" fxFlex.xs="100" class='link'
          mat-raised-button [routerLink]="['edit' ,  item._id]" *ngFor="let item of (data$ | async)">
          <div fxLayout='column' fxLayoutAlign='center center'>
            <mat-icon color='primary'>settings</mat-icon>
            <h3 class='title'>{{item.name}}</h3>
          </div>
        </button>

      </div>
    </mat-card>
  </div>
</div>`,
                styles: [`button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}`]
            },] },
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
                template: "<router-outlet></router-outlet>",
            },] },
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
    { type: Injectable },
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
    { type: Injectable },
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
    { type: Injectable },
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
const CaptchaActionTypes = {
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
    { type: Injectable },
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
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
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
            },] },
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
            },] },
];

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
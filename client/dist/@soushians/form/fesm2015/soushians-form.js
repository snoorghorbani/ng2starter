import { InjectionToken, Inject, Injectable, Component, EventEmitter, Output, Input, NgModule, ViewContainerRef, ComponentFactoryResolver, Compiler, Directive, defineInjectable, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { getFormModuleConfig } from '@soushians/config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';
import { filter, map, takeUntil, switchMap, catchError } from 'rxjs/operators';
import { stringTemplate } from '@soushians/shared';
import { MatTableDataSource, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { __decorate, __metadata } from 'tslib';
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
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        addForm: "",
        editForm: "",
        getForm: "",
        getList: "",
        deleteForm: ""
    }
};
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("FormModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ model = new AddFormApiModel.Request(data);
        return this.configurationService.config$
            .filter(config => config.endpoints.addForm != "")
            .take(1)
            .switchMap(config => this.http.post(config.endpoints.addForm, model.getRequestBody()))
            .map((response) => response.Result);
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    get(_id) {
        return this.configurationService.config$
            .filter(config => config.endpoints.getForm != "")
            .take(1)
            .switchMap(config => this.http.get(stringTemplate(config.endpoints.getForm, { _id })))
            .map((response) => response.Result);
    }
    /**
     * @return {?}
     */
    getList() {
        return this.configurationService.config$
            .filter(config => config.endpoints.getList != "")
            .switchMap(config => this.http.get(config.endpoints.getList))
            .map((response) => response.Result);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    update(data) {
        const /** @type {?} */ model = new EditFormApiModel.Request(data);
        return this.configurationService.config$
            .filter(config => config.endpoints.editForm != "")
            .take(1)
            .switchMap(config => this.http.put(config.endpoints.editForm, model.getRequestBody()))
            .map((response) => response.Result);
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    delete(_id) {
        return this.configurationService.config$
            .filter(config => config.endpoints.deleteForm != "")
            .switchMap(config => this.http.get(config.endpoints.deleteForm));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectFormById(_id) {
        const /** @type {?} */ subject = new BehaviorSubject$1(undefined);
        this.store
            .select(state => state.form.list.data)
            .pipe(filter(forms => forms != null), map(forms => forms.find(form => form._id == _id)))
            .subscribe(FormSchemaModel$$1 => subject.next(FormSchemaModel$$1));
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ numSelected = this.selection.selected.length;
        this.form.patchValue({
            [this.schema.name]: this.selection.selected
        });
        const /** @type {?} */ numRows = this.dataSource.data.length;
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
            if (data.parentType == "array") ;
            else if (data.parentType == "group") {
                var /** @type {?} */ formGroupPath = parentPath;
                parentPath = `${parentPath}.controls.${((/** @type {?} */ (data))).name}`;
            }
            var /** @type {?} */ validators = [];
            if (data.validator.required.active) {
                validators.push(Validators.required);
            }
            if (data.validator.minlength.active) {
                validators.push(Validators.minLength(data.validator.minlength.value));
            }
            if (data.validator.email.active) {
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
            var /** @type {?} */ formArray = new FormArray([]);
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
                template: `<form *ngIf="formGroupCreated" class="dynamic-form" [formGroup]="formGroup" (ngSubmit)="accepted()">
  <mat-card>
    <mat-card-content fxLayout="row wrap" fxLayoutGap="25px">
      <div  *ngFor="let field of (schema$ | async)?.form.fields;" [fxFlex]="field.width * 10">
        <ng-container dynamicField  [config]="field" [group]="formGroup"></ng-container>
      </div>
    </mat-card-content>
    <mat-card-actions>
      <button fxFlex type="submit" *ngIf="(schema$ | async)?.events.accept.show" mat-raised-button color="primary">{{(schema$ | async)?.events.accept.text}}</button>
      <button fxFlex type="button" *ngIf="(schema$ | async)?.events.cancel.show" (click)="cancel.emit()" mat-raised-button color="primary">{{(schema$ | async)?.events.cancel.text}</button>
    </mat-card-actions>
  </mat-card>
</form>`
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
    id: [{ type: Input }],
    schema: [{ type: Input }]
};
const /** @type {?} */ components = {
    checkbox: CheckboxComponent,
    text: TextComponent,
    table: TableComponent,
    color: ColorComponent,
    email: EmailComponent,
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
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!components[this.config.inputType]) {
            const /** @type {?} */ supportedTypes = Object.keys(components).join(", ");
            throw new Error(`Trying to use an unsupported type (${this.config.inputType}).
		  Supported types: ${supportedTypes}`);
        }
        const /** @type {?} */ component = this.resolver.resolveComponentFactory(components[this.config.inputType]);
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
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState = {
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
            const /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(form => form._id == action.payload._id);
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case FormsListActionTypes.ADD_FORM_SCHEMA: {
            const /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(form => form._id == action.payload._id);
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case FormsListActionTypes.FORM_SCHEMA_FETCHED: {
            const /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(form => form._id == action.payload._id);
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
const /** @type {?} */ FormReducers = {
    list: reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ group = new FieldConfig("group");
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
        const /** @type {?} */ array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormControl(root) {
        const /** @type {?} */ control = new FieldConfig("control");
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
                template: `<mat-card>
  <mat-card-content>

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
        <app-form-array *ngSwitchCase="'array'" [schema]="field" (change)="changed()"></app-form-array>
        <app-form-control *ngSwitchCase="'control'" [schema]="field" (changes)="changed()" (delete)="deleteFormGroup(i)"></app-form-control>
      </div>
    </div>

  </mat-card-content>
</mat-card>`
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
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ group = new FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        return group;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormArray(root) {
        const /** @type {?} */ array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormControl(root) {
        const /** @type {?} */ control = new FieldConfig("control");
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
 * @suppress {checkTypes} checked by tsc
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
            dataEndpoint: new FormControl("http://localhost:3000/api/fake/packgeCompareSimpleList")
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
                template: `  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <button mat-icon-button (click)="delete.emit()">
            <mat-icon aria-label=" icon-button">delete_forever</mat-icon>
          </button>
        {{schema.name}}
      </mat-panel-title>
    </mat-expansion-panel-header>
      <mat-form-field>
        <input matInput [(ngModel)]="schema.name" (change)="changed()" placeholder="Name">
      </mat-form-field>
      
      <mat-form-field>
        <input matInput [(ngModel)]="schema.title" (change)="changed()" placeholder="Placeholder"/>
      </mat-form-field>
      
      <mat-form-field>
        <mat-select [(ngModel)]="schema.inputType" (change)="changed()" placeholder="Input Type">
          <mat-option value="table">table</mat-option>
          <mat-option value="select">select</mat-option>
          <mat-option value="text">text</mat-option>
          <mat-option value="number">number</mat-option>
          <mat-option value="email">email</mat-option>
          <mat-option value="color">color</mat-option>
          <mat-option value="radio">radio</mat-option>
          <mat-option value="checkbox">checkbox</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field>
          <input matInput [(ngModel)]="schema.value" (change)="changed()" placeholder="Value"/>
      </mat-form-field>
      
        <mat-form-field>
          <mat-select [(ngModel)]="schema.width" (change)="changed()" placeholder="width">
            <mat-option *ngFor="let item of width" [value]="item">{{item}}</mat-option>
          </mat-select>
        </mat-form-field>

      <div *ngIf="schema.inputType=='table'" [formGroup]="tableOptions">
        <mat-form-field>
          <input matInput (change)="changed()" formControlName="dataEndpoint" placeholder="dataEndpoint"/>
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
              <input matInput (change)="changed()" formControlName="key" placeholder="key"/>
            </mat-form-field>
            <mat-form-field>
              <input matInput (change)="changed()" formControlName="value" placeholder="value"/>
            </mat-form-field>
          </div>
        </div>
      </div>
      <br/>
      <div>
        <mat-slide-toggle (change)="changed()"  [(ngModel)]="schema.validator.required.active">اجباری</mat-slide-toggle>
        <mat-form-field>
          <input matInput (change)="changed()" [(ngModel)]="schema.validator.required.message"  placeholder="پیغام"/>
        </mat-form-field>
        </div>
      <div>
        <mat-slide-toggle (change)="changed()"  [(ngModel)]="schema.validator.email.active">ایمیل</mat-slide-toggle>
        <mat-form-field>
          <input matInput (change)="changed()" [(ngModel)]="schema.validator.email.message"  placeholder="پیغام"/>
        </mat-form-field>
      </div>
      <div>
        <mat-slide-toggle (change)="changed()"  [(ngModel)]="schema.validator.minlength.active">حداقل تعداد کاراکتر</mat-slide-toggle>
        <mat-form-field>
          <input matInput (change)="changed()" [(ngModel)]="schema.validator.minlength.message"  placeholder="پیغام"/>
        </mat-form-field>
        <mat-form-field>
          <input matInput (change)="changed()" [(ngModel)]="schema.validator.minlength.value"  placeholder="تعداد حداقل کاراکتر"/>
        </mat-form-field>
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            .map(params => params["_id"])
            .subscribe(id => this.store.dispatch(new GetFormSchemaAction(id)));
        this.route.params
            .map(params => params["_id"])
            .switchMap(id => this.service.selectFormById(id))
            .filter(data => data != null)
            .take(1)
            .subscribe(formSchema => {
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
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ group = new FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        return group;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormArray(root) {
        const /** @type {?} */ array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    }
    /**
     * @param {?} root
     * @return {?}
     */
    addFormControl(root) {
        const /** @type {?} */ control = new FieldConfig("control");
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
          <!-- <button mat-raised-button color="primary" (click)="$any(form).generate(schema)">ایجاد فرم</button> -->
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
EditFormComponent.propDecorators = {
    schema: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
class FormListComponent {
}
FormListComponent.decorators = [
    { type: Component, args: [{
                selector: "form-list",
                template: `<div fxLayout="row" fxLayoutWrap fxLayoutAlign="center center" >
    <mat-card class="cards-item" *ngFor="let item of (data$ | async)" fxFlex="51">
      <h3>
        <a [routerLink]="['edit' ,  item._id]">
          <mat-icon aria-label="edit form">edit</mat-icon>
        </a>
        {{item.name}}
      </h3>
  </mat-card>
</div>`
            },] },
];
FormListComponent.propDecorators = {
    data$: [{ type: Input, args: ["data",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
MainContainerComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            .pipe(map(action => action.payload), switchMap((data) => this.service.add(data)), map(res => new AddFormSucceedAction()), catchError(() => Observable.of(new AddFormFailedAction())));
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
            .pipe(switchMap((data) => this.service.getList()), map(res => new FormsListSucceedAction(res)), catchError(() => Observable.of(new FormsListFailedAction())));
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            .pipe(map(action => action.payload), switchMap((data) => this.service.update(data)), map(formSchema => new EditFormSucceedAction(formSchema)), catchError(() => Observable.of(new EditFormFailedAction())));
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
const /** @type {?} */ routes = [
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
const /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
class RootNgsFormModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, FormService, FormViewComponent, DynamicFieldDirective, AddFormApiModel, EditFormApiModel, FormListApiModel, FormSchemaModel, FieldConfig, NgsFormModule, RootNgsFormModule, AddFormComponent as ɵh, AddFormContainerComponent as ɵf, AddFormContainerComponent as ɵk, AddFormEffects as ɵy, AddFormComponent as ɵm, FormArrayComponent as ɵo, FormControlComponent as ɵp, FormGroupComponent as ɵn, EditFormContainerComponent as ɵbc, EditFormContainerComponent as ɵe, EditFormEffects as ɵz, EditFormComponent as ɵg, RoutingModule as ɵbb, FormListContainerComponent as ɵbd, FormListContainerComponent as ɵi, FormListComponent as ɵj, FormsListEffects as ɵba, reducer as ɵx, MainContainerComponent as ɵl, FormReducers as ɵa, FormConfigurationService as ɵc, CheckboxComponent as ɵr, ColorComponent as ɵt, EmailComponent as ɵs, NumberComponent as ɵv, SelectComponent as ɵq, TableComponent as ɵw, TextComponent as ɵu };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWZvcm0uanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZm9ybS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2FkZC1mb3JtLmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZWRpdC1mb3JtLmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1saXN0LmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1maWVsZC12YWxpZGF0b3IubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2ZpZWxkLWNvbmZpZy5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1zY2hlbWEubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvc2VydmljZXMvZm9ybS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvc2VydmljZXMvZm9ybS5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9lbWFpbC9lbWFpbC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2NvbG9yL2NvbG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2xpc3QuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tdmlldy9mb3JtLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2xpc3QvbGlzdC5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1hcnJheS9mb3JtLWFycmF5LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0tY29udGFpbmVyL2VkaXQtZm9ybS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2FkZC9hZGQtZm9ybS9hZGQtZm9ybS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0vZWRpdC1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2Zvcm0tbGlzdC1jb250YWluZXIvZm9ybS1saXN0LmNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbGlzdC9mb3JtLWxpc3QvZm9ybS1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2FkZC9hZGQtZm9ybS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2xpc3QvbGlzdC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2VkaXQvZWRpdC1mb3JtLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9mb3JtLXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2Zvcm0ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybU1vZHVsZUNvbmZpZyB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHRhZGRGb3JtOiBzdHJpbmc7XHJcblx0XHRlZGl0Rm9ybTogc3RyaW5nO1xyXG5cdFx0Z2V0Rm9ybTogc3RyaW5nO1xyXG5cdFx0Z2V0TGlzdDogc3RyaW5nO1xyXG5cdFx0ZGVsZXRlRm9ybTogc3RyaW5nO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRm9ybU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdGFkZEZvcm06IFwiXCIsXHJcblx0XHRlZGl0Rm9ybTogXCJcIixcclxuXHRcdGdldEZvcm06IFwiXCIsXHJcblx0XHRnZXRMaXN0OiBcIlwiLFxyXG5cdFx0ZGVsZXRlRm9ybTogXCJcIlxyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Rm9ybU1vZHVsZUNvbmZpZz4oXCJGb3JtTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFkZEZvcm1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGZvcm06IGFueVtdO1xyXG5cdFx0ZXZlbnRzOiBhbnlbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRcdGZvcm06IHRoaXMuZm9ybSxcclxuXHRcdFx0XHRldmVudHM6IHRoaXMuZXZlbnRzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGZvcm06IG5ldyBGb3JtQ29udHJvbCh7fSksXHJcblx0XHRcdFx0ZXZlbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdGFjY2VwdDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqvDmMKow5jCqlwiKVxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRjYW5jZWw6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0XHRzaG93OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXcgRm9ybUNvbnRyb2woXCLDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIilcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdEZvcm1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGZvcm06IGFueVtdO1xyXG5cdFx0ZXZlbnRzOiBhbnlbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF9pZDogdGhpcy5faWQsXHJcblx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRcdGZvcm06IHRoaXMuZm9ybSxcclxuXHRcdFx0XHRldmVudHM6IHRoaXMuZXZlbnRzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGZvcm06IG5ldyBGb3JtQ29udHJvbCh7fSksXHJcblx0XHRcdFx0ZXZlbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdGFjY2VwdDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqvDmMKow5jCqlwiKVxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRjYW5jZWw6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0XHRzaG93OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXcgRm9ybUNvbnRyb2woXCLDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIilcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRm9ybUxpc3RBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHROYW1lOiBzdHJpbmc7XHJcblx0XHRDb250cm9sczogb2JqZWN0W107XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSBhcyBGb3JtTGlzdEFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdE5hbWU6IHRoaXMuTmFtZSxcclxuXHRcdFx0XHRDb250cm9sczogdGhpcy5Db250cm9sc1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbnRyb2xzOiBuZXcgRm9ybUdyb3VwKHt9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEZvcm1TY2hlbWFNb2RlbFtdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIHZhbGlkYXRpb24ge1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxuXHRtZXNzYWdlOiBzdHJpbmc7XHJcblx0dmFsdWU/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvciB7XHJcblx0cmVxdWlyZWQ6IHZhbGlkYXRpb247XHJcblx0bWlubGVuZ3RoOiB2YWxpZGF0aW9uO1xyXG5cdGVtYWlsOiB2YWxpZGF0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucmVxdWlyZWQgPSB7XHJcblx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdG1lc3NhZ2U6IFwiw5jCp8ObwozDmcKGIMOZwoHDm8KMw5nChMOYwq8gw5jCp8OZwoTDmMKyw5jCp8OZwoXDm8KMIMOYwqfDmMKzw5jCqlwiXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5taW5sZW5ndGggPSB7XHJcblx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdG1lc3NhZ2U6IFwiw5jCrcOYwq/DmMKnw5nCgsOZwoQgw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5rCqcOYwqfDmMKxw5rCqcOYwqrDmMKxw5nCh8OYwqdcIixcclxuXHRcdFx0dmFsdWU6IDVcclxuXHRcdH07XHJcblx0XHR0aGlzLmVtYWlsID0ge1xyXG5cdFx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0XHRtZXNzYWdlOiBcIsOZwoTDmMK3w5nCgcOYwqcgw5jCp8ObwozDmcKFw5vCjMOZwoQgw5jCtcOYwq3Dm8KMw5jCrSDDmcKIw5jCp8OYwrHDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCr1wiXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi9mb3JtLWZpZWxkLXZhbGlkYXRvci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkQ29uZmlnIHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdHR5cGU6IFwiZ3JvdXBcIiB8IFwiYXJyYXlcIiB8IFwiY29udHJvbFwiO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdWJ0eXBlOiBzdHJpbmc7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdHRpdGxlOiBzdHJpbmc7XHJcblx0cGFyZW50VHlwZT86IFwiYXJyYXlcIiB8IFwiZ3JvdXBcIjtcclxuXHRmb3JtR3JvdXBQYXRoPzogc3RyaW5nO1xyXG5cdHBhdGg/OiBzdHJpbmc7XHJcblx0aW5wdXRUeXBlOiBcInNlbGVjdFwiIHwgXCJ0ZXh0XCIgfCBcIm51bWJlclwiIHwgXCJlbWFpbFwiIHwgXCJjb2xvclwiIHwgXCJjaGVja2JveFwiIHwgXCJ0YWJsZVwiO1xyXG5cdHZhbHVlPzogYW55O1xyXG5cdG9yZGVyPzogbnVtYmVyO1xyXG5cdHdpZHRoPzogbnVtYmVyO1xyXG5cdG9wdGlvbnM6IHtcclxuXHRcdFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcblx0fVtdO1xyXG5cdGRhdGFFbmRwb2ludD86IHN0cmluZztcclxuXHRvcHRpb25zRW5kcG9pbnQ6IHN0cmluZztcclxuXHRmaWVsZHM/OiBGaWVsZENvbmZpZ1tdO1xyXG5cdHZhbGlkYXRvcjogVmFsaWRhdG9yO1xyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IFwiZ3JvdXBcIiB8IFwiYXJyYXlcIiB8IFwiY29udHJvbFwiKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0aWYgKHR5cGUgIT0gXCJjb250cm9sXCIpIHRoaXMuZmllbGRzID0gW107XHJcblx0XHR0aGlzLndpZHRoID0gMztcclxuXHRcdHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuL2ZpZWxkLWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1TY2hlbWFNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0Zm9ybTogRmllbGRDb25maWc7XHJcblx0ZXZlbnRzID0ge1xyXG5cdFx0YWNjZXB0OiB7XHJcblx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHR0ZXh0OiBcIsOYwqvDmMKow5jCqlwiXHJcblx0XHR9LFxyXG5cdFx0Y2FuY2VsOiB7XHJcblx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHR0ZXh0OiBcIsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSBuZXcgRmllbGRDb25maWcoXCJncm91cFwiKTtcclxuXHR9XHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuX2lkID0gKE1hdGgucmFuZG9tKCkgKiAxMCkudG9TdHJpbmcoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IGdldEZvcm1Nb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Nb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vZm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHsgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2Zvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi9tYWluLWNvbnRhaW5lclwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogRm9ybU1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldEZvcm1Nb2R1bGVDb25maWcpLnN1YnNjcmliZSh1c2VyQ29uZmlnID0+IHtcclxuXHRcdFx0aWYgKCF1c2VyQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdXNlckNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsLCBBZGRGb3JtQXBpTW9kZWwsIEVkaXRGb3JtQXBpTW9kZWwsIEZvcm1MaXN0QXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2Zvcm0tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG5cdHJlc3BvbnNlQ2FjaGU6IEFkZEZvcm1BcGlNb2RlbC5SZXNwb25zZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogRm9ybUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHRhZGQoZGF0YTogQWRkRm9ybUFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgQWRkRm9ybUFwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuYWRkRm9ybSAhPSBcIlwiKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAucG9zdChjb25maWcuZW5kcG9pbnRzLmFkZEZvcm0sIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogQWRkRm9ybUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdH1cclxuXHRnZXQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQuZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmdldEZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW5kcG9pbnRzLmdldEZvcm0sIHsgX2lkIH0pKSlcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IEVkaXRGb3JtQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0fVxyXG5cdGdldExpc3QoKTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQuZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmdldExpc3QgIT0gXCJcIilcclxuXHRcdFx0LnN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmdldExpc3QpKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogRm9ybUxpc3RBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0dXBkYXRlKGRhdGE6IEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBFZGl0Rm9ybUFwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZWRpdEZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5odHRwLnB1dChjb25maWcuZW5kcG9pbnRzLmVkaXRGb3JtLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKSlcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IEVkaXRGb3JtQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0fVxyXG5cdGRlbGV0ZShfaWQ6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQuZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0pKTtcclxuXHR9XHJcblx0c2VsZWN0Rm9ybUJ5SWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Rm9ybVNjaGVtYU1vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZvcm0ubGlzdC5kYXRhKVxyXG5cdFx0XHQucGlwZShmaWx0ZXIoZm9ybXMgPT4gZm9ybXMgIT0gbnVsbCksIG1hcChmb3JtcyA9PiBmb3Jtcy5maW5kKGZvcm0gPT4gZm9ybS5faWQgPT0gX2lkKSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoRm9ybVNjaGVtYU1vZGVsID0+IHN1YmplY3QubmV4dChGb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1zZWxlY3RcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIj5cclxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57e29wdGlvbi5rZXl9fTwvbWF0LW9wdGlvbj5cclxuICAgIDwvbWF0LXNlbGVjdD5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZCwgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLWNoZWNrYm94XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG4gICAgICAgIHt7Y29uZmlnLnRpdGxlfX1cclxuICAgIDwvbWF0LWNoZWNrYm94PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtZW1haWxcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICA8aW5wdXQgbWF0SW5wdXQgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLWNvbG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICA8aW5wdXQgbWF0SW5wdXQgW3R5cGVdPVwic2NoZW1hLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJzY2hlbWEudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInNjaGVtYS5uYW1lXCI+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC10YWJsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyIG1hdC1lbGV2YXRpb24tejhcIiAqbmdJZj1cInJlYWR5XCI+XHJcbiAgICA8bWF0LXRhYmxlICN0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XHJcbiAgXHJcbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic2VsZWN0XCI+XHJcbiAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIlxyXG4gICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiAhaXNBbGxTZWxlY3RlZCgpXCI+XHJcbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+XHJcbiAgICAgICAgICA8bWF0LWNoZWNrYm94IChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudCA/IHNlbGVjdGlvbi50b2dnbGUocm93KSA6IG51bGxcIlxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpXCI+XHJcbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L21hdC1jZWxsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbCBvZiBmaWxlZERpc3BsYXllZENvbHVtbnNcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICBbbWF0Q29sdW1uRGVmXT1cImNvbFwiPlxyXG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tjb2x9fSA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtjb2xdfX0gPC9tYXQtY2VsbD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+PC9tYXQtaGVhZGVyLWNlbGw+XHJcbiAgICAgICAgPG1hdC1jZWxsIGNsYXNzPSdsZWZ0LWFsaWduJyAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIsOYwqfDmcKGw5jCqsOYwq7DmMKnw5jCqFwiPmFycm93X2JhY2s8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2VsbD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgICAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9tYXQtaGVhZGVyLXJvdz5cclxuICAgICAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCIgKGNsaWNrKT1cInNlbGVjdGlvbi50b2dnbGUocm93KVwiPjwvbWF0LXJvdz5cclxuXHJcbiAgICA8L21hdC10YWJsZT5cclxuICA8L2Rpdj5cclxuXHJcblxyXG48IS0tIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gIFxyXG4gIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwic2NoZW1hLm5hbWVcIiBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuICBcclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7c2NoZW1hLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmVycm9ycz8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e3NjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuZW1haWw/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tzY2hlbWEudmFsaWRhdG9yLmVtYWlsLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG48L21hdC1mb3JtLWZpZWxkPiAtLT5cclxuICBcclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KHNjaGVtYS5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdHJlYWR5OiBib29sZWFuO1xyXG5cdGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cdGZpbGVkRGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XHJcblx0ZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPGFueT47XHJcblxyXG5cdHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRydWUsIFtdKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmh0dHAuZ2V0KHRoaXMuc2NoZW1hLmRhdGFFbmRwb2ludCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGRhdGEuZGlzcGxheWVkQ29sdW1ucztcclxuXHRcdFx0dGhpcy5maWxlZERpc3BsYXllZENvbHVtbnMgPSBkYXRhLmZpbGVkRGlzcGxheWVkQ29sdW1ucztcclxuXHRcdFx0dGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KGRhdGEuZGF0YVNvdXJjZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXHJcblx0aXNBbGxTZWxlY3RlZCgpIHtcclxuXHRcdGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xyXG5cdFx0dGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRbdGhpcy5zY2hlbWEubmFtZV06IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XHJcblx0XHRyZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XHJcblx0fVxyXG5cclxuXHQvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xyXG5cdG1hc3RlclRvZ2dsZSgpIHtcclxuXHRcdHRoaXMuaXNBbGxTZWxlY3RlZCgpID8gdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtbnVtYmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLXRleHRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuXHJcbiAgPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/LnJlcXVpcmVkXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IucmVxdWlyZWQubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPCEtLSA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lbWFpbD8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IuZW1haWwubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+IC0tPlxyXG5cclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChjb25maWcubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoY29uZmlnLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KGNvbmZpZy5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPlxyXG5cclxuPC9tYXQtZm9ybS1maWVsZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRm9ybXNMaXN0QWN0aW9uVHlwZXMge1xyXG5cdEZPUk1TX0xJU1QgPSBcIltGT1JNXVtMSVNUXSBGT1JNU19MSVNUXCIsXHJcblx0Rk9STVNfTElTVF9TVEFSVCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfU1RBUlRcIixcclxuXHRGT1JNU19MSVNUX1NVQ0NFRUQgPSBcIltGT1JNXVtMSVNUXSBGT1JNU19MSVNUX1NVQ0NFRURcIixcclxuXHRGT1JNU19MSVNUX0ZBSUxFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfRkFJTEVEXCIsXHJcblx0QUREX0ZPUk1fU0NIRU1BID0gXCJbRk9STV1bTElTVF0gQUREX0ZPUk1fU0NIRU1BXCIsXHJcblx0Rk9STV9TQ0hFTUFfVVBEQVRFID0gXCJbRk9STV1bTElTVF0gRk9STV9TQ0hFTUFfVVBEQVRFXCIsXHJcblx0R0VUX0ZPUk1fU0NIRU1BID0gXCJbRk9STV1bTElTVF0gR0VUX0ZPUk1fU0NIRU1BXCIsXHJcblx0Rk9STV9TQ0hFTUFfRkVUQ0hFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1fU0NIRU1BX0ZFVENIRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9VUERBVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVNjaGVtYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkFERF9GT1JNX1NDSEVNQTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRGb3JtU2NoZW1hQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuR0VUX0ZPUk1fU0NIRU1BO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1TY2hlbWFGZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEZvcm1zTGlzdEFjdGlvbnMgPVxyXG5cdHwgRm9ybXNMaXN0QWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgRm9ybXNMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgRm9ybXNMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBBZGRGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBHZXRGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBGb3JtU2NoZW1hRmVjaGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Vmlld0NoaWxkLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdENvbXBpbGVyLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHROZ01vZHVsZSxcclxuXHRJbnB1dCxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG5cdE9uQ2hhbmdlcyxcclxuXHREaXJlY3RpdmUsXHJcblx0VHlwZSxcclxuXHRPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNlbGVjdENvbXBvbmVudCxcclxuXHRFbWFpbENvbXBvbmVudCxcclxuXHRDb2xvckNvbXBvbmVudCxcclxuXHRDaGVja2JveENvbXBvbmVudCxcclxuXHRUZXh0Q29tcG9uZW50LFxyXG5cdFRhYmxlQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHNcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHZXRGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZywgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGZvcm0gKm5nSWY9XCJmb3JtR3JvdXBDcmVhdGVkXCIgY2xhc3M9XCJkeW5hbWljLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJhY2NlcHRlZCgpXCI+XHJcbiAgPG1hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICA8ZGl2ICAqbmdGb3I9XCJsZXQgZmllbGQgb2YgKHNjaGVtYSQgfCBhc3luYyk/LmZvcm0uZmllbGRzO1wiIFtmeEZsZXhdPVwiZmllbGQud2lkdGggKiAxMFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgZHluYW1pY0ZpZWxkICBbY29uZmlnXT1cImZpZWxkXCIgW2dyb3VwXT1cImZvcm1Hcm91cFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8YnV0dG9uIGZ4RmxleCB0eXBlPVwic3VibWl0XCIgKm5nSWY9XCIoc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC5zaG93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBmeEZsZXggdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwuc2hvd1wiIChjbGljayk9XCJjYW5jZWwuZW1pdCgpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmNhbmNlbC50ZXh0fTwvYnV0dG9uPlxyXG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZm9ybT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdEBPdXRwdXQoKSBhY2NlcHQgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcclxuXHRAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtR3JvdXA+KCk7XHJcblx0QElucHV0KCkgbG9jYWw7XHJcblx0QElucHV0KClcclxuXHRzZXQgaWQoaWQ6IHN0cmluZykge1xyXG5cdFx0aWYgKCF0aGlzLmxvY2FsKSB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRGb3JtU2NoZW1hQWN0aW9uKGlkKSk7XHJcblx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0LnNlbGVjdEZvcm1CeUlkKGlkKVxyXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NoZW1hID0+IHRoaXMuc2NoZW1hJC5uZXh0KHNjaGVtYSkpO1xyXG5cdH1cclxuXHRASW5wdXQoKVxyXG5cdHNldCBzY2hlbWEoc2NoZW1hOiBGb3JtU2NoZW1hTW9kZWwpIHtcclxuXHRcdHRoaXMuc2NoZW1hJC5uZXh0KHNjaGVtYSk7XHJcblx0fVxyXG5cdF9pZDogc3RyaW5nO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGZvcm1Hcm91cENyZWF0ZWQgPSBmYWxzZTtcclxuXHRzY2hlbWEkOiBCZWhhdmlvclN1YmplY3Q8Rm9ybVNjaGVtYU1vZGVsPjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+XHJcblx0KSB7XHJcblx0XHR0aGlzLnNjaGVtYSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnNjaGVtYSQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpLnN1YnNjcmliZShzY2hlbWEgPT4ge1xyXG5cdFx0XHRpZiAoIXNjaGVtYSkgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuY3JlYXRlRnJvbShzY2hlbWEuZm9ybSkgYXMgRm9ybUdyb3VwO1xyXG5cdFx0XHRpZiAoIXNjaGVtYS5mb3JtLm5hbWUpIHJldHVybjtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXBDcmVhdGVkID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHRnZW5lcmF0ZShzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUZyb20oZGF0YTogRmllbGRDb25maWcsIHBhcmVudFBhdGggPSBcIlwiKTogQWJzdHJhY3RDb250cm9sIHtcclxuXHRcdGlmIChkYXRhLnR5cGUgPT0gXCJjb250cm9sXCIpIHtcclxuXHRcdFx0aWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImFycmF5XCIpIHtcclxuXHRcdFx0XHQvLyBwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHNbJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1dYDtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdFx0dmFyIGZvcm1Hcm91cFBhdGggPSBwYXJlbnRQYXRoO1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9scy4keyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfWA7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHZhbGlkYXRvcnMgPSBbXTtcclxuXHRcdFx0aWYgKGRhdGEudmFsaWRhdG9yLnJlcXVpcmVkLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGF0YS52YWxpZGF0b3IubWlubGVuZ3RoLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChkYXRhLnZhbGlkYXRvci5taW5sZW5ndGgudmFsdWUpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGF0YS52YWxpZGF0b3IuZW1haWwuYWN0aXZlKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMuZW1haWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBjdHIgPSBuZXcgRm9ybUNvbnRyb2woZGF0YS52YWx1ZSwgdmFsaWRhdG9ycyk7XHJcblx0XHRcdChjdHIgYXMgYW55KS5zY2hlbWEgPSBkYXRhO1xyXG5cdFx0XHQoY3RyIGFzIGFueSkuc2NoZW1hLnBhdGggPSBwYXJlbnRQYXRoO1xyXG5cdFx0XHQoY3RyIGFzIGFueSkuc2NoZW1hLmZvcm1Hcm91cFBhdGggPSBmb3JtR3JvdXBQYXRoO1xyXG5cdFx0XHRyZXR1cm4gY3RyO1xyXG5cdFx0fSBlbHNlIGlmIChkYXRhLnR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdHZhciBmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuXHRcdFx0aWYgKGRhdGEucGFyZW50VHlwZSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gKGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGF0YS5wYXJlbnRUeXBlID09IFwiYXJyYXlcIikge1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9sc1skeyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfV1gO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImdyb3VwXCIpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHMuJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1gO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQoZm9ybUdyb3VwIGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGZvcm1Hcm91cCBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0ZGF0YS5maWVsZHMuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtLnBhcmVudFR5cGUgPSBcImdyb3VwXCI7XHJcblx0XHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woaXRlbS5uYW1lLCB0aGlzLmNyZWF0ZUZyb20oaXRlbSwgcGFyZW50UGF0aCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZvcm1Hcm91cDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBmb3JtQXJyYXk6IEZvcm1BcnJheSA9IG5ldyBGb3JtQXJyYXkoW10pO1xyXG5cdFx0XHRwYXJlbnRQYXRoID1cclxuXHRcdFx0XHRwYXJlbnRQYXRoID09IFwiXCIgPyAoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZSA6IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0KGZvcm1BcnJheSBhcyBhbnkpLnNjaGVtYSA9IGRhdGE7XHJcblx0XHRcdChmb3JtQXJyYXkgYXMgYW55KS5zY2hlbWEucGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdGRhdGEuZmllbGRzLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xyXG5cdFx0XHRcdGl0ZW0ucGFyZW50VHlwZSA9IFwiYXJyYXlcIjtcclxuXHRcdFx0XHRpdGVtLm5hbWUgPSBpZHgudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRmb3JtQXJyYXkuY29udHJvbHMucHVzaCh0aGlzLmNyZWF0ZUZyb20oaXRlbSwgcGFyZW50UGF0aCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZvcm1BcnJheTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFjY2VwdGVkKCkge1xyXG5cdFx0dGhpcy5hY2NlcHQuZW1pdCh0aGlzLmZvcm1Hcm91cCk7XHJcblx0fVxyXG5cdGNhbmNlbGVkKCkge1xyXG5cdFx0dGhpcy5jYW5jZWwuZW1pdCh0aGlzLmZvcm1Hcm91cCk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzOiB7IFt0eXBlOiBzdHJpbmddOiBUeXBlPEZpZWxkPiB9ID0ge1xyXG5cdGNoZWNrYm94OiBDaGVja2JveENvbXBvbmVudCxcclxuXHR0ZXh0OiBUZXh0Q29tcG9uZW50LFxyXG5cdHRhYmxlOiBUYWJsZUNvbXBvbmVudCxcclxuXHRjb2xvcjogQ29sb3JDb21wb25lbnQsXHJcblx0ZW1haWw6IEVtYWlsQ29tcG9uZW50LFxyXG5cdHNlbGVjdDogU2VsZWN0Q29tcG9uZW50XHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbZHluYW1pY0ZpZWxkXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBGaWVsZCwgT25DaGFuZ2VzLCBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGNvbmZpZzogRmllbGRDb25maWc7XHJcblxyXG5cdEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPEZpZWxkPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge31cclxuXHJcblx0bmdPbkNoYW5nZXMoKSB7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XHJcblx0XHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKCFjb21wb25lbnRzW3RoaXMuY29uZmlnLmlucHV0VHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzKS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3RoaXMuY29uZmlnLmlucHV0VHlwZX0pLlxyXG5cdFx0ICBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxGaWVsZD4oY29tcG9uZW50c1t0aGlzLmNvbmZpZy5pbnB1dFR5cGVdKTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuXHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1zTGlzdEFjdGlvblR5cGVzLCBGb3Jtc0xpc3RBY3Rpb25zIH0gZnJvbSBcIi4vbGlzdC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogRm9ybVNjaGVtYU1vZGVsW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogW11cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRm9ybXNMaXN0QWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1Q6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX1VQREFURToge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuQUREX0ZPUk1fU0NIRU1BOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCAqIGFzIGxpc3QgZnJvbSBcIi4uL2xpc3QvbGlzdC5yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtU3RhdGUge1xyXG5cdGxpc3Q6IGxpc3QuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtUmVkdWNlcnMgPSB7XHJcblx0bGlzdDogbGlzdC5yZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1haW5Db250YWluZXJTdGF0ZSB7XHJcblx0XCJmb3JtXCI6IEZvcm1TdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1ncm91cFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIiFub0hlYWRlclwiPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEubmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCIhbm9IZWFkZXJcIj5cclxuICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLnRpdGxlXCIgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Hcm91cChzY2hlbWEpXCI+IGFkZEZvcm1Hcm91cCA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQXJyYXkoc2NoZW1hKVwiPiBhZGRGb3JtQXJyYXkgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUNvbnRyb2woc2NoZW1hKVwiPmFkZEZvcm1Db250cm9sPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBzY2hlbWEuZmllbGRzO2xldCBpID0gaW5kZXhcIj5cclxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxyXG4gICAgICAgIDxhcHAtZm9ybS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgICAgPGFwcC1mb3JtLWFycmF5ICpuZ1N3aXRjaENhc2U9XCInYXJyYXknXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1hcnJheT5cclxuICAgICAgICA8YXBwLWZvcm0tY29udHJvbCAqbmdTd2l0Y2hDYXNlPVwiJ2NvbnRyb2wnXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiIChkZWxldGUpPVwiZGVsZXRlRm9ybUdyb3VwKGkpXCI+PC9hcHAtZm9ybS1jb250cm9sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdEBJbnB1dCgpIG5vSGVhZGVyOiBib29sZWFuID0gZmFsc2U7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGNoYW5nZWQoKSB7XHJcblx0XHR0aGlzLmNoYW5nZXMuZW1pdCgpO1xyXG5cdH1cclxuXHJcblx0YWRkRm9ybUdyb3VwKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBncm91cCA9IG5ldyBGaWVsZENvbmZpZyhcImdyb3VwXCIpO1xyXG5cdFx0Z3JvdXAuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGdyb3VwKTtcclxuXHRcdHRoaXMuc2NoZW1hLmlkID0gdGhpcy5zY2hlbWEuaWQgKyAxO1xyXG5cdFx0cmV0dXJuIGdyb3VwO1xyXG5cdH1cclxuXHRhZGRGb3JtQXJyYXkocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGFycmF5ID0gbmV3IEZpZWxkQ29uZmlnKFwiYXJyYXlcIik7XHJcblx0XHRhcnJheS5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goYXJyYXkpO1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHRhZGRGb3JtQ29udHJvbChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IG5ldyBGaWVsZENvbmZpZyhcImNvbnRyb2xcIik7XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGNvbnRyb2w7XHJcblx0fVxyXG5cdGRlbGV0ZUZvcm1Hcm91cChpZHg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5zY2hlbWEuZmllbGRzLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1hcnJheVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS5uYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24tcm93XCI+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYSlcIj5hZGRGb3JtR3JvdXA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQXJyYXkoc2NoZW1hKVwiPmFkZEZvcm1BcnJheTwvYnV0dG9uPlxyXG4gICAgICA8IS0tIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUNvbnRyb2woc2NoZW1hKVwiPmFkZEZvcm1Db250cm9sPC9idXR0b24+IC0tPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHNjaGVtYS5maWVsZHNcIj5cclxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxyXG4gICAgICAgIDxhcHAtZm9ybS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWdyb3VwPlxyXG4gICAgICAgIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PlxyXG4gICAgICAgIDwhLS0gPGFwcC1mb3JtLWNvbnRyb2wgKm5nU3dpdGNoQ2FzZT1cIidjb250cm9sJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlKT1cImNoYW5nZWQoJGV2ZW50KVwiPjwvYXBwLWZvcm0tY29udHJvbD4gLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUFycmF5Q29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Y2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KCk7XHJcblx0fVxyXG5cclxuXHRhZGRGb3JtR3JvdXAocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGdyb3VwID0gbmV3IEZpZWxkQ29uZmlnKFwiZ3JvdXBcIik7XHJcblx0XHRncm91cC5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goZ3JvdXApO1xyXG5cdFx0cmV0dXJuIGdyb3VwO1xyXG5cdH1cclxuXHRhZGRGb3JtQXJyYXkocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGFycmF5ID0gbmV3IEZpZWxkQ29uZmlnKFwiYXJyYXlcIik7XHJcblx0XHRhcnJheS5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goYXJyYXkpO1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHRhZGRGb3JtQ29udHJvbChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IG5ldyBGaWVsZENvbmZpZyhcImNvbnRyb2xcIik7XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGNvbnRyb2w7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1jb250cm9sXCIsXHJcblx0dGVtcGxhdGU6IGAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsPlxyXG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxyXG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGUuZW1pdCgpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiIGljb24tYnV0dG9uXCI+ZGVsZXRlX2ZvcmV2ZXI8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge3tzY2hlbWEubmFtZX19XHJcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxyXG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS5uYW1lXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgXHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEudGl0bGVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIi8+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIFxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIklucHV0IFR5cGVcIj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGFibGVcIj50YWJsZTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwic2VsZWN0XCI+c2VsZWN0PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibnVtYmVyXCI+bnVtYmVyPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJlbWFpbFwiPmVtYWlsPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjb2xvclwiPmNvbG9yPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPmNoZWNrYm94PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWx1ZVwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgXHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzY2hlbWEud2lkdGhcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwid2lkdGhcIj5cclxuICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygd2lkdGhcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICA8ZGl2ICpuZ0lmPVwic2NoZW1hLmlucHV0VHlwZT09J3RhYmxlJ1wiIFtmb3JtR3JvdXBdPVwidGFibGVPcHRpb25zXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF0YUVuZHBvaW50XCIgcGxhY2Vob2xkZXI9XCJkYXRhRW5kcG9pbnRcIi8+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2ICpuZ0lmPVwic2NoZW1hLmlucHV0VHlwZT09J3NlbGVjdCdcIj5cclxuICAgICAgICBbb3B0aW9uc11cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhZGRPcHRpb24oKVwiPis8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJpbnNlcnRPcHRpb25zKClcIj5pbnNlcnQ8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9ucy5jb250cm9scztpbmRleCBhcyBpXCI+XHJcbiAgICAgICAgICB7e2l9fVxyXG4gICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIm9wdGlvbnMuY29udHJvbHNbaV1cIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cImtleVwiIHBsYWNlaG9sZGVyPVwia2V5XCIvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwidmFsdWVcIiBwbGFjZWhvbGRlcj1cInZhbHVlXCIvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5yZXF1aXJlZC5hY3RpdmVcIj7DmMKnw5jCrMOYwqjDmMKnw5jCscObwow8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLnJlcXVpcmVkLm1lc3NhZ2VcIiAgcGxhY2Vob2xkZXI9XCLDmcK+w5vCjMOYwrrDmMKnw5nChVwiLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5lbWFpbC5hY3RpdmVcIj7DmMKnw5vCjMOZwoXDm8KMw5nChDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IuZW1haWwubWVzc2FnZVwiICBwbGFjZWhvbGRlcj1cIsOZwr7Dm8KMw5jCusOYwqfDmcKFXCIvPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGguYWN0aXZlXCI+w5jCrcOYwq/DmMKnw5nCgsOZwoQgw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5rCqcOYwqfDmMKxw5jCp8OawqnDmMKqw5jCsTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLm1lc3NhZ2VcIiAgcGxhY2Vob2xkZXI9XCLDmcK+w5vCjMOYwrrDmMKnw5nChVwiLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGgudmFsdWVcIiAgcGxhY2Vob2xkZXI9XCLDmMKqw5jCucOYwq/DmMKnw5jCryDDmMKtw5jCr8OYwqfDmcKCw5nChCDDmsKpw5jCp8OYwrHDmMKnw5rCqcOYwqrDmMKxXCIvPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdHdpZHRoID0gWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCBdO1xyXG5cdG9wdGlvbnMgPSBuZXcgRm9ybUFycmF5KFtcclxuXHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRrZXk6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHR2YWx1ZTogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdH0pXHJcblx0XSk7XHJcblx0dGFibGVPcHRpb25zID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRkYXRhRW5kcG9pbnQ6IG5ldyBGb3JtQ29udHJvbChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZmFrZS9wYWNrZ2VDb21wYXJlU2ltcGxlTGlzdFwiKVxyXG5cdH0pO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Y2hhbmdlZCgpIHtcclxuXHRcdGlmIChbIHRoaXMuc2NoZW1hLm5hbWUsIHRoaXMuc2NoZW1hLnRpdGxlLCB0aGlzLnNjaGVtYS5pbnB1dFR5cGUgXS5zb21lKGl0ZW0gPT4gIWl0ZW0pKSByZXR1cm4gdHJ1ZTtcclxuXHRcdGlmICh0aGlzLnNjaGVtYS5pbnB1dFR5cGUgPT0gXCJ0YWJsZVwiKSB7XHJcblx0XHRcdHRoaXMuc2NoZW1hLm9wdGlvbnMgPSB0aGlzLnRhYmxlT3B0aW9ucy52YWx1ZTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zY2hlbWEuaW5wdXRUeXBlID09IFwic2VsZWN0XCIpIHtcclxuXHRcdFx0dGhpcy5zY2hlbWEub3B0aW9ucyA9IHRoaXMub3B0aW9ucy52YWx1ZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KCk7XHJcblx0fVxyXG5cclxuXHRhZGRPcHRpb24oKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMucHVzaChcclxuXHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0a2V5OiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHR2YWx1ZTogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdHJlbW92ZU9wdGlvbihpKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHMuc3BsaWNlKGksIDEpO1xyXG5cdH1cclxuXHRpbnNlcnRPcHRpb25zKCkge1xyXG5cdFx0dGhpcy5zY2hlbWEub3B0aW9ucyA9IHRoaXMub3B0aW9ucy52YWx1ZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0Rm9ybUFjdGlvblR5cGVzIHtcclxuXHRFRElUX0ZPUk0gPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1cIixcclxuXHRFRElUX0ZPUk1fU1RBUlQgPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1fU1RBUlRcIixcclxuXHRFRElUX0ZPUk1fU1VDQ0VFRCA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STV9TVUNDRUVEXCIsXHJcblx0RURJVF9GT1JNX0ZBSUxFRCA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1TdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdEZvcm1BY3Rpb25zID0gRWRpdEZvcm1BY3Rpb24gfCBFZGl0Rm9ybVN0YXJ0QWN0aW9uIHwgRWRpdEZvcm1TdWNjZWVkQWN0aW9uIHwgRWRpdEZvcm1GYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gQWRkRm9ybUFjdGlvblR5cGVzIHtcclxuXHRBRERfRk9STSA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fUFJPRklMRVwiLFxyXG5cdEFERF9GT1JNX1NUQVJUID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9TVEFSVFwiLFxyXG5cdEFERF9GT1JNX1NVQ0NFRUQgPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX1NVQ0NFRURcIixcclxuXHRBRERfRk9STV9GQUlMRUQgPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1TdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWRkRm9ybUFjdGlvbnMgPSBBZGRGb3JtQWN0aW9uIHwgQWRkRm9ybVN0YXJ0QWN0aW9uIHwgQWRkRm9ybVN1Y2NlZWRBY3Rpb24gfCBBZGRGb3JtRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1BY3Rpb24gfSBmcm9tIFwiLi4vYWRkLWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtU2NoZW1hQWN0aW9uLCBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8bmdzLWZvcm0tYWRkIFxyXG5cdFx0XHRcdFx0W3NjaGVtYV09XCJzY2hlbWFcIiBcclxuXHRcdFx0XHRcdChjaGFuZ2VzKT1cInVwZGF0ZV9zY2hlbWEoJGV2ZW50KVwiIFxyXG5cdFx0XHRcdFx0KHN1Ym1pdGVkKT1hZGQoJGV2ZW50KVxyXG5cdFx0XHRcdD48L25ncy1mb3JtLWFkZD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4sIHB1YmxpYyBzZXJ2aWNlOiBGb3JtU2VydmljZSkge31cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc2NoZW1hID0gbmV3IEZvcm1TY2hlbWFNb2RlbCgpO1xyXG5cdFx0dGhpcy5zY2hlbWEuaW5pdCgpO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkRm9ybVNjaGVtYUFjdGlvbih0aGlzLnNjaGVtYSkpO1xyXG5cdH1cclxuXHRhZGQoZm9ybTogRm9ybVNjaGVtYU1vZGVsKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGRGb3JtQWN0aW9uKGZvcm0pKTtcclxuXHR9XHJcblx0dXBkYXRlX3NjaGVtYShmb3JtOiBGb3JtU2NoZW1hTW9kZWwpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24oZm9ybSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1BcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2VkaXQvZWRpdC1mb3JtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hZGQvYWRkLWZvcm0tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEdldEZvcm1TY2hlbWFBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGlzdC9saXN0LmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGVkaXQtZm9ybVxyXG5cdFx0XHRcdFx0W2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG5cdFx0XHRcdFx0W3NjaGVtYV09XCJzY2hlbWFcIlxyXG5cdFx0XHRcdFx0KGNoYW5nZXMpPVwidXBkYXRlX3NjaGVtYSgkZXZlbnQpXCJcclxuXHRcdFx0XHRcdChzdWJtaXRlZCk9XCJ1cGRhdGUoJGV2ZW50KVwiPlxyXG5cdFx0XHRcdDwvZWRpdC1mb3JtPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwID0gRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwdWJsaWMgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHN1cGVyKHN0b3JlLCBzZXJ2aWNlKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXNcclxuXHRcdFx0Lm1hcChwYXJhbXMgPT4gcGFyYW1zW1wiX2lkXCJdKVxyXG5cdFx0XHQuc3Vic2NyaWJlKGlkID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEZvcm1TY2hlbWFBY3Rpb24oaWQpKSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXNcclxuXHRcdFx0Lm1hcChwYXJhbXMgPT4gcGFyYW1zW1wiX2lkXCJdKVxyXG5cdFx0XHQuc3dpdGNoTWFwKGlkID0+IHRoaXMuc2VydmljZS5zZWxlY3RGb3JtQnlJZChpZCkpXHJcblx0XHRcdC5maWx0ZXIoZGF0YSA9PiBkYXRhICE9IG51bGwpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zdWJzY3JpYmUoZm9ybVNjaGVtYSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zY2hlbWEgPSBmb3JtU2NoZW1hO1xyXG5cdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZm9ybVNjaGVtYSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEVkaXRGb3JtQWN0aW9uKGRhdGEpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsLCBBZGRGb3JtQXBpTW9kZWwsIEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tYWRkXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCJzY2hlbWFcIj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIiAqbmdJZj1cImZvcm1Hcm91cFwiPlxyXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoUgw5jCrMOYwq/Dm8KMw5jCrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nCgcOYwrHDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1BcnJheShzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBhcnJheTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQ29udHJvbChzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBjb250cm9sPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwic2NoZW1hLmZvcm0/LnR5cGVcIj5cclxuICAgICAgICAgICAgPGFwcC1mb3JtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIG5vSGVhZGVyPVwidHJ1ZVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgICAgICAgIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwic2NoZW1hLmZvcm1cIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPCEtLSA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJmb3JtLmdlbmVyYXRlKHNjaGVtYSlcIj7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoU8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJlbWl0KClcIiB0eXBlPVwic3VibWl0XCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5hY2NlcHRcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmMKnw5vCjMObwozDmMKvPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqrDmMKnw5vCjMObwozDmMKvXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5jYW5jZWxcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoXDmMKqw5nChiDDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIj5cclxuICAgIDxuZ3MtZm9ybS12aWV3IFtsb2NhbF09J3RydWUnIFtpZF09XCJzY2hlbWEuX2lkXCI+PC9uZ3MtZm9ybS12aWV3PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRASW5wdXQoKSBmb3JtR3JvdXAgPSBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0QE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRlbWl0KCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IGZvcm06IHRoaXMuc2NoZW1hLmZvcm0gfSk7XHJcblx0XHR0aGlzLnN1Ym1pdGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxuXHRjaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IGZvcm06IHRoaXMuc2NoZW1hLmZvcm0gfSk7XHJcblx0XHR0aGlzLmNoYW5nZXMuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cdGNoYW5nZU9yZGVyKCRldmVudCkge31cclxuXHJcblx0YWRkRm9ybUdyb3VwKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBncm91cCA9IG5ldyBGaWVsZENvbmZpZyhcImdyb3VwXCIpO1xyXG5cdFx0Z3JvdXAuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGdyb3VwKTtcclxuXHRcdHJldHVybiBncm91cDtcclxuXHR9XHJcblx0YWRkRm9ybUFycmF5KHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBhcnJheSA9IG5ldyBGaWVsZENvbmZpZyhcImFycmF5XCIpO1xyXG5cdFx0YXJyYXkuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGFycmF5KTtcclxuXHRcdHJldHVybiBhcnJheTtcclxuXHR9XHJcblx0YWRkRm9ybUNvbnRyb2wocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSBuZXcgRmllbGRDb25maWcoXCJjb250cm9sXCIpO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChjb250cm9sKTtcclxuXHRcdHJldHVybiBjb250cm9sO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwsIEVkaXRGb3JtQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FkZC9hZGQtZm9ybVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZWRpdC1mb3JtXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCJzY2hlbWFcIj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIiAqbmdJZj1cImZvcm1Hcm91cFwiPlxyXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoUgw5jCrMOYwq/Dm8KMw5jCrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nCgcOYwrHDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1BcnJheShzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBhcnJheTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQ29udHJvbChzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBjb250cm9sPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwic2NoZW1hLmZvcm0/LnR5cGVcIj5cclxuICAgICAgICAgICAgPGFwcC1mb3JtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIG5vSGVhZGVyPVwidHJ1ZVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgICAgICAgIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwic2NoZW1hLmZvcm1cIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPCEtLSA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCIkYW55KGZvcm0pLmdlbmVyYXRlKHNjaGVtYSlcIj7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoU8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJlbWl0KClcIiB0eXBlPVwic3VibWl0XCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5hY2NlcHRcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmMKnw5vCjMObwozDmMKvPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqrDmMKnw5vCjMObwozDmMKvXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5jYW5jZWxcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoXDmMKqw5nChiDDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIj5cclxuICAgIDxuZ3MtZm9ybS12aWV3IFtsb2NhbF09J3RydWUnIFtpZF09XCJzY2hlbWEuX2lkXCI+PC9uZ3MtZm9ybS12aWV3PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUNvbXBvbmVudCBleHRlbmRzIEFkZEZvcm1Db21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogYW55O1xyXG5cdGVtaXQoKSB7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHRyZXR1cm4gdGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlLCBGb3JtUmVkdWNlcnMgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybXNMaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxmb3JtLWxpc3RcclxuXHRcdFx0XHRcdFtkYXRhXT1cImRhdGEkXCI+XHJcblx0XHRcdFx0PC9mb3JtLWxpc3Q+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUxpc3RDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRhdGEkOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMuZGF0YSQgPSB0aGlzLnN0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mb3JtLmxpc3QuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRm9ybXNMaXN0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCwgRWRpdEZvcm1BcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSwgRm9ybVJlZHVjZXJzIH0gZnJvbSBcIi4uLy4uL21haW4tY29udGFpbmVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJmb3JtLWxpc3RcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dFdyYXAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiA+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkcy1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKGRhdGEkIHwgYXN5bmMpXCIgZnhGbGV4PVwiNTFcIj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnZWRpdCcgLCAgaXRlbS5faWRdXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgZm9ybVwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICAgIDwvaDM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUxpc3RDb21wb25lbnQge1xyXG5cdEBJbnB1dChcImRhdGFcIikgZGF0YSQ6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsW10+O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIE1haW5Db250YWluZXJSZWR1Y2VyIGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclJlZHVjZXIuTWFpbkNvbnRhaW5lclN0YXRlPikge31cclxufVxyXG4iLCJpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQWN0aW9uVHlwZXMsIEFkZEZvcm1TdGFydEFjdGlvbiwgQWRkRm9ybVN1Y2NlZWRBY3Rpb24sIEFkZEZvcm1GYWlsZWRBY3Rpb24gfSBmcm9tIFwiLi9hZGQtZm9ybS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRBZGRGb3JtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBBZGRGb3JtU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0QWRkRm9ybVN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuYWRkKGRhdGEpKSxcclxuXHRcdFx0bWFwKHJlcyA9PiBuZXcgQWRkRm9ybVN1Y2NlZWRBY3Rpb24oKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgQWRkRm9ybUZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtcclxuXHRGb3Jtc0xpc3RBY3Rpb24sXHJcblx0Rm9ybXNMaXN0QWN0aW9uVHlwZXMsXHJcblx0Rm9ybXNMaXN0QWN0aW9ucyxcclxuXHRGb3Jtc0xpc3RGYWlsZWRBY3Rpb24sXHJcblx0Rm9ybXNMaXN0U3RhcnRBY3Rpb24sXHJcblx0Rm9ybXNMaXN0U3VjY2VlZEFjdGlvbixcclxuXHRGb3JtU2NoZW1hRmVjaGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vbGlzdC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUKS5tYXAoZGF0YSA9PiBuZXcgRm9ybXNMaXN0U3RhcnRBY3Rpb24oKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEdldEZvcm0kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShGb3Jtc0xpc3RBY3Rpb25UeXBlcy5HRVRfRk9STV9TQ0hFTUEpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KGlkKSksXHJcblx0XHRcdG1hcChmb3JtU2NoZW1hID0+IG5ldyBGb3JtU2NoZW1hRmVjaGVkQWN0aW9uKGZvcm1TY2hlbWEpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0X2Zvcm1zX2xpc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogYW55KSA9PiB0aGlzLnNlcnZpY2UuZ2V0TGlzdCgpKSxcclxuXHRcdFx0bWFwKHJlcyA9PiBuZXcgRm9ybXNMaXN0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBGb3Jtc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRGb3JtQWN0aW9uVHlwZXMsXHJcblx0RWRpdEZvcm1TdGFydEFjdGlvbixcclxuXHRFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24sXHJcblx0RWRpdEZvcm1GYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9lZGl0LWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uL2xpc3RcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0Rm9ybSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBFZGl0Rm9ybVN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRGb3JtU3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0Rm9ybUFwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMuc2VydmljZS51cGRhdGUoZGF0YSkpLFxyXG5cdFx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgRWRpdEZvcm1TdWNjZWVkQWN0aW9uKGZvcm1TY2hlbWEpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBFZGl0Rm9ybUZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwZGF0ZUZvcm1zTGlzdFN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1VDQ0VFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZm9ybVNjaGVtYSA9PiBuZXcgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbihmb3JtU2NoZW1hKSkpO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2VkaXQtZm9ybVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9lZGl0LWZvcm0tY29udGFpbmVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2VkaXQtZm9ybS5hY3Rpb25zXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2VkaXQtZm9ybS5lZmZlY3RzXCI7XHJcbi8vIGV4cG9ydCAqIGZyb20gXCIuL2VkaXQtZm9ybS5yZWR1Y2VyXCI7XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJmb3JtXCIsXHJcblx0XHRjb21wb25lbnQ6IE1haW5Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJhZGRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEFkZEZvcm1Db250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiZWRpdC86X2lkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94LFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuL2Zvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IEZvcm1SZWR1Y2VycyB9IGZyb20gXCIuL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtQXJyYXlDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvZm9ybS1hcnJheS9mb3JtLWFycmF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9mb3JtLWNvbnRyb2wvZm9ybS1jb250cm9sLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtVmlld0NvbXBvbmVudCwgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIH0gZnJvbSBcIi4vdmlldy9mb3JtLXZpZXcvZm9ybS12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL3RleHQvdGV4dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2VtYWlsL2VtYWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb2xvckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9jb2xvci9jb2xvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL251bWJlci9udW1iZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL3RhYmxlL3RhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC1mb3JtLWNvbnRhaW5lci9lZGl0LWZvcm0tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC1mb3JtL2VkaXQtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2Zvcm0tbGlzdC1jb250YWluZXIvZm9ybS1saXN0LmNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2Zvcm0tbGlzdC9mb3JtLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLmNvbXBvbmVudC9tYWluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9hZGQtZm9ybS9hZGQtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUVmZmVjdHMgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUVmZmVjdHMgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZvcm1zTGlzdEVmZmVjdHMgfSBmcm9tIFwiLi9saXN0L2xpc3QuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZm9ybS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0RWRpdEZvcm1Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRFZGl0Rm9ybUNvbXBvbmVudCxcclxuXHRcdEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUxpc3RDb21wb25lbnQsXHJcblx0XHRBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0TWFpbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdEFkZEZvcm1Db21wb25lbnQsXHJcblx0XHRGb3JtR3JvdXBDb21wb25lbnQsXHJcblx0XHRGb3JtQXJyYXlDb21wb25lbnQsXHJcblx0XHRGb3JtQ29udHJvbENvbXBvbmVudCxcclxuXHRcdEZvcm1WaWV3Q29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0ZpZWxkRGlyZWN0aXZlLFxyXG5cdFx0U2VsZWN0Q29tcG9uZW50LFxyXG5cdFx0Q2hlY2tib3hDb21wb25lbnQsXHJcblx0XHRFbWFpbENvbXBvbmVudCxcclxuXHRcdENvbG9yQ29tcG9uZW50LFxyXG5cdFx0VGV4dENvbXBvbmVudCxcclxuXHRcdE51bWJlckNvbXBvbmVudCxcclxuXHRcdFRhYmxlQ29tcG9uZW50XHJcblx0XHQvLyBOZ3NGb3JtU2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0U2VsZWN0Q29tcG9uZW50LFxyXG5cdFx0Q2hlY2tib3hDb21wb25lbnQsXHJcblx0XHRFbWFpbENvbXBvbmVudCxcclxuXHRcdENvbG9yQ29tcG9uZW50LFxyXG5cdFx0VGV4dENvbXBvbmVudCxcclxuXHRcdE51bWJlckNvbXBvbmVudCxcclxuXHRcdFRhYmxlQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbIEZvcm1WaWV3Q29tcG9uZW50IF1cclxuXHQvLyBleHBvcnRzOiBbIEZvcm1WaWV3Q29tcG9uZW50LCBOZ3NGb3JtU2VsZWN0b3JDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzRm9ybU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogRm9ybU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NGb3JtTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzRm9ybU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJmb3JtXCIsIEZvcm1SZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBBZGRGb3JtRWZmZWN0cywgRWRpdEZvcm1FZmZlY3RzLCBGb3Jtc0xpc3RFZmZlY3RzIF0pLFxyXG5cdFx0Um91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NGb3JtTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NGb3JtTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJCZWhhdmlvclN1YmplY3QiLCJGb3JtU2NoZW1hTW9kZWwiLCJsaXN0LnJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFXYSxxQkFBcUIsR0FBcUI7SUFDdEQsU0FBUyxFQUFFO1FBQ1YsT0FBTyxFQUFFLEVBQUU7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxVQUFVLEVBQUUsRUFBRTtLQUNkO0NBQ0QsQ0FBQztBQUNGLHVCQUFhLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUFtQixrQkFBa0IsQ0FBQzs7Ozs7O0FDbEIzRixJQUdpQixlQUFlO0FBQWhDLFdBQWlCLGVBQWU7SUFDL0I7Ozs7UUFLQyxZQUFZLFNBQVMscUJBQUcsRUFBNkIsQ0FBQTtZQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7Ozs7UUFFRCxjQUFjO1lBQ2IsT0FBTztnQkFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNuQixDQUFDO1NBQ0Y7Ozs7UUFDRCxXQUFXLFNBQVM7WUFDbkIsT0FBTyxJQUFJLFNBQVMsQ0FBQztnQkFDcEIsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDakQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDbEQsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDbkQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztnQkFDekIsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDO29CQUNyQixNQUFNLEVBQUUsSUFBSSxTQUFTLENBQUM7d0JBQ3JCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7d0JBQzVCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7cUJBQzVCLENBQUM7b0JBQ0YsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDO3dCQUNyQixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO3dCQUM1QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDO3FCQUMvQixDQUFDO2lCQUNGLENBQUM7YUFDRixDQUFDLENBQUM7U0FDSDtLQUNEO0lBbENZLHVCQUFPO0lBb0NwQjtRQUVDLGlCQUFnQjtLQUNoQjtJQUhZLHdCQUFRO0dBckNMLGVBQWUsS0FBZixlQUFlLFFBeUMvQjs7Ozs7O0FDNUNELElBR2lCLGdCQUFnQjtBQUFqQyxXQUFpQixnQkFBZ0I7SUFDaEM7Ozs7UUFLQyxZQUFZLFNBQVMscUJBQUcsRUFBOEIsQ0FBQTtZQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7Ozs7UUFFRCxjQUFjO1lBQ2IsT0FBTztnQkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDbkIsQ0FBQztTQUNGOzs7O1FBQ0QsV0FBVyxTQUFTO1lBQ25CLE9BQU8sSUFBSSxTQUFTLENBQUM7Z0JBQ3BCLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ2pELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ2xELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sRUFBRSxJQUFJLFNBQVMsQ0FBQztvQkFDckIsTUFBTSxFQUFFLElBQUksU0FBUyxDQUFDO3dCQUNyQixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO3dCQUM1QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO3FCQUM1QixDQUFDO29CQUNGLE1BQU0sRUFBRSxJQUFJLFNBQVMsQ0FBQzt3QkFDckIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQzt3QkFDNUIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQztxQkFDL0IsQ0FBQztpQkFDRixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0g7S0FDRDtJQWxDWSx3QkFBTztJQW9DcEI7UUFFQyxpQkFBZ0I7S0FDaEI7SUFIWSx5QkFBUTtHQXJDTCxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBeUNoQzs7Ozs7O0FDNUNELElBR2lCLGdCQUFnQjtBQUFqQyxXQUFpQixnQkFBZ0I7SUFDaEM7Ozs7UUFHQyxZQUFZLFNBQVMscUJBQUcsRUFBOEIsQ0FBQTtZQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RTs7OztRQUVELGNBQWM7WUFDYixPQUFPO2dCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDdkIsQ0FBQztTQUNGOzs7O1FBQ0QsV0FBVyxTQUFTO1lBQ25CLE9BQU8sSUFBSSxTQUFTLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ2xELFFBQVEsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1NBQ0g7S0FDRDtJQW5CWSx3QkFBTztJQXFCcEI7UUFFQyxpQkFBZ0I7S0FDaEI7SUFIWSx5QkFBUTtHQXRCTCxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBMEJoQzs7Ozs7OztJQ3JCQTtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxxQkFBcUI7U0FDOUIsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDaEIsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLEtBQUssRUFBRSxDQUFDO1NBQ1IsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSw2QkFBNkI7U0FDdEMsQ0FBQztLQUNGO0NBQ0Q7Ozs7OztBQ3pCRDs7OztJQXVCQyxZQUFZLElBQW1DO1FBQzlDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxJQUFJLFNBQVM7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztLQUNqQztDQUNEOzs7Ozs7QUM3QkQ7SUFrQkM7c0JBWFM7WUFDUixNQUFNLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLEtBQUs7YUFDWDtZQUNELE1BQU0sRUFBRTtnQkFDUCxJQUFJLEVBQUUsS0FBSztnQkFDWCxJQUFJLEVBQUUsUUFBUTthQUNkO1NBQ0Q7UUFHQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBQ0QsSUFBSTtRQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO0tBQzNDO0NBQ0Q7Ozs7Ozs7Ozs7O0FDeEJEOzs7OztJQW9CQyxZQUF5QyxVQUFVLEVBQVUsS0FBZ0M7UUFBaEMsVUFBSyxHQUFMLEtBQUssQ0FBMkI7dUJBRm5GLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDO1FBR25ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVU7WUFDMUQsSUFBSSxDQUFDLFVBQVU7Z0JBQUUsT0FBTztZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQyxDQUFDLENBQUM7S0FDSDs7OztJQWJELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNwQjs7O1lBUEQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7OzRDQVFhLE1BQU0sU0FBQyxtQkFBbUI7WUFsQi9CLEtBQUs7Ozs7Ozs7O0FDRmQ7Ozs7OztJQW9CQyxZQUNTLE1BQ0EsT0FDQTtRQUZBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9CO0tBQ3pCOzs7OztJQUVKLEdBQUcsQ0FBQyxJQUE2QjtRQUNoQyx1QkFBTSxLQUFLLEdBQUcsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU87YUFDdEMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7YUFDaEQsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNQLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7YUFDckYsR0FBRyxDQUFDLENBQUMsUUFBa0MsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0Q7Ozs7O0lBQ0QsR0FBRyxDQUFDLEdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO2FBQ3RDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2FBQ2hELElBQUksQ0FBQyxDQUFDLENBQUM7YUFDUCxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNyRixHQUFHLENBQUMsQ0FBQyxRQUFtQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoRTs7OztJQUNELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO2FBQ3RDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2FBQ2hELFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1RCxHQUFHLENBQUMsQ0FBQyxRQUFtQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoRTs7Ozs7SUFDRCxNQUFNLENBQUMsSUFBOEI7UUFDcEMsdUJBQU0sS0FBSyxHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU87YUFDdEMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7YUFDakQsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNQLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7YUFDckYsR0FBRyxDQUFDLENBQUMsUUFBbUMsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEU7Ozs7O0lBQ0QsTUFBTSxDQUFDLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTzthQUN0QyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQzthQUNuRCxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztLQUNsRTs7Ozs7SUFDRCxjQUFjLENBQUMsR0FBVztRQUN6Qix1QkFBTSxPQUFPLEdBQUcsSUFBSUEsaUJBQWUsQ0FBa0IsU0FBUyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUs7YUFDUixNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkYsU0FBUyxDQUFDQyxrQkFBZSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUNBLGtCQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzlCOzs7WUFyREQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBZlEsVUFBVTtZQUVWLEtBQUs7WUFPTCx3QkFBd0I7Ozs7Ozs7O0FDVmpDO0lBa0JDLGlCQUFnQjs7O1lBZGhCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7OztPQU1KO2dCQUNOLE1BQU0sRUFBRSxDQUFDLGlEQUFpRCxDQUFDO2FBQzNEOzs7Ozs7Ozs7Ozs7OztBQ2REO0lBa0JDLGlCQUFnQjs7O1lBYmhCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7T0FJSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMzRDs7Ozs7Ozs7Ozs7Ozs7QUNiRDtJQWtCQyxpQkFBZ0I7Ozs7SUFFaEIsUUFBUSxNQUFLOzs7WUFmYixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7O09BSUo7Z0JBQ04sTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7YUFDM0Q7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7SUFvQkMsaUJBQWdCOzs7O0lBRWhCLFFBQVEsTUFBSzs7O1lBakJiLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7T0FJSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMzRDs7Ozs7bUJBS0MsS0FBSztxQkFDTCxLQUFLOzs7Ozs7Ozs7Ozs7QUNuQlA7Ozs7SUFpRkMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTt5QkFEeEIsSUFBSSxjQUFjLENBQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUU1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNuQjs7OztJQUNELFFBQVE7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQVM7WUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUM5QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0QsQ0FBQyxDQUFDO0tBQ0g7Ozs7O0lBR0QsYUFBYTtRQUNaLHVCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVE7U0FDM0MsQ0FBQyxDQUFDO1FBQ0gsdUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxPQUFPLFdBQVcsS0FBSyxPQUFPLENBQUM7S0FDL0I7Ozs7O0lBR0QsWUFBWTtRQUNYLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNoSDs7O1lBbEdELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQXlERTtnQkFDWixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMzRDs7OztZQWpFUSxVQUFVOzs7bUJBcUVqQixLQUFLO3FCQUNMLEtBQUs7Ozs7Ozs7Ozs7OztBQzFFUDtJQWlCQyxpQkFBZ0I7Ozs7SUFFaEIsUUFBUSxNQUFLOzs7WUFkYixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7O09BSUo7Z0JBQ04sTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7YUFDM0Q7Ozs7O21CQUVDLEtBQUs7cUJBQ0wsS0FBSzs7Ozs7Ozs7Ozs7O0FDaEJQO0lBK0JDLGlCQUFnQjs7O1lBMUJoQixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztrQkFpQk87Z0JBQ2pCLE1BQU0sRUFBRSxDQUFDLGlEQUFpRCxDQUFDO2FBQzNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDckJhLHlCQUF5QjtzQkFDbkIsK0JBQStCO3dCQUM3QixpQ0FBaUM7dUJBQ2xDLGdDQUFnQztxQkFDbEMsOEJBQThCO3dCQUMzQixpQ0FBaUM7cUJBQ3BDLDhCQUE4Qjt5QkFDMUIsa0NBQWtDOzs7O29CQUl4QyxvQkFBb0IsQ0FBQyxVQUFVOztDQUMvQzs7O29CQUVnQixvQkFBb0IsQ0FBQyxnQkFBZ0I7O0NBQ3JEOzs7OztJQUdBLFlBQW1CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO29CQUQ3QixvQkFBb0IsQ0FBQyxrQkFBa0I7S0FDTjtDQUNqRDs7O29CQUVnQixvQkFBb0IsQ0FBQyxpQkFBaUI7O0NBQ3REOzs7OztJQUdBLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixvQkFBb0IsQ0FBQyxrQkFBa0I7S0FDUjtDQUMvQzs7Ozs7SUFHQSxZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtvQkFEM0Isb0JBQW9CLENBQUMsZUFBZTtLQUNMO0NBQy9DOzs7OztJQUdBLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQURsQixvQkFBb0IsQ0FBQyxlQUFlO0tBQ2Q7Q0FDdEM7Ozs7O0lBR0EsWUFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7b0JBRDNCLG9CQUFvQixDQUFDLG1CQUFtQjtLQUNUO0NBQy9DOzs7Ozs7QUMzQ0Q7Ozs7Ozs7SUE0RUMsWUFDUyxTQUNBLFVBQ0EsVUFDQTtRQUhBLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7UUFDUixhQUFRLEdBQVIsUUFBUTtRQUNSLFVBQUssR0FBTCxLQUFLOzJCQXpCQSxJQUFJLE9BQU8sRUFBUTtzQkFDZCxJQUFJLFlBQVksRUFBYTtzQkFDN0IsSUFBSSxZQUFZLEVBQWE7Z0NBZ0I3QixLQUFLO1FBU3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSUQsaUJBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDOUQsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTztZQUNwQixJQUFJLENBQUMsU0FBUyxxQkFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQWMsQ0FBQSxDQUFDO1lBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzdCLENBQUMsQ0FBQztLQUNIOzs7OztJQTlCRCxJQUNJLEVBQUUsQ0FBQyxFQUFVO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsT0FBTzthQUNWLGNBQWMsQ0FBQyxFQUFFLENBQUM7YUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ2pEOzs7OztJQUNELElBQ0ksTUFBTSxDQUFDLE1BQXVCO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFCOzs7O0lBb0JELFdBQVc7UUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDNUI7Ozs7O0lBQ0QsUUFBUSxDQUFDLE1BQXVCO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFCOzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBaUIsRUFBRSxVQUFVLEdBQUcsRUFBRTtRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUUsQ0FFL0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTtnQkFDdEMscUJBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQztnQkFDL0IsVUFBVSxHQUFHLEdBQUcsVUFBVSxhQUFhLG9CQUFDLElBQW1CLElBQUUsSUFBSSxFQUFFLENBQUM7YUFDcEU7WUFDRCxxQkFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyQztZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNwQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN0RTtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQztZQUNELHFCQUFJLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELG1CQUFDLEdBQVUsR0FBRSxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzNCLG1CQUFDLEdBQVUsR0FBRSxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUN0QyxtQkFBQyxHQUFVLEdBQUUsTUFBTSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbEQsT0FBTyxHQUFHLENBQUM7U0FDWDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDaEMscUJBQUksU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7Z0JBQ2pDLFVBQVUsR0FBRyxtQkFBQyxJQUFtQixHQUFFLElBQUksQ0FBQzthQUN4QztpQkFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO2dCQUN0QyxVQUFVLEdBQUcsR0FBRyxVQUFVLGFBQWEsb0JBQUMsSUFBbUIsSUFBRSxJQUFJLEdBQUcsQ0FBQzthQUNyRTtpQkFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO2dCQUN0QyxVQUFVLEdBQUcsR0FBRyxVQUFVLGFBQWEsb0JBQUMsSUFBbUIsSUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNwRTtZQUVELG1CQUFDLFNBQWdCLEdBQUUsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxtQkFBQyxTQUFnQixHQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUk7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO2dCQUMxQixTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNuRSxDQUFDLENBQUM7WUFDSCxPQUFPLFNBQVMsQ0FBQztTQUNqQjthQUFNO1lBQ04scUJBQUksU0FBUyxHQUFjLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLFVBQVU7Z0JBQ1QsVUFBVSxJQUFJLEVBQUUsR0FBRyxtQkFBQyxJQUFtQixHQUFFLElBQUksR0FBRyxHQUFHLFVBQVUsYUFBYSxvQkFBQyxJQUFtQixJQUFFLElBQUksRUFBRSxDQUFDO1lBQ3hHLG1CQUFDLFNBQWdCLEdBQUUsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxtQkFBQyxTQUFnQixHQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUc7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO2dCQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUMzRCxDQUFDLENBQUM7WUFDSCxPQUFPLFNBQVMsQ0FBQztTQUNqQjtLQUNEOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNqQzs7OztJQUNELFFBQVE7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDakM7OztZQXhIRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O1FBWUg7YUFDUDs7OztZQXBCUSxXQUFXO1lBM0JuQixRQUFRO1lBRFIsd0JBQXdCO1lBa0JoQixLQUFLOzs7cUJBaUNaLE1BQU07cUJBQ04sTUFBTTtvQkFDTixLQUFLO2lCQUNMLEtBQUs7cUJBUUwsS0FBSzs7QUE4RlAsdUJBQU0sVUFBVSxHQUFvQztJQUNuRCxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLElBQUksRUFBRSxhQUFhO0lBQ25CLEtBQUssRUFBRSxjQUFjO0lBQ3JCLEtBQUssRUFBRSxjQUFjO0lBQ3JCLEtBQUssRUFBRSxjQUFjO0lBQ3JCLE1BQU0sRUFBRSxlQUFlO0NBQ3ZCLENBQUM7QUFLRjs7Ozs7SUFPQyxZQUFvQixRQUFrQyxFQUFVLFNBQTJCO1FBQXZFLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7S0FBSTs7OztJQUUvRixXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzNDO0tBQ0Q7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLHVCQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxRCxNQUFNLElBQUksS0FBSyxDQUNkLHNDQUFzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7dUJBQ3hDLGNBQWMsRUFBRSxDQUNuQyxDQUFDO1NBQ0Y7UUFDRCx1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBUSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDM0M7OztZQS9CRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjthQUMxQjs7OztZQXZLQSx3QkFBd0I7WUFEeEIsZ0JBQWdCOzs7cUJBMEtmLEtBQUs7b0JBRUwsS0FBSzs7Ozs7OztBQzlLUCxBQU1PLHVCQUFNLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsVUFBVTtJQUNsQixJQUFJLEVBQUUsRUFBRTtDQUNSLENBQUM7Ozs7OztBQUNGLGlCQUF3QixLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQXdCO0lBQ3JFLFFBQVEsTUFBTSxDQUFDLElBQUk7UUFDbEIsS0FBSyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUU7WUFDckMseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxPQUFPLElBQ2Q7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0MseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxTQUFTLElBQ2hCO1NBQ0Y7UUFDRCxLQUFLLG9CQUFvQixDQUFDLGtCQUFrQixFQUFFO1lBQzdDLHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFDcEIsTUFBTSxFQUFFLFNBQVMsSUFDaEI7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsaUJBQWlCLEVBQUU7WUFDNUMseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxRQUFRLElBQ2Y7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsa0JBQWtCLEVBQUU7WUFDN0MsdUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakMscUJBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0UsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO1lBQ0QseUJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxJQUFJLElBQ1Q7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsZUFBZSxFQUFFO1lBQzFDLHVCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLHFCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNELHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsSUFBSSxJQUNUO1NBQ0Y7UUFDRCxLQUFLLG9CQUFvQixDQUFDLG1CQUFtQixFQUFFO1lBQzlDLHVCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLHFCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNELHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsSUFBSSxJQUNUO1NBQ0Y7UUFFRCxTQUFTO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7Ozs7OztBQ25GRCx1QkFNYSxZQUFZLEdBQUc7SUFDM0IsSUFBSSxFQUFFRSxPQUFZO0NBQ2xCOzs7Ozs7QUNSRDtJQXVDQzt3QkFINkIsS0FBSzt1QkFDZCxJQUFJLFlBQVksRUFBRTtzQkFDbkIsSUFBSSxZQUFZLEVBQUU7S0FDckI7Ozs7SUFFaEIsT0FBTztRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWlCO1FBQzdCLHVCQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsT0FBTyxLQUFLLENBQUM7S0FDYjs7Ozs7SUFDRCxZQUFZLENBQUMsSUFBaUI7UUFDN0IsdUJBQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0tBQ2I7Ozs7O0lBQ0QsY0FBYyxDQUFDLElBQWlCO1FBQy9CLHVCQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixPQUFPLE9BQU8sQ0FBQztLQUNmOzs7OztJQUNELGVBQWUsQ0FBQyxHQUFXO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbEM7OztZQTdERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBCQzthQUNYOzs7OztxQkFFQyxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsTUFBTTtxQkFDTixNQUFNOzs7Ozs7O0FDdENSO0lBK0JDO3VCQURvQixJQUFJLFlBQVksRUFBRTtLQUN0Qjs7OztJQUVoQixPQUFPO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBaUI7UUFDN0IsdUJBQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0tBQ2I7Ozs7O0lBQ0QsWUFBWSxDQUFDLElBQWlCO1FBQzdCLHVCQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztLQUNiOzs7OztJQUNELGNBQWMsQ0FBQyxJQUFpQjtRQUMvQix1QkFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxPQUFPLENBQUM7S0FDZjs7O1lBbERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQzthQUNYOzs7OztxQkFFQyxLQUFLO3NCQUNMLE1BQU07Ozs7Ozs7QUM5QlI7SUE0R0M7dUJBYm9CLElBQUksWUFBWSxFQUFFO3NCQUNuQixJQUFJLFlBQVksRUFBRTtxQkFFN0IsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUU7dUJBQy9CLElBQUksU0FBUyxDQUFDO1lBQ3ZCLElBQUksU0FBUyxDQUFDO2dCQUNiLEdBQUcsRUFBRSxJQUFJLFdBQVcsRUFBRTtnQkFDdEIsS0FBSyxFQUFFLElBQUksV0FBVyxFQUFFO2FBQ3hCLENBQUM7U0FDRixDQUFDOzRCQUNhLElBQUksU0FBUyxDQUFDO1lBQzVCLFlBQVksRUFBRSxJQUFJLFdBQVcsQ0FBQyx3REFBd0QsQ0FBQztTQUN2RixDQUFDO0tBQ2M7Ozs7SUFFaEIsT0FBTztRQUNOLElBQUksQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNwRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE9BQU8sRUFBRTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztTQUM5QzthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxFQUFFO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDaEIsSUFBSSxTQUFTLENBQUM7WUFDYixHQUFHLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDdEIsS0FBSyxFQUFFLElBQUksV0FBVyxFQUFFO1NBQ3hCLENBQUMsQ0FDRixDQUFDO0tBQ0Y7Ozs7O0lBQ0QsWUFBWSxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ25DOzs7O0lBQ0QsYUFBYTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0tBQ3pDOzs7WUFqSUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFxRmM7YUFDeEI7Ozs7O3FCQUVDLEtBQUs7c0JBQ0wsTUFBTTtxQkFDTixNQUFNOzs7Ozs7Ozs7ZUMzRkssd0JBQXdCO3FCQUNsQiw4QkFBOEI7dUJBQzVCLGdDQUFnQztzQkFDakMsK0JBQStCOzs7Ozs7SUFLbEQsWUFBbUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7b0JBRDNCLG1CQUFtQixDQUFDLFNBQVM7S0FDRTtDQUMvQzs7Ozs7SUFHQSxZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtvQkFEM0IsbUJBQW1CLENBQUMsZUFBZTtLQUNKO0NBQy9DOzs7OztJQUdBLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixtQkFBbUIsQ0FBQyxpQkFBaUI7S0FDTjtDQUMvQzs7O29CQUVnQixtQkFBbUIsQ0FBQyxnQkFBZ0I7O0NBQ3BEOzs7Ozs7OztjQ3BCVyw4QkFBOEI7b0JBQ3hCLDRCQUE0QjtzQkFDMUIsOEJBQThCO3FCQUMvQiw2QkFBNkI7Ozs7OztJQUsvQyxZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtvQkFEM0Isa0JBQWtCLENBQUMsUUFBUTtLQUNJO0NBQy9DOzs7OztJQUdBLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO29CQUQzQixrQkFBa0IsQ0FBQyxjQUFjO0tBQ0Y7Q0FDL0M7OztvQkFFZ0Isa0JBQWtCLENBQUMsZ0JBQWdCOztDQUNuRDs7O29CQUVnQixrQkFBa0IsQ0FBQyxlQUFlOztDQUNsRDs7Ozs7O0FDeEJEOzs7OztJQW9CQyxZQUFtQixLQUFnQyxFQUFTLE9BQW9CO1FBQTdELFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBYTtLQUFJOzs7O0lBQ3BGLFFBQVE7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzFEOzs7OztJQUNELEdBQUcsQ0FBQyxJQUFxQjtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzdDOzs7OztJQUNELGFBQWEsQ0FBQyxJQUFxQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDdEQ7OztZQXBCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7O3FCQUlVO2FBQ3BCOzs7O1lBZFEsS0FBSztZQU1MLFdBQVc7Ozs7Ozs7Ozs7OztBQ1RwQixnQ0FxQndDLFNBQVEseUJBQXlCOzs7Ozs7SUFFeEUsWUFBbUIsT0FBb0IsRUFBVSxLQUFxQixFQUFTLEtBQWdDO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFESixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUEyQjt5QkFEbkcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFNBQVM7S0FHN0M7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2YsR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUIsU0FBUyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZixHQUFHLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1QixTQUFTLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2hELE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQzthQUM1QixJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ1AsU0FBUyxDQUFDLFVBQVU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQUk7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzlDOzs7WUFoQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7aUJBS007YUFDaEI7Ozs7WUFaUSxXQUFXO1lBUFgsY0FBYztZQUVkLEtBQUs7Ozs7Ozs7QUNIZDs7eUJBMERzQixlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVM7d0JBQ2pDLElBQUksWUFBWSxFQUFFO3VCQUNuQixJQUFJLFlBQVksRUFBRTs7Ozs7SUFFdEMsSUFBSTtRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBQ0QsT0FBTztRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hDOzs7OztJQUNELFdBQVcsQ0FBQyxNQUFNLEtBQUk7Ozs7O0lBRXRCLFlBQVksQ0FBQyxJQUFpQjtRQUM3Qix1QkFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7S0FDYjs7Ozs7SUFDRCxZQUFZLENBQUMsSUFBaUI7UUFDN0IsdUJBQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0tBQ2I7Ozs7O0lBQ0QsY0FBYyxDQUFDLElBQWlCO1FBQy9CLHVCQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixPQUFPLE9BQU8sQ0FBQztLQUNmOzs7WUFuRkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BK0NKO2FBQ047OztxQkFFQyxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsTUFBTTtzQkFDTixNQUFNOzs7Ozs7Ozs7Ozs7QUM1RFIsdUJBNkQrQixTQUFRLGdCQUFnQjs7OztJQUV0RCxJQUFJO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hEOzs7WUF4REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BK0NKO2FBQ047OztxQkFFQyxLQUFLOzs7Ozs7O0FDOURQOzs7O0lBZ0JDLFlBQW1CLEtBQWdDO1FBQWhDLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlEOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztLQUMzQzs7O1lBWkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7aUJBRU07YUFDaEI7Ozs7WUFYUSxLQUFLOzs7Ozs7O0FDRmQ7OztZQVVDLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7T0FTSjthQUNOOzs7b0JBRUMsS0FBSyxTQUFDLE1BQU07Ozs7Ozs7QUN4QmQ7Ozs7O0lBV0MsWUFBb0IsS0FBcUIsRUFBVSxLQUFxRDtRQUFwRixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdEO0tBQUk7OztZQUo1RyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlDQUFpQzthQUMzQzs7OztZQUxRLGNBQWM7WUFEZCxLQUFLOzs7Ozs7Ozs7Ozs7O0lDZ0JiLFlBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLE9BQW9CO1FBQTVFLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTt3QkFHckYsSUFBSSxDQUFDLFFBQVE7YUFDdEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQzthQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NkJBR2hFLElBQUksQ0FBQyxRQUFRO2FBQzNCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUM7YUFDekMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUM3QixTQUFTLENBQUMsQ0FBQyxJQUE2QixLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3BFLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxvQkFBb0IsRUFBRSxDQUFDLEVBQ3RDLFVBQVUsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FDMUQ7S0Fma0c7OztZQUZwRyxVQUFVOzs7O1lBVEYsT0FBTztZQUhQLE1BQU07WUFPTixXQUFXOzs7SUFTbEIsTUFBTSxFQUFFOzs7O0lBS1IsTUFBTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNIVCxZQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxPQUFvQjtRQUE1RSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7bUNBRzFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxvQkFBb0IsRUFBRSxDQUFDO3dCQUd4RyxJQUFJLENBQUMsUUFBUTthQUN0QixNQUFNLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDO2FBQzVDLElBQUksQ0FDSixHQUFHLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDN0IsU0FBUyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNyQyxHQUFHLENBQUMsVUFBVSxJQUFJLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDekQ7K0JBR2dCLElBQUksQ0FBQyxRQUFRO2FBQzdCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM3QyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsSUFBUyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsRUFDaEQsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzNDLFVBQVUsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLENBQUMsQ0FDNUQ7S0FyQmtHOzs7WUFGcEcsVUFBVTs7OztZQWpCRixPQUFPO1lBSFAsTUFBTTtZQVFOLFdBQVc7OztJQWdCbEIsTUFBTSxFQUFFOzs7O0lBR1IsTUFBTSxFQUFFOzs7O0lBU1IsTUFBTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaEJULFlBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLE9BQW9CO1FBQTVFLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTt5QkFHcEYsSUFBSSxDQUFDLFFBQVE7YUFDdkIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQzthQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OEJBR2hFLElBQUksQ0FBQyxRQUFRO2FBQzVCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7YUFDM0MsSUFBSSxDQUNKLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUM3QixTQUFTLENBQUMsQ0FBQyxJQUE4QixLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3hFLEdBQUcsQ0FBQyxVQUFVLElBQUksSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUN4RCxVQUFVLENBQUMsTUFBTSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQzNEO3FDQUdzQixJQUFJLENBQUMsUUFBUTthQUNuQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUM7YUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxVQUFVLElBQUksSUFBSSxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0tBcEJJOzs7WUFGcEcsVUFBVTs7OztZQWZGLE9BQU87WUFIUCxNQUFNO1lBT04sV0FBVzs7O0lBZWxCLE1BQU0sRUFBRTs7OztJQUtSLE1BQU0sRUFBRTs7OztJQVVSLE1BQU0sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENWOzs7Ozs7QUNDQSxBQU9BLHVCQUFNLE1BQU0sR0FBVztJQUN0QjtRQUNDLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxRQUFRLEVBQUU7WUFDVDtnQkFDQyxJQUFJLEVBQUUsS0FBSztnQkFDWCxTQUFTLEVBQUUseUJBQXlCO2FBQ3BDO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSwwQkFBMEI7YUFDckM7WUFDRDtnQkFDQyxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsMEJBQTBCO2FBQ3JDO1NBQ0Q7S0FDRDtDQUNELENBQUM7QUFFRix1QkFBYSxhQUFhLEdBQXdCLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOzs7Ozs7QUM3Qi9FOzs7OztJQThHQyxPQUFPLE9BQU8sQ0FBQyxNQUF5QjtRQUN2QyxPQUFPO1lBQ04sUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUU7U0FDakUsQ0FBQztLQUNGOzs7WUEvREQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLG1CQUFtQjtpQkFDbkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLDBCQUEwQjtvQkFDMUIsaUJBQWlCO29CQUNqQiwwQkFBMEI7b0JBQzFCLGlCQUFpQjtvQkFDakIseUJBQXlCO29CQUN6QixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixlQUFlO29CQUNmLGNBQWM7aUJBRWQ7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixjQUFjO2lCQUNkO2dCQUNELE9BQU8sRUFBRSxDQUFFLGlCQUFpQixDQUFFO2FBRTlCOztBQW1CRDs7O1lBVEMsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixhQUFhO29CQUNiLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztvQkFDNUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUUsQ0FBQztvQkFDL0UsYUFBYTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBRSxhQUFhLENBQUU7YUFDMUI7Ozs7Ozs7Ozs7Ozs7OzsifQ==
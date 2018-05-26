/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from "@angular/core";
import { FormSchemaModel, AddFormApiModel, FieldConfig } from "../../models";
export class AddFormComponent {
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
    changeOrder($event) {
        debugger;
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
function AddFormComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AddFormComponent.prototype.schema;
    /** @type {?} */
    AddFormComponent.prototype.formGroup;
    /** @type {?} */
    AddFormComponent.prototype.submited;
    /** @type {?} */
    AddFormComponent.prototype.changes;
}
//# sourceMappingURL=add-form.component.js.map

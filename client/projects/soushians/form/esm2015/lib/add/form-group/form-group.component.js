/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FieldConfig } from "../../models";
export class FormGroupComponent {
    constructor() {
        this.noHeader = false;
        this.changes = new EventEmitter();
        this.delete = new EventEmitter();
        debugger;
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
function FormGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FormGroupComponent.prototype.schema;
    /** @type {?} */
    FormGroupComponent.prototype.noHeader;
    /** @type {?} */
    FormGroupComponent.prototype.changes;
    /** @type {?} */
    FormGroupComponent.prototype.delete;
}
//# sourceMappingURL=form-group.component.js.map

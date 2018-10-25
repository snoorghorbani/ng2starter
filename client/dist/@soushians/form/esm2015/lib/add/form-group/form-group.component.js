/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FieldConfig } from "../../models";
export class FormGroupComponent {
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
if (false) {
    /** @type {?} */
    FormGroupComponent.prototype.schema;
    /** @type {?} */
    FormGroupComponent.prototype.noHeader;
    /** @type {?} */
    FormGroupComponent.prototype.changes;
    /** @type {?} */
    FormGroupComponent.prototype.delete;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvYWRkL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQTZCM0MsTUFBTSxPQUFPLGtCQUFrQjtJQUs5QjtRQUhBLGdCQUE2QixLQUFLLENBQUM7UUFDbkMsZUFBb0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxjQUFtQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRWhCLE9BQU87UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELFlBQVksQ0FBQyxJQUFpQjs7UUFDN0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sS0FBSyxDQUFDO0tBQ2I7Ozs7O0lBQ0QsWUFBWSxDQUFDLElBQWlCOztRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztLQUNiOzs7OztJQUNELGNBQWMsQ0FBQyxJQUFpQjs7UUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxPQUFPLENBQUM7S0FDZjs7Ozs7SUFDRCxlQUFlLENBQUMsR0FBVztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2xDOzs7WUExREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F1Qko7YUFDTjs7Ozs7cUJBRUMsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLE1BQU07cUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1ncm91cFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdj5cclxuXHJcbiAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiIW5vSGVhZGVyXCI+XHJcbiAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEubmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIiFub0hlYWRlclwiPlxyXG4gICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLnRpdGxlXCIgcGxhY2Vob2xkZXI9XCLYudmG2YjYp9mGXCI+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImJ1dHRvbi1yb3dcIj5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYSlcIj4gYWRkRm9ybUdyb3VwIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQXJyYXkoc2NoZW1hKVwiPiBhZGRGb3JtQXJyYXkgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Db250cm9sKHNjaGVtYSlcIj5hZGRGb3JtQ29udHJvbDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBzY2hlbWEuZmllbGRzO2xldCBpID0gaW5kZXhcIj5cclxuICAgIDxkaXYgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cclxuICAgICAgPGFwcC1mb3JtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1ncm91cD5cclxuICAgICAgPCEtLSA8YXBwLWZvcm0tYXJyYXkgKm5nU3dpdGNoQ2FzZT1cIidhcnJheSdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PiAtLT5cclxuICAgICAgPGFwcC1mb3JtLWNvbnRyb2wgKm5nU3dpdGNoQ2FzZT1cIidjb250cm9sJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIiAoZGVsZXRlKT1cImRlbGV0ZUZvcm1Hcm91cChpKVwiPjwvYXBwLWZvcm0tY29udHJvbD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXBDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0QElucHV0KCkgbm9IZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRAT3V0cHV0KCkgY2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Y2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KCk7XHJcblx0fVxyXG5cclxuXHRhZGRGb3JtR3JvdXAocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGdyb3VwID0gbmV3IEZpZWxkQ29uZmlnKFwiZ3JvdXBcIik7XHJcblx0XHRncm91cC5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goZ3JvdXApO1xyXG5cdFx0dGhpcy5zY2hlbWEuaWQgPSB0aGlzLnNjaGVtYS5pZCArIDE7XHJcblx0XHRyZXR1cm4gZ3JvdXA7XHJcblx0fVxyXG5cdGFkZEZvcm1BcnJheShyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgYXJyYXkgPSBuZXcgRmllbGRDb25maWcoXCJhcnJheVwiKTtcclxuXHRcdGFycmF5LmZpZWxkcyA9IFtdO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChhcnJheSk7XHJcblx0XHRyZXR1cm4gYXJyYXk7XHJcblx0fVxyXG5cdGFkZEZvcm1Db250cm9sKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gbmV3IEZpZWxkQ29uZmlnKFwiY29udHJvbFwiKTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goY29udHJvbCk7XHJcblx0XHRyZXR1cm4gY29udHJvbDtcclxuXHR9XHJcblx0ZGVsZXRlRm9ybUdyb3VwKGlkeDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnNjaGVtYS5maWVsZHMuc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
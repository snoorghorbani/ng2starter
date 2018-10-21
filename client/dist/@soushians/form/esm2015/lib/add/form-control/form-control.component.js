/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { FieldConfig } from "../../models";
export class FormControlComponent {
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
function FormControlComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FormControlComponent.prototype.schema;
    /** @type {?} */
    FormControlComponent.prototype.changes;
    /** @type {?} */
    FormControlComponent.prototype.delete;
    /** @type {?} */
    FormControlComponent.prototype.width;
    /** @type {?} */
    FormControlComponent.prototype.options;
    /** @type {?} */
    FormControlComponent.prototype.tableOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9hZGQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQWdHM0MsTUFBTTtJQWVMO3VCQWJvQixJQUFJLFlBQVksRUFBRTtzQkFDbkIsSUFBSSxZQUFZLEVBQUU7cUJBRTdCLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFFO3VCQUMvQixJQUFJLFNBQVMsQ0FBQztZQUN2QixJQUFJLFNBQVMsQ0FBQztnQkFDYixHQUFHLEVBQUUsSUFBSSxXQUFXLEVBQUU7Z0JBQ3RCLEtBQUssRUFBRSxJQUFJLFdBQVcsRUFBRTthQUN4QixDQUFDO1NBQ0YsQ0FBQzs0QkFDYSxJQUFJLFNBQVMsQ0FBQztZQUM1QixZQUFZLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ2pDLENBQUM7S0FDYzs7OztJQUVoQixPQUFPO1FBQ04sRUFBRSxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3BHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDOUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDcEI7Ozs7SUFFRCxTQUFTO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2hCLElBQUksU0FBUyxDQUFDO1lBQ2IsR0FBRyxFQUFFLElBQUksV0FBVyxFQUFFO1lBQ3RCLEtBQUssRUFBRSxJQUFJLFdBQVcsRUFBRTtTQUN4QixDQUFDLENBQ0YsQ0FBQztLQUNGOzs7OztJQUNELFlBQVksQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNuQzs7OztJQUNELGFBQWE7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUN6Qzs7O1lBdElELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkEwRlk7YUFDdEI7Ozs7O3FCQUVDLEtBQUs7c0JBQ0wsTUFBTTtxQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1mb3JtLWNvbnRyb2xcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtZXhwYW5zaW9uLXBhbmVsPlxyXG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cclxuICAgIDxtYXQtcGFuZWwtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+XHJcbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGUuZW1pdCgpXCI+XHJcbiAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJpY29uLWJ1dHRvblwiPmRlbGV0ZV9mb3JldmVyPC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxzcGFuPnt7c2NoZW1hLm5hbWV9fTwvc3Bhbj5cclxuXHJcbiAgICA8L21hdC1wYW5lbC10aXRsZT5cclxuICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLm5hbWVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEudGl0bGVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInNjaGVtYS5pbnB1dFR5cGVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiSW5wdXQgVHlwZVwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGFibGVcIj50YWJsZTwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPnNlbGVjdDwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibnVtYmVyXCI+bnVtYmVyPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZW1haWxcIj5lbWFpbDwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNvbG9yXCI+Y29sb3I8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5jaGVja2JveDwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Y2FwdGNoYTwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjEwcHhcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWx1ZVwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwic2NoZW1hLndpZHRoXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIndpZHRoXCI+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygd2lkdGhcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjEwcHhcIj5cclxuICAgIDxkaXYgKm5nSWY9XCJzY2hlbWEuaW5wdXRUeXBlPT0ndGFibGUnXCIgW2Zvcm1Hcm91cF09XCJ0YWJsZU9wdGlvbnNcIj5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cImRhdGFFbmRwb2ludFwiIHBsYWNlaG9sZGVyPVwiZGF0YUVuZHBvaW50XCIgLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJzY2hlbWEuaW5wdXRUeXBlPT0nc2VsZWN0J1wiPlxyXG4gICAgICBbb3B0aW9uc11cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkT3B0aW9uKClcIj4rPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImluc2VydE9wdGlvbnMoKVwiPmluc2VydDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9ucy5jb250cm9scztpbmRleCBhcyBpXCI+XHJcbiAgICAgICAge3tpfX1cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwib3B0aW9ucy5jb250cm9sc1tpXVwiPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJrZXlcIiBwbGFjZWhvbGRlcj1cImtleVwiIC8+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJ2YWx1ZVwiIHBsYWNlaG9sZGVyPVwidmFsdWVcIiAvPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxiciAvPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLnJlcXVpcmVkLmFjdGl2ZVwiPtin2KzYqNin2LHbjDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCLZvtuM2LrYp9mFXCIgLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IuZW1haWwuYWN0aXZlXCI+2KfbjNmF24zZhDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCLZvtuM2LrYp9mFXCIgLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLmFjdGl2ZVwiPtit2K/Yp9mC2YQg2KrYudiv2KfYryDaqdin2LHYp9qp2KrYsTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwi2b7bjNi62KfZhVwiIC8+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLnZhbHVlXCIgcGxhY2Vob2xkZXI9XCLYqti52K/Yp9ivINit2K/Yp9mC2YQg2qnYp9ix2Kfaqdiq2LFcIiAvPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9tYXQtZXhwYW5zaW9uLXBhbmVsPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdHdpZHRoID0gWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCBdO1xyXG5cdG9wdGlvbnMgPSBuZXcgRm9ybUFycmF5KFtcclxuXHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRrZXk6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHR2YWx1ZTogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdH0pXHJcblx0XSk7XHJcblx0dGFibGVPcHRpb25zID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRkYXRhRW5kcG9pbnQ6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdH0pO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Y2hhbmdlZCgpIHtcclxuXHRcdGlmIChbIHRoaXMuc2NoZW1hLm5hbWUsIHRoaXMuc2NoZW1hLnRpdGxlLCB0aGlzLnNjaGVtYS5pbnB1dFR5cGUgXS5zb21lKGl0ZW0gPT4gIWl0ZW0pKSByZXR1cm4gdHJ1ZTtcclxuXHRcdGlmICh0aGlzLnNjaGVtYS5pbnB1dFR5cGUgPT0gXCJ0YWJsZVwiKSB7XHJcblx0XHRcdHRoaXMuc2NoZW1hLm9wdGlvbnMgPSB0aGlzLnRhYmxlT3B0aW9ucy52YWx1ZTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zY2hlbWEuaW5wdXRUeXBlID09IFwic2VsZWN0XCIpIHtcclxuXHRcdFx0dGhpcy5zY2hlbWEub3B0aW9ucyA9IHRoaXMub3B0aW9ucy52YWx1ZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KCk7XHJcblx0fVxyXG5cclxuXHRhZGRPcHRpb24oKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMucHVzaChcclxuXHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0a2V5OiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHR2YWx1ZTogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdHJlbW92ZU9wdGlvbihpKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHMuc3BsaWNlKGksIDEpO1xyXG5cdH1cclxuXHRpbnNlcnRPcHRpb25zKCkge1xyXG5cdFx0dGhpcy5zY2hlbWEub3B0aW9ucyA9IHRoaXMub3B0aW9ucy52YWx1ZTtcclxuXHR9XHJcbn1cclxuIl19
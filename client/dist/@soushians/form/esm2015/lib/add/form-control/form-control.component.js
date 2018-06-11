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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9hZGQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQTJGM0MsTUFBTTtJQWVMO3VCQWJvQixJQUFJLFlBQVksRUFBRTtzQkFDbkIsSUFBSSxZQUFZLEVBQUU7cUJBRTdCLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFFO3VCQUMvQixJQUFJLFNBQVMsQ0FBQztZQUN2QixJQUFJLFNBQVMsQ0FBQztnQkFDYixHQUFHLEVBQUUsSUFBSSxXQUFXLEVBQUU7Z0JBQ3RCLEtBQUssRUFBRSxJQUFJLFdBQVcsRUFBRTthQUN4QixDQUFDO1NBQ0YsQ0FBQzs0QkFDYSxJQUFJLFNBQVMsQ0FBQztZQUM1QixZQUFZLEVBQUUsSUFBSSxXQUFXLENBQUMsd0RBQXdELENBQUM7U0FDdkYsQ0FBQztLQUNjOzs7O0lBRWhCLE9BQU87UUFDTixFQUFFLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDcEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztTQUM5QztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDaEIsSUFBSSxTQUFTLENBQUM7WUFDYixHQUFHLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDdEIsS0FBSyxFQUFFLElBQUksV0FBVyxFQUFFO1NBQ3hCLENBQUMsQ0FDRixDQUFDO0tBQ0Y7Ozs7O0lBQ0QsWUFBWSxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ25DOzs7O0lBQ0QsYUFBYTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0tBQ3pDOzs7WUFqSUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFxRmM7YUFDeEI7Ozs7O3FCQUVDLEtBQUs7c0JBQ0wsTUFBTTtxQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1mb3JtLWNvbnRyb2xcIixcclxuXHR0ZW1wbGF0ZTogYCAgPG1hdC1leHBhbnNpb24tcGFuZWw+XHJcbiAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlbGV0ZS5lbWl0KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCIgaWNvbi1idXR0b25cIj5kZWxldGVfZm9yZXZlcjwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7e3NjaGVtYS5uYW1lfX1cclxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XHJcbiAgICA8L21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLm5hbWVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICBcclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS50aXRsZVwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgXHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInNjaGVtYS5pbnB1dFR5cGVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiSW5wdXQgVHlwZVwiPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0YWJsZVwiPnRhYmxlPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5zZWxlY3Q8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRleHRcIj50ZXh0PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJudW1iZXJcIj5udW1iZXI8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImVtYWlsXCI+ZW1haWw8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNvbG9yXCI+Y29sb3I8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+cmFkaW88L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImNoZWNrYm94XCI+Y2hlY2tib3g8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLnZhbHVlXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIlZhbHVlXCIvPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICBcclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInNjaGVtYS53aWR0aFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJ3aWR0aFwiPlxyXG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB3aWR0aFwiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgIDxkaXYgKm5nSWY9XCJzY2hlbWEuaW5wdXRUeXBlPT0ndGFibGUnXCIgW2Zvcm1Hcm91cF09XCJ0YWJsZU9wdGlvbnNcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJkYXRhRW5kcG9pbnRcIiBwbGFjZWhvbGRlcj1cImRhdGFFbmRwb2ludFwiLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgKm5nSWY9XCJzY2hlbWEuaW5wdXRUeXBlPT0nc2VsZWN0J1wiPlxyXG4gICAgICAgIFtvcHRpb25zXVxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZE9wdGlvbigpXCI+KzwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImluc2VydE9wdGlvbnMoKVwiPmluc2VydDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zLmNvbnRyb2xzO2luZGV4IGFzIGlcIj5cclxuICAgICAgICAgIHt7aX19XHJcbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwib3B0aW9ucy5jb250cm9sc1tpXVwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwia2V5XCIgcGxhY2Vob2xkZXI9XCJrZXlcIi8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJ2YWx1ZVwiIHBsYWNlaG9sZGVyPVwidmFsdWVcIi8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiAgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLnJlcXVpcmVkLmFjdGl2ZVwiPtin2KzYqNin2LHbjDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IucmVxdWlyZWQubWVzc2FnZVwiICBwbGFjZWhvbGRlcj1cItm+24zYutin2YVcIi8+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiICBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IuZW1haWwuYWN0aXZlXCI+2KfbjNmF24zZhDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IuZW1haWwubWVzc2FnZVwiICBwbGFjZWhvbGRlcj1cItm+24zYutin2YVcIi8+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiAgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLm1pbmxlbmd0aC5hY3RpdmVcIj7Yrdiv2KfZgtmEINiq2LnYr9in2K8g2qnYp9ix2Kfaqdiq2LE8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlXCIgIHBsYWNlaG9sZGVyPVwi2b7bjNi62KfZhVwiLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGgudmFsdWVcIiAgcGxhY2Vob2xkZXI9XCLYqti52K/Yp9ivINit2K/Yp9mC2YQg2qnYp9ix2Kfaqdiq2LFcIi8+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgICBcclxuICA8L21hdC1leHBhbnNpb24tcGFuZWw+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0d2lkdGggPSBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwIF07XHJcblx0b3B0aW9ucyA9IG5ldyBGb3JtQXJyYXkoW1xyXG5cdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGtleTogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdHZhbHVlOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0fSlcclxuXHRdKTtcclxuXHR0YWJsZU9wdGlvbnMgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGRhdGFFbmRwb2ludDogbmV3IEZvcm1Db250cm9sKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9mYWtlL3BhY2tnZUNvbXBhcmVTaW1wbGVMaXN0XCIpXHJcblx0fSk7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjaGFuZ2VkKCkge1xyXG5cdFx0aWYgKFsgdGhpcy5zY2hlbWEubmFtZSwgdGhpcy5zY2hlbWEudGl0bGUsIHRoaXMuc2NoZW1hLmlucHV0VHlwZSBdLnNvbWUoaXRlbSA9PiAhaXRlbSkpIHJldHVybiB0cnVlO1xyXG5cdFx0aWYgKHRoaXMuc2NoZW1hLmlucHV0VHlwZSA9PSBcInRhYmxlXCIpIHtcclxuXHRcdFx0dGhpcy5zY2hlbWEub3B0aW9ucyA9IHRoaXMudGFibGVPcHRpb25zLnZhbHVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjaGVtYS5pbnB1dFR5cGUgPT0gXCJzZWxlY3RcIikge1xyXG5cdFx0XHR0aGlzLnNjaGVtYS5vcHRpb25zID0gdGhpcy5vcHRpb25zLnZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jaGFuZ2VzLmVtaXQoKTtcclxuXHR9XHJcblxyXG5cdGFkZE9wdGlvbigpIHtcclxuXHRcdHRoaXMub3B0aW9ucy5wdXNoKFxyXG5cdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRrZXk6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdHZhbHVlOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0cmVtb3ZlT3B0aW9uKGkpIHtcclxuXHRcdHRoaXMub3B0aW9ucy5jb250cm9scy5zcGxpY2UoaSwgMSk7XHJcblx0fVxyXG5cdGluc2VydE9wdGlvbnMoKSB7XHJcblx0XHR0aGlzLnNjaGVtYS5vcHRpb25zID0gdGhpcy5vcHRpb25zLnZhbHVlO1xyXG5cdH1cclxufVxyXG4iXX0=
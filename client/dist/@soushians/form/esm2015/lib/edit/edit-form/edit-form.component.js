/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { AddFormComponent } from "../../add/add-form";
export class EditFormComponent extends AddFormComponent {
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
function EditFormComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormComponent.prototype.schema;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9lZGl0L2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFxRHRELE1BQU0sd0JBQXlCLFNBQVEsZ0JBQWdCOzs7O0lBRXRELElBQUk7UUFDSCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hEOzs7WUF4REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BK0NKO2FBQ047OztxQkFFQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEFkZEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYWRkL2FkZC1mb3JtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJlZGl0LWZvcm1cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiAqbmdJZj1cInNjaGVtYVwiPlxyXG4gIDxkaXYgW2Z4RmxleF09XCI1MFwiICpuZ0lmPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPtin24zYrNin2K8g2YHYsdmFINis2K/bjNivPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cItmG2KfZhSDZgdix2YVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtR3JvdXAoc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gZ3JvdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUFycmF5KHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGFycmF5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Db250cm9sKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L21hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJzY2hlbWEuZm9ybT8udHlwZVwiPlxyXG4gICAgICAgICAgICA8YXBwLWZvcm0tZ3JvdXAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIiBbc2NoZW1hXT1cInNjaGVtYS5mb3JtXCIgbm9IZWFkZXI9XCJ0cnVlXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1ncm91cD5cclxuICAgICAgICAgICAgPGFwcC1mb3JtLWFycmF5ICpuZ1N3aXRjaENhc2U9XCInYXJyYXknXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tYXJyYXk+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8IS0tIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIiRhbnkoZm9ybSkuZ2VuZXJhdGUoc2NoZW1hKVwiPtin24zYrNin2K8g2YHYsdmFPC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZW1pdCgpXCIgdHlwZT1cInN1Ym1pdFwiPtir2KjYqjwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuXHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLmV2ZW50cykuY29udHJvbHMuYWNjZXB0XCI+XHJcbiAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInNob3dcIj7ZhtmF2KfbjNi0INiq2KfbjNuM2K88L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLZhdiq2YYg2KrYp9uM24zYr1wiIGZvcm1Db250cm9sTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLmV2ZW50cykuY29udHJvbHMuY2FuY2VsXCI+XHJcbiAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInNob3dcIj7ZhtmF2KfbjNi0INin2YbYtdix2KfZgTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItmF2KrZhiDYp9mG2LXYsdin2YFcIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIj5cclxuICAgIDxuZ3MtZm9ybS12aWV3IFtsb2NhbF09J3RydWUnIFtpZF09XCJzY2hlbWEuX2lkXCI+PC9uZ3MtZm9ybS12aWV3PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUNvbXBvbmVudCBleHRlbmRzIEFkZEZvcm1Db21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogYW55O1xyXG5cdGVtaXQoKSB7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHRyZXR1cm4gdGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcbn1cclxuIl19
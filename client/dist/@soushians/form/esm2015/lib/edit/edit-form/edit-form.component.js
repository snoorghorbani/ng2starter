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
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px" class="main-container">

  <div class="content-action">
    <mat-card fxLayout="column" fxLayoutGap="10px" fxLayoutAlign="start" class="with-sticky-action">
      <div fxLayout="row wrap" *ngIf="schema" fxFlex="100" fxLayoutAlign="start center" fxLayoutAlign.lt-md="center">
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
        <div fxFlex.gt-md="50" fxFlex.lt-md="100" fxLayoutAlign="center center">
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
function EditFormComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormComponent.prototype.schema;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9lZGl0L2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFrRXRELE1BQU0sd0JBQXlCLFNBQVEsZ0JBQWdCOzs7O0lBRW5ELElBQUk7UUFDQSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25EOzs7WUFyRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMkRQO2dCQUNILE1BQU0sRUFBRSxDQUFDLCtDQUErQyxDQUFDO2FBQzVEOzs7cUJBRUksS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBBZGRGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FkZC9hZGQtZm9ybVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJlZGl0LWZvcm1cIixcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0XCIgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgKm5nSWY9XCJzY2hlbWFcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCIgZnhMYXlvdXRBbGlnbi5sdC1tZD1cImNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4Lmd0LW1kPVwiNTBcIiBmeEZsZXgubHQtbWQ9XCIxMDBcIiAqbmdJZj1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgICAgICAgIDxtYXQtY2FyZC10aXRsZT7Yp9uM2KzYp9ivINmB2LHZhSDYrNiv24zYrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCLZhtin2YUg2YHYsdmFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1BcnJheShzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBhcnJheTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQ29udHJvbChzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBjb250cm9sPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJzY2hlbWEuZm9ybT8udHlwZVwiIGNsYXNzPVwic2NoZW1hLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPGFwcC1mb3JtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIG5vSGVhZGVyPVwidHJ1ZVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwic2NoZW1hLmZvcm1cIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25zXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5hY2NlcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInNob3dcIj7ZhtmF2KfbjNi0INiq2KfbjNuM2K88L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItmF2KrZhiDYqtin24zbjNivXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5ldmVudHMpLmNvbnRyb2xzLmNhbmNlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPtmG2YXYp9uM2LQg2KfZhti12LHYp9mBPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLZhdiq2YYg2KfZhti12LHYp9mBXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIiRhbnkoZm9ybSkuZ2VuZXJhdGUoc2NoZW1hKVwiPtin24zYrNin2K8g2YHYsdmFPC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJlbWl0KClcIiB0eXBlPVwic3VibWl0XCI+2KvYqNiqPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcblxyXG4gICAgICAgICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGZ4RmxleC5ndC1tZD1cIjUwXCIgZnhGbGV4Lmx0LW1kPVwiMTAwXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICAgIDxuZ3MtZm9ybS12aWV3IFtsb2NhbF09J3RydWUnIFtpZF09XCIgc2NoZW1hLl9pZFwiPlxyXG4gICAgICAgICAgPC9uZ3MtZm9ybS12aWV3PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gICAgc3R5bGVzOiBbYC5mb3JtLWJ1dHRvbnMsLnNjaGVtYS1mb3Jte3BhZGRpbmc6MjVweCAxMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUNvbXBvbmVudCBleHRlbmRzIEFkZEZvcm1Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgc2NoZW1hOiBhbnk7XHJcbiAgICBlbWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=
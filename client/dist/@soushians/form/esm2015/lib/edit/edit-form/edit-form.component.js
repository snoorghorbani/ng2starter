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
function EditFormComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EditFormComponent.prototype.schema;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9lZGl0L2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFrRXRELE1BQU0sd0JBQXlCLFNBQVEsZ0JBQWdCOzs7O0lBRW5ELElBQUk7UUFDQSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25EOzs7WUFyRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMkRQO2dCQUNILE1BQU0sRUFBRSxDQUFDLCtDQUErQyxDQUFDO2FBQzVEOzs7cUJBRUksS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBBZGRGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FkZC9hZGQtZm9ybVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJlZGl0LWZvcm1cIixcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0XCIgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgKm5nSWY9XCJzY2hlbWFcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dEFsaWduPVwic3RhcnQgc3RhcnRcIiBmeExheW91dEFsaWduLmx0LW1kPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBmeEZsZXguZ3QtbWQ9XCI1MFwiIGZ4RmxleC5sdC1tZD1cIjEwMFwiICpuZ0lmPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgICAgICAgPG1hdC1jYXJkLXRpdGxlPtin24zYrNin2K8g2YHYsdmFINis2K/bjNivPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cItmG2KfZhSDZgdix2YVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtR3JvdXAoc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gZ3JvdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUFycmF5KHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGFycmF5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Db250cm9sKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgW25nU3dpdGNoXT1cInNjaGVtYS5mb3JtPy50eXBlXCIgY2xhc3M9XCJzY2hlbWEtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YXBwLWZvcm0tZ3JvdXAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIiBbc2NoZW1hXT1cInNjaGVtYS5mb3JtXCIgbm9IZWFkZXI9XCJ0cnVlXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1ncm91cD5cclxuICAgICAgICAgICAgICAgICAgPGFwcC1mb3JtLWFycmF5ICpuZ1N3aXRjaENhc2U9XCInYXJyYXknXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tYXJyYXk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ1dHRvbnNcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5ldmVudHMpLmNvbnRyb2xzLmFjY2VwdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPtmG2YXYp9uM2LQg2KrYp9uM24zYrzwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YXYqtmGINiq2KfbjNuM2K9cIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBbZm9ybUdyb3VwXT1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLmV2ZW50cykuY29udHJvbHMuY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJzaG93XCI+2YbZhdin24zYtCDYp9mG2LXYsdin2YE8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItmF2KrZhiDYp9mG2LXYsdin2YFcIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiJGFueShmb3JtKS5nZW5lcmF0ZShzY2hlbWEpXCI+2KfbjNis2KfYryDZgdix2YU8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImVtaXQoKVwiIHR5cGU9XCJzdWJtaXRcIj7Yq9io2Ko8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuXHJcbiAgICAgICAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgICA8L21hdC1jYXJkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhGbGV4Lmd0LW1kPVwiNTBcIiBmeEZsZXgubHQtbWQ9XCIxMDBcIiBmeExheW91dEFsaWduPVwiY2VudGVyIHN0YXJ0XCI+XHJcbiAgICAgICAgICA8bmdzLWZvcm0tdmlldyBbbG9jYWxdPSd0cnVlJyBbaWRdPVwiIHNjaGVtYS5faWRcIj5cclxuICAgICAgICAgIDwvbmdzLWZvcm0tdmlldz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICAgIHN0eWxlczogW2AuZm9ybS1idXR0b25zLC5zY2hlbWEtZm9ybXtwYWRkaW5nOjI1cHggMTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1Db21wb25lbnQgZXh0ZW5kcyBBZGRGb3JtQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHNjaGVtYTogYW55O1xyXG4gICAgZW1pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19
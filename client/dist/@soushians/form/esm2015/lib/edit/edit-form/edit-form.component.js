/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    EditFormComponent.prototype.schema;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9lZGl0L2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFrRXRELE1BQU0sd0JBQXlCLFNBQVEsZ0JBQWdCOzs7O0lBRW5ELElBQUk7UUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkQ7OztZQXJFSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EyRFA7Z0JBQ0gsTUFBTSxFQUFFLENBQUMsK0NBQStDLENBQUM7YUFDNUQ7OztxQkFFSSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEFkZEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYWRkL2FkZC1mb3JtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImVkaXQtZm9ybVwiLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjEwcHhcIiBmeExheW91dEFsaWduPVwic3RhcnRcIiBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiAqbmdJZj1cInNjaGVtYVwiIGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBzdGFydFwiIGZ4TGF5b3V0QWxpZ24ubHQtbWQ9XCJjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleC5ndC1tZD1cIjUwXCIgZnhGbGV4Lmx0LW1kPVwiMTAwXCIgKm5nSWY9XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtY2FyZD5cclxuICAgICAgICAgICAgICA8bWF0LWNhcmQtdGl0bGU+2KfbjNis2KfYryDZgdix2YUg2KzYr9uM2K88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwi2YbYp9mFINmB2LHZhVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJidXR0b24tcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Hcm91cChzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBncm91cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQXJyYXkoc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gYXJyYXk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUNvbnRyb2woc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gY29udHJvbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwic2NoZW1hLmZvcm0/LnR5cGVcIiBjbGFzcz1cInNjaGVtYS1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhcHAtZm9ybS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFtzY2hlbWFdPVwic2NoZW1hLmZvcm1cIiBub0hlYWRlcj1cInRydWVcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8YXBwLWZvcm0tYXJyYXkgKm5nU3dpdGNoQ2FzZT1cIidhcnJheSdcIiBbc2NoZW1hXT1cInNjaGVtYS5mb3JtXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1hcnJheT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnV0dG9uc1wiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjEwcHhcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBbZm9ybUdyb3VwXT1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLmV2ZW50cykuY29udHJvbHMuYWNjZXB0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJzaG93XCI+2YbZhdin24zYtCDYqtin24zbjNivPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLZhdiq2YYg2KrYp9uM24zYr1wiIGZvcm1Db250cm9sTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5jYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInNob3dcIj7ZhtmF2KfbjNi0INin2YbYtdix2KfZgTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YXYqtmGINin2YbYtdix2KfZgVwiIGZvcm1Db250cm9sTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCIkYW55KGZvcm0pLmdlbmVyYXRlKHNjaGVtYSlcIj7Yp9uM2KzYp9ivINmB2LHZhTwvYnV0dG9uPiAtLT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZW1pdCgpXCIgdHlwZT1cInN1Ym1pdFwiPtir2KjYqjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG5cclxuICAgICAgICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXguZ3QtbWQ9XCI1MFwiIGZ4RmxleC5sdC1tZD1cIjEwMFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgc3RhcnRcIj5cclxuICAgICAgICAgIDxuZ3MtZm9ybS12aWV3IFtsb2NhbF09J3RydWUnIFtpZF09XCIgc2NoZW1hLl9pZFwiPlxyXG4gICAgICAgICAgPC9uZ3MtZm9ybS12aWV3PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gICAgc3R5bGVzOiBbYC5mb3JtLWJ1dHRvbnMsLnNjaGVtYS1mb3Jte3BhZGRpbmc6MjVweCAxMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUNvbXBvbmVudCBleHRlbmRzIEFkZEZvcm1Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgc2NoZW1hOiBhbnk7XHJcbiAgICBlbWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=
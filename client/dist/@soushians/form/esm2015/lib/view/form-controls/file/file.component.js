/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
export class FileFormInputControlComponent {
    constructor() { }
}
FileFormInputControlComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-file",
                template: `<div fxFlexFill [formGroup]="group">

  <!-- <input matInput [id]="config.name" [type]="config.inputType" [placeholder]="config.title" [formControlName]="config.name"> -->
  <input [id]="config.name" [type]="config.inputType" [placeholder]="config.title" [formControlName]="config.name">

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

</div>

<!-- 

<div [formGroup]="formGroup">
    <div class="field-wrapper">
      <div [@filedAnimation]="mode">
        <mat-form-field class="fit" [(ngClass)]="mode">
            <input matInput [matDatepicker]="_datepicker" [placeholder]="placeholder" [formControlName]="controlName">
            <mat-datepicker-toggle matSuffix [for]="_datepicker"></mat-datepicker-toggle>
            <mat-datepicker #_datepicker></mat-datepicker>
            
          <mat-icon class="tooltip md-18" *ngIf="tooltip" [matTooltip]="tooltip">help</mat-icon>
        </mat-form-field>
        <div class="value-box"> 
          <span class="name">
            {{ placeholder }} :
          </span>
          <span class="value">
            {{(DisplayValue$ | async | persianDate)}} 
          </span>
          </div>
      </div>
    </div>
</div> -->`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
];
/** @nocollapse */
FileFormInputControlComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    FileFormInputControlComponent.prototype.config;
    /** @type {?} */
    FileFormInputControlComponent.prototype.group;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvdmlldy9mb3JtLWNvbnRyb2xzL2ZpbGUvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBb0R6RCxNQUFNLE9BQU8sNkJBQTZCO0lBSXpDLGlCQUFnQjs7O1lBbkRoQixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0EwQ0E7Z0JBQ1YsTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7YUFDM0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtZmlsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXhGaWxsIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuXHJcbiAgPCEtLSA8aW5wdXQgbWF0SW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+IC0tPlxyXG4gIDxpbnB1dCBbaWRdPVwiY29uZmlnLm5hbWVcIiBbdHlwZV09XCJjb25maWcuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj5cclxuXHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZXJyb3JzPy5yZXF1aXJlZFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLnJlcXVpcmVkLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IubWlubGVuZ3RoLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDwhLS0gPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZW1haWw/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLmVtYWlsLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPiAtLT5cclxuXHJcbiAgPCEtLSA8ZGl2ICpuZ0lmPVwiZm9ybS5nZXQoY29uZmlnLm5hbWUpLmludmFsaWQgJiYgKGZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5kaXJ0eSB8fCBmb3JtLmdldChjb25maWcubmFtZSkudG91Y2hlZClcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gIDwvZGl2PiAtLT5cclxuXHJcbjwvZGl2PlxyXG5cclxuPCEtLSBcclxuXHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgW0BmaWxlZEFuaW1hdGlvbl09XCJtb2RlXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZml0XCIgWyhuZ0NsYXNzKV09XCJtb2RlXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJfZGF0ZXBpY2tlclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbE5hbWVcIj5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJfZGF0ZXBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI19kYXRlcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwidG9vbHRpcCBtZC0xOFwiICpuZ0lmPVwidG9vbHRpcFwiIFttYXRUb29sdGlwXT1cInRvb2x0aXBcIj5oZWxwPC9tYXQtaWNvbj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZS1ib3hcIj4gXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAge3sgcGxhY2Vob2xkZXIgfX0gOlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxyXG4gICAgICAgICAgICB7eyhEaXNwbGF5VmFsdWUkIHwgYXN5bmMgfCBwZXJzaWFuRGF0ZSl9fSBcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19
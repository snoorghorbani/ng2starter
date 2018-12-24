/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
export class TextComponent {
    constructor() { }
}
TextComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-text",
                template: `<mat-form-field fxFlexFill [formGroup]="group">

  <input matInput [id]="config.name" [type]="config.inputType" [placeholder]="config.title" [formControlName]="config.name">

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

</mat-form-field>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
];
/** @nocollapse */
TextComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    TextComponent.prototype.config;
    /** @type {?} */
    TextComponent.prototype.group;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvdmlldy9mb3JtLWNvbnRyb2xzL3RleHQvdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBMkJ6RCxNQUFNLE9BQU8sYUFBYTtJQUl6QixpQkFBZ0I7OztZQTFCaEIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBaUJPO2dCQUNqQixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb25maWcsIEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC10ZXh0XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbCBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcblxyXG4gIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwiY29uZmlnLm5hbWVcIiBbdHlwZV09XCJjb25maWcuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj5cclxuXHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZXJyb3JzPy5yZXF1aXJlZFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLnJlcXVpcmVkLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IubWlubGVuZ3RoLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDwhLS0gPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZW1haWw/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLmVtYWlsLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPiAtLT5cclxuXHJcbiAgPCEtLSA8ZGl2ICpuZ0lmPVwiZm9ybS5nZXQoY29uZmlnLm5hbWUpLmludmFsaWQgJiYgKGZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5kaXJ0eSB8fCBmb3JtLmdldChjb25maWcubmFtZSkudG91Y2hlZClcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gIDwvZGl2PiAtLT5cclxuXHJcbjwvbWF0LWZvcm0tZmllbGQ+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=
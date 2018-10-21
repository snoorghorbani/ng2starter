/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
export class FormListComponent {
}
FormListComponent.decorators = [
    { type: Component, args: [{
                selector: "form-list",
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px" class="main-container">

  <div class="content-action">
    <mat-card class="with-sticky-action">
      <mat-card-header>
        <mat-card-title fxLayout="row" fxLayoutGap="5px">
          <mat-icon>assignment</mat-icon>
          <span>مدیریت فرم ها</span>
        </mat-card-title>
        <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
          <span>
            شامل تمامی درخواست‌ها از قبیل دائری، جمع‌آوری و ...
          </span>
        </mat-card-subtitle>
      </mat-card-header>

      <div fxLayout="row wrap" fxLayoutGap="10px" fxLayoutAlign="start">

        <button fxFlex.lt-lg="19" fxFlex.lg="24" fxFlex.md="32" fxFlex.sm="49" fxFlex.xs="100" class='link'
          mat-raised-button [routerLink]="['edit' ,  item._id]" *ngFor="let item of (data$ | async)">
          <div fxLayout='column' fxLayoutAlign='center center'>
            <mat-icon color='primary'>settings</mat-icon>
            <h3 class='title'>{{item.name}}</h3>
          </div>
        </button>

      </div>
    </mat-card>
  </div>
</div>`,
                styles: [`button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}`]
            },] },
];
FormListComponent.propDecorators = {
    data$: [{ type: Input, args: ["data",] }]
};
function FormListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FormListComponent.prototype.data$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9saXN0L2Zvcm0tbGlzdC9mb3JtLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFzQzdDLE1BQU07OztZQWxDTCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E2Qko7Z0JBQ04sTUFBTSxFQUFFLENBQUMsdUhBQXVILENBQUM7YUFDakk7OztvQkFHQyxLQUFLLFNBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZm9ybS1saXN0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPmFzc2lnbm1lbnQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPHNwYW4+2YXYr9uM2LHbjNiqINmB2LHZhSDZh9inPC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAg2LTYp9mF2YQg2KrZhdin2YXbjCDYr9ix2K7ZiNin2LPYquKAjNmH2Kcg2KfYsiDZgtio24zZhCDYr9in2KbYsduM2Iwg2KzZhdi54oCM2KLZiNix24wg2YggLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjEwcHhcIiBmeExheW91dEFsaWduPVwic3RhcnRcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXgubHQtbGc9XCIxOVwiIGZ4RmxleC5sZz1cIjI0XCIgZnhGbGV4Lm1kPVwiMzJcIiBmeEZsZXguc209XCI0OVwiIGZ4RmxleC54cz1cIjEwMFwiIGNsYXNzPSdsaW5rJ1xyXG4gICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24gW3JvdXRlckxpbmtdPVwiWydlZGl0JyAsICBpdGVtLl9pZF1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAoZGF0YSQgfCBhc3luYylcIj5cclxuICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeSc+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9J3RpdGxlJz57e2l0ZW0ubmFtZX19PC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2BidXR0b24ubGlua3twYWRkaW5nOjI1cHggMTVweDttYXJnaW46LjUlO2JveC1zaXppbmc6Ym9yZGVyLWJveH1idXR0b24gbWF0LWljb257Zm9udC1zaXplOjM0cHg7d2lkdGg6MzRweDtoZWlnaHQ6MzRweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUxpc3RDb21wb25lbnQge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHRASW5wdXQoXCJkYXRhXCIpIGRhdGEkOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPjtcclxufVxyXG4iXX0=
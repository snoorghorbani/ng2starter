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
          <mat-icon>settings_input_component</mat-icon>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9saXN0L2Zvcm0tbGlzdC9mb3JtLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFzQzdDLE1BQU07OztZQWxDTCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E2Qko7Z0JBQ04sTUFBTSxFQUFFLENBQUMsdUhBQXVILENBQUM7YUFDakk7OztvQkFHQyxLQUFLLFNBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZm9ybS1saXN0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPnNldHRpbmdzX2lucHV0X2NvbXBvbmVudDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8c3Bhbj7Zhdiv24zYsduM2Kog2YHYsdmFINmH2Kc8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDYtNin2YXZhCDYqtmF2KfZhduMINiv2LHYrtmI2KfYs9iq4oCM2YfYpyDYp9iyINmC2KjbjNmEINiv2KfYptix24zYjCDYrNmF2LnigIzYotmI2LHbjCDZiCAuLi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXN1YnRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuXHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydFwiPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleC5sdC1sZz1cIjE5XCIgZnhGbGV4LmxnPVwiMjRcIiBmeEZsZXgubWQ9XCIzMlwiIGZ4RmxleC5zbT1cIjQ5XCIgZnhGbGV4LnhzPVwiMTAwXCIgY2xhc3M9J2xpbmsnXHJcbiAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIGl0ZW0uX2lkXVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIChkYXRhJCB8IGFzeW5jKVwiPlxyXG4gICAgICAgICAgPGRpdiBmeExheW91dD0nY29sdW1uJyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5Jz5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGl0bGUnPnt7aXRlbS5uYW1lfX08L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYGJ1dHRvbi5saW5re3BhZGRpbmc6MjVweCAxNXB4O21hcmdpbjouNSU7Ym94LXNpemluZzpib3JkZXItYm94fWJ1dHRvbiBtYXQtaWNvbntmb250LXNpemU6MzRweDt3aWR0aDozNHB4O2hlaWdodDozNHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtTGlzdENvbXBvbmVudCB7XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG5cdEBJbnB1dChcImRhdGFcIikgZGF0YSQ6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsW10+O1xyXG59XHJcbiJdfQ==
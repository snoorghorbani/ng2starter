/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getConfigs } from "../../reducers";
export class ConfigsComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.configs = this.store.select(getConfigs);
    }
}
ConfigsComponent.decorators = [
    { type: Component, args: [{
                selector: "configs",
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px" class="main-container">

  <div class="content-action">
    <mat-card class="with-sticky-action">
      <mat-card-header>
        <mat-card-title fxLayout="row" fxLayoutGap="5px">
          <mat-icon>settings_input_component</mat-icon>
          <span>تنظیمات سامانه و ماژول ها</span>
        </mat-card-title>
        <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
          <span>
            شامل تمامی درخواست‌ها از قبیل دائری، جمع‌آوری و ...
          </span>
        </mat-card-subtitle>
      </mat-card-header>

      <div fxLayout="row wrap" fxLayoutGap="10px" fxLayoutAlign="start">

        <button fxFlex.lt-lg="18" fxFlex.lg="23.5" fxFlex.md="31" fxFlex.sm="48" fxFlex.xs="100" class='link'
          mat-raised-button [routerLink]="['edit' ,  config.Name]" *ngFor="let config of (configs | async)">
          <div fxLayout='column' fxLayoutAlign='center center'>
            <mat-icon color='primary'>settings</mat-icon>
            <h3 class='title'>{{config.Name}}</h3>
          </div>
        </button>

      </div>

    </mat-card>
  </div>
</div>`,
                styles: [`:host{width:100%}.config-box{margin:15px}button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}`]
            },] },
];
/** @nocollapse */
ConfigsComponent.ctorParameters = () => [
    { type: Store }
];
function ConfigsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigsComponent.prototype.configs;
    /** @type {?} */
    ConfigsComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZ3MvY29uZmlncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwQyxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGdCQUFnQixDQUFDO0FBcUMxRCxNQUFNOzs7O0lBRUwsWUFBb0IsS0FBMEI7UUFBMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUM3Qzs7O1lBdkNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E4Qko7Z0JBQ04sTUFBTSxFQUFFLENBQUMsZ0tBQWdLLENBQUM7YUFDMUs7Ozs7WUF2Q1EsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdzLCBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZ3NcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1hY3Rpb25cIj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+c2V0dGluZ3NfaW5wdXRfY29tcG9uZW50PC9tYXQtaWNvbj5cclxuICAgICAgICAgIDxzcGFuPtiq2YbYuNuM2YXYp9iqINiz2KfZhdin2YbZhyDZiCDZhdin2pjZiNmEINmH2Kc8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDYtNin2YXZhCDYqtmF2KfZhduMINiv2LHYrtmI2KfYs9iq4oCM2YfYpyDYp9iyINmC2KjbjNmEINiv2KfYptix24zYjCDYrNmF2LnigIzYotmI2LHbjCDZiCAuLi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXN1YnRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuXHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydFwiPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleC5sdC1sZz1cIjE4XCIgZnhGbGV4LmxnPVwiMjMuNVwiIGZ4RmxleC5tZD1cIjMxXCIgZnhGbGV4LnNtPVwiNDhcIiBmeEZsZXgueHM9XCIxMDBcIiBjbGFzcz0nbGluaydcclxuICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnZWRpdCcgLCAgY29uZmlnLk5hbWVdXCIgKm5nRm9yPVwibGV0IGNvbmZpZyBvZiAoY29uZmlncyB8IGFzeW5jKVwiPlxyXG4gICAgICAgICAgPGRpdiBmeExheW91dD0nY29sdW1uJyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5Jz5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGl0bGUnPnt7Y29uZmlnLk5hbWV9fTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmNvbmZpZy1ib3h7bWFyZ2luOjE1cHh9YnV0dG9uLmxpbmt7cGFkZGluZzoyNXB4IDE1cHg7bWFyZ2luOi41JTtib3gtc2l6aW5nOmJvcmRlci1ib3h9YnV0dG9uIG1hdC1pY29ue2ZvbnQtc2l6ZTozNHB4O3dpZHRoOjM0cHg7aGVpZ2h0OjM0cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3NDb21wb25lbnQge1xyXG5cdGNvbmZpZ3M6IE9ic2VydmFibGU8Q29uZmlnTW9kZWw8YW55PltdPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3MgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRDb25maWdzKTtcclxuXHR9XHJcbn1cclxuIl19
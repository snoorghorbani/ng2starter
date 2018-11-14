/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GetPagesStartAction } from "../services/api/get-pages/get-pages.actions";
import { DeletePageStartAction } from "../services/api";
export class PagesManagementComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.pages$ = this.store.select((state) => state.pages.db.data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.dispatch(new GetPagesStartAction());
    }
    /**
     * view methods
     * @param {?} page
     * @return {?}
     */
    delete(page) {
        this.store.dispatch(new DeletePageStartAction(page._id));
    }
}
PagesManagementComponent.decorators = [
    { type: Component, args: [{
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px" class="main-container">

  <div class="content-action">
    <mat-card class="with-sticky-action">
      <mat-card-header>
        <mat-card-title fxLayout="row" fxLayoutGap="5px">
          <mat-icon>list_alt</mat-icon>
          <span>مدیریت صغحات</span>
        </mat-card-title>
        <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
          <span>
            در این قسمت می‌توانید صغحات با گریدهای دلخواه خود را ایجاد نمایید ...
          </span>
        </mat-card-subtitle>
      </mat-card-header>

      <div fxLayout="column" fxLayoutAlign="center" fxLayoutGap="25px">
        <div fxFlex="100" fxLayout="row wrap" fxLayoutAlign="start center">
          <mat-card fxFlex.gt-lg="24" fxFlex.lg="32" fxFlex.md="48" fxFlex.sm="100" fxFlex.xs="100" class="link" *ngFor="let item of (pages$ | async)"
            fxFlex="32" fxLayout="row" fxLayoutAlign="center center">
            <div fxFlex fxLayoutAlign="start center">
              <h3> {{item.name}}</h3>
            </div>
            <div fxFlex fxLayoutAlign="center center">
              {{item.type}}
            </div>
            <div fxLayout="row">
              <div fxFlex="nogrow">
                <a mat-icon-button [routerLink]="['../upsert' , item.name]">
                  <mat-icon aria-label="edit page">edit</mat-icon>
                </a>
              </div>

              <div fxFlex="nogrow">
                <button mat-icon-button (click)="delete(item)">
                  <mat-icon aria-label="delete page">delete</mat-icon>
                </button>
              </div>
              <div fxFlex="nogrow">
                <a mat-icon-button [routerLink]="['/page' , item.name]">
                  <mat-icon aria-label="edit page">remove_red_eye</mat-icon>
                </a>
              </div>
            </div>
          </mat-card>
        </div>
      </div>
    </mat-card>
    <div fxLayout="column" class="sticky-action">
      <a color="primary" mat-mini-fab routerLink="../upsert">
        <mat-icon>add</mat-icon>
      </a>
    </div>
  </div>
</div>`,
                styles: [`mat-card.link{padding:25px 15px;margin:.5%;box-sizing:border-box}`]
            },] },
];
/** @nocollapse */
PagesManagementComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    PagesManagementComponent.prototype.pages$;
    /** @type {?} */
    PagesManagementComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBNER4RCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBRXBDLFlBQW1CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hFOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0tBQy9DOzs7Ozs7SUFJRCxNQUFNLENBQUMsSUFBZTtRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOzs7WUF2RUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bc0RKO2dCQUNOLE1BQU0sRUFBRSxDQUFDLG1FQUFtRSxDQUFDO2FBQzdFOzs7O1lBaEVRLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdldFBhZ2VzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBEZWxldGVQYWdlU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1hY3Rpb25cIj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+bGlzdF9hbHQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPHNwYW4+2YXYr9uM2LHbjNiqINi12LrYrdin2Ko8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDYr9ixINin24zZhiDZgtiz2YXYqiDZhduM4oCM2KrZiNin2YbbjNivINi12LrYrdin2Kog2KjYpyDar9ix24zYr9mH2KfbjCDYr9mE2K7ZiNin2Ycg2K7ZiNivINix2Kcg2KfbjNis2KfYryDZhtmF2KfbjNuM2K8gLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cclxuICAgICAgICAgIDxtYXQtY2FyZCBmeEZsZXguZ3QtbGc9XCIyNFwiIGZ4RmxleC5sZz1cIjMyXCIgZnhGbGV4Lm1kPVwiNDhcIiBmeEZsZXguc209XCIxMDBcIiBmeEZsZXgueHM9XCIxMDBcIiBjbGFzcz1cImxpbmtcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAocGFnZXMkIHwgYXN5bmMpXCJcclxuICAgICAgICAgICAgZnhGbGV4PVwiMzJcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+IHt7aXRlbS5uYW1lfX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxhIG1hdC1pY29uLWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy4uL3Vwc2VydCcgLCBpdGVtLm5hbWVdXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCBwYWdlXCI+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZGVsZXRlIHBhZ2VcIj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxhIG1hdC1pY29uLWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy9wYWdlJyAsIGl0ZW0ubmFtZV1cIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHBhZ2VcIj5yZW1vdmVfcmVkX2V5ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGNsYXNzPVwic3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICA8YSBjb2xvcj1cInByaW1hcnlcIiBtYXQtbWluaS1mYWIgcm91dGVyTGluaz1cIi4uL3Vwc2VydFwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgbWF0LWNhcmQubGlua3twYWRkaW5nOjI1cHggMTVweDttYXJnaW46LjUlO2JveC1zaXppbmc6Ym9yZGVyLWJveH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwYWdlcyQ6IE9ic2VydmFibGU8UGFnZU1vZGVsW10+O1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLnBhZ2VzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUucGFnZXMuZGIuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UGFnZXNTdGFydEFjdGlvbigpKTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogdmlldyBtZXRob2RzXHJcblx0ICovXHJcblx0ZGVsZXRlKHBhZ2U6IFBhZ2VNb2RlbCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlUGFnZVN0YXJ0QWN0aW9uKHBhZ2UuX2lkKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
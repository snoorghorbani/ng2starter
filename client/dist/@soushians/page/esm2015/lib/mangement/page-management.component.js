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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBNER4RCxNQUFNOzs7O0lBRUwsWUFBbUIsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEU7Ozs7SUFDRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7S0FDL0M7Ozs7OztJQUlELE1BQU0sQ0FBQyxJQUFlO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDekQ7OztZQXZFRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FzREo7Z0JBQ04sTUFBTSxFQUFFLENBQUMsbUVBQW1FLENBQUM7YUFDN0U7Ozs7WUFoRVEsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2VzL2dldC1wYWdlcy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERlbGV0ZVBhZ2VTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwid2l0aC1zdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5saXN0X2FsdDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8c3Bhbj7Zhdiv24zYsduM2Kog2LXYutit2KfYqjwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgINiv2LEg2KfbjNmGINmC2LPZhdiqINmF24zigIzYqtmI2KfZhtuM2K8g2LXYutit2KfYqiDYqNinINqv2LHbjNiv2YfYp9uMINiv2YTYrtmI2KfZhyDYrtmI2K8g2LHYpyDYp9uM2KzYp9ivINmG2YXYp9uM24zYryAuLi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXN1YnRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuXHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gICAgICAgICAgPG1hdC1jYXJkIGZ4RmxleC5ndC1sZz1cIjI0XCIgZnhGbGV4LmxnPVwiMzJcIiBmeEZsZXgubWQ9XCI0OFwiIGZ4RmxleC5zbT1cIjEwMFwiIGZ4RmxleC54cz1cIjEwMFwiIGNsYXNzPVwibGlua1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mIChwYWdlcyQgfCBhc3luYylcIlxyXG4gICAgICAgICAgICBmeEZsZXg9XCIzMlwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz4ge3tpdGVtLm5hbWV9fTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleCBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIHt7aXRlbS50eXBlfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgbWF0LWljb24tYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnLi4vdXBzZXJ0JyAsIGl0ZW0ubmFtZV1cIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHBhZ2VcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGUoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJkZWxldGUgcGFnZVwiPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgbWF0LWljb24tYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnL3BhZ2UnICwgaXRlbS5uYW1lXVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgcGFnZVwiPnJlbW92ZV9yZWRfZXllPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L21hdC1jYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgY2xhc3M9XCJzdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxhIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0XCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2BtYXQtY2FyZC5saW5re3BhZGRpbmc6MjVweCAxNXB4O21hcmdpbjouNSU7Ym94LXNpemluZzpib3JkZXItYm94fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHBhZ2VzJDogT2JzZXJ2YWJsZTxQYWdlTW9kZWxbXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMucGFnZXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5wYWdlcy5kYi5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQYWdlc1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiB2aWV3IG1ldGhvZHNcclxuXHQgKi9cclxuXHRkZWxldGUocGFnZTogUGFnZU1vZGVsKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVQYWdlU3RhcnRBY3Rpb24ocGFnZS5faWQpKTtcclxuXHR9XHJcbn1cclxuIl19
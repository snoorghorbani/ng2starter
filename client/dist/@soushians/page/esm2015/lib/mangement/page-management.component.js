/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px">
  <div fXFlex="30" fxLayout="row wrap">
    <button fxFlex="100" color="primary" mat-mini-fab routerLink="../upsert">
      <mat-icon>add</mat-icon>
    </button>
  </div>
  <div fxFlex="70" fxLayout="row wrap" fxLayoutGap="25px">
    <mat-card class="cards-item" *ngFor="let item of (pages$ | async)" fxFlex="33" fxLayout="row">
      <div fxFlex="nogrow">
        <button mat-icon-button (click)="delete(item)">
          <mat-icon aria-label="delete page">delete</mat-icon>
        </button>
      </div>
      <div fxFlex="nogrow">
        <a [routerLink]="['../upsert' , item.name]">
          <mat-icon aria-label="edit page">edit</mat-icon>
        </a>
      </div>
      <div fxFlex="nogrow">
        <a [routerLink]="['/page' , item.name]">
          <mat-icon aria-label="edit page">remove_red_eye</mat-icon>
        </a>
      </div>
      <div fxFlex>
        {{item.name}}
      </div>
      <div fxFlex>
        {{item.type}}
      </div>
    </mat-card>
  </div>
</div>`
            },] },
];
/** @nocollapse */
PagesManagementComponent.ctorParameters = () => [
    { type: Store }
];
function PagesManagementComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    PagesManagementComponent.prototype.pages$;
    /** @type {?} */
    PagesManagementComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBb0N4RCxNQUFNOzs7O0lBRUwsWUFBbUIsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEU7Ozs7SUFDRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7S0FDL0M7Ozs7OztJQUlELE1BQU0sQ0FBQyxJQUFlO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDekQ7OztZQS9DRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BK0JKO2FBQ047Ozs7WUF4Q1EsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2VzL2dldC1wYWdlcy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERlbGV0ZVBhZ2VTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICA8ZGl2IGZYRmxleD1cIjMwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIxMDBcIiBjb2xvcj1cInByaW1hcnlcIiBtYXQtbWluaS1mYWIgcm91dGVyTGluaz1cIi4uL3Vwc2VydFwiPlxyXG4gICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhGbGV4PVwiNzBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkcy1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHBhZ2VzJCB8IGFzeW5jKVwiIGZ4RmxleD1cIjMzXCIgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKGl0ZW0pXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImRlbGV0ZSBwYWdlXCI+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi91cHNlcnQnICwgaXRlbS5uYW1lXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHBhZ2VcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3BhZ2UnICwgaXRlbS5uYW1lXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHBhZ2VcIj5yZW1vdmVfcmVkX2V5ZTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBmeEZsZXg+XHJcbiAgICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBmeEZsZXg+XHJcbiAgICAgICAge3tpdGVtLnR5cGV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VzTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cGFnZXMkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5wYWdlcyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLnBhZ2VzLmRiLmRhdGEpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFBhZ2VzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdGRlbGV0ZShwYWdlOiBQYWdlTW9kZWwpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVBhZ2VTdGFydEFjdGlvbihwYWdlLl9pZCkpO1xyXG5cdH1cclxufVxyXG4iXX0=
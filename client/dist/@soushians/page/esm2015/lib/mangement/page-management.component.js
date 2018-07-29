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
                template: `<div fxLayout="column" fxLayoutAlign="center" fxLayoutGap="25px">
  <div fXFlex fxLayout="row">
    <button  color="primary" mat-mini-fab routerLink="../upsert">
      <mat-icon>add</mat-icon>
    </button>
  </div>
  <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="20px">
    <mat-card class="cards-item" *ngFor="let item of (pages$ | async)" fxFlex="32" fxLayout="row">

      <div fxFlex fxLayoutAlign="start center">
        {{item.name}}
      </div>
      <div fxFlex fxLayoutAlign="center center">
        {{item.type}}
      </div>
      <div fxLayout="row" >
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBd0N4RCxNQUFNOzs7O0lBRUwsWUFBbUIsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEU7Ozs7SUFDRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7S0FDL0M7Ozs7OztJQUlELE1BQU0sQ0FBQyxJQUFlO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDekQ7OztZQW5ERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW1DSjthQUNOOzs7O1lBNUNRLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdldFBhZ2VzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBEZWxldGVQYWdlU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgPGRpdiBmWEZsZXggZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgIDxidXR0b24gIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0XCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyMHB4XCI+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkcy1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHBhZ2VzJCB8IGFzeW5jKVwiIGZ4RmxleD1cIjMyXCIgZnhMYXlvdXQ9XCJyb3dcIj5cclxuXHJcbiAgICAgIDxkaXYgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4RmxleCBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICAgIHt7aXRlbS50eXBlfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiA+XHJcbiAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgIDxhIG1hdC1pY29uLWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy4uL3Vwc2VydCcgLCBpdGVtLm5hbWVdXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgcGFnZVwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlbGV0ZShpdGVtKVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImRlbGV0ZSBwYWdlXCI+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgIDxhIG1hdC1pY29uLWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy9wYWdlJyAsIGl0ZW0ubmFtZV1cIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHBhZ2VcIj5yZW1vdmVfcmVkX2V5ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZXNNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwYWdlcyQ6IE9ic2VydmFibGU8UGFnZU1vZGVsW10+O1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLnBhZ2VzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUucGFnZXMuZGIuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UGFnZXNTdGFydEFjdGlvbigpKTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogdmlldyBtZXRob2RzXHJcblx0ICovXHJcblx0ZGVsZXRlKHBhZ2U6IFBhZ2VNb2RlbCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlUGFnZVN0YXJ0QWN0aW9uKHBhZ2UuX2lkKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
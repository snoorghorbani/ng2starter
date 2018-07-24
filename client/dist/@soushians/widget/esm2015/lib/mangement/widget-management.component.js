/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GetWidgetsStartAction } from "../services/api/get-widgets/get-widgets.actions";
export class WidgetsManagementComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.widgets$ = this.store.select((state) => state.widgets.db.data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.dispatch(new GetWidgetsStartAction());
    }
}
WidgetsManagementComponent.decorators = [
    { type: Component, args: [{
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px">
  <div fXFlex="30" fxLayout="row wrap">
    <button fxFlex="100" color="primary" mat-raised-button routerLink="../upsert/article">
      Add Article
    </button>
    <button fxFlex="100" color="primary" mat-raised-button routerLink="../upsert/links">
      Add Links
    </button>
  </div>
  <div fxFlex="70" fxLayout="row wrap" fxLayoutGap="25px">
    <mat-card class="cards-item" *ngFor="let item of (widgets$ | async)" fxFlex="33" fxLayout="row">
      <div fxFlex>
        <a [routerLink]="['../upsert' ,  item.type,  item._id]">
          <mat-icon aria-label="edit widget">edit</mat-icon>
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
WidgetsManagementComponent.ctorParameters = () => [
    { type: Store }
];
function WidgetsManagementComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    WidgetsManagementComponent.prototype.widgets$;
    /** @type {?} */
    WidgetsManagementComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBNkJ4RixNQUFNOzs7O0lBRUwsWUFBbUIsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEU7Ozs7SUFDRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7S0FDakQ7OztZQWxDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F3Qko7YUFDTjs7OztZQWhDUSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICA8ZGl2IGZYRmxleD1cIjMwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIxMDBcIiBjb2xvcj1cInByaW1hcnlcIiBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2FydGljbGVcIj5cclxuICAgICAgQWRkIEFydGljbGVcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIxMDBcIiBjb2xvcj1cInByaW1hcnlcIiBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2xpbmtzXCI+XHJcbiAgICAgIEFkZCBMaW5rc1xyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeEZsZXg9XCI3MFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cImNhcmRzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIiBmeEZsZXg9XCIzM1wiIGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICAgIDxkaXYgZnhGbGV4PlxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vdXBzZXJ0JyAsICBpdGVtLnR5cGUsICBpdGVtLl9pZF1cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCB3aWRnZXRcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4RmxleD5cclxuICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iXX0=
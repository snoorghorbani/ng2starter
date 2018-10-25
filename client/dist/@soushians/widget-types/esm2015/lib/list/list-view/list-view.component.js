/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";
export class ListViewComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
}
ListViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-list-view",
                template: `<div fxLayout="column">
  <div class="actions" fxLayout="row" fxFlex fxLayoutAlign="end">
    <button fxFlex="nogrow" mat-icon-button color="primary" *ngIf="havePermission$ | async" [routerLink]="['/widget/upsert/links', (widget)?._id]">
      <mat-icon>edit</mat-icon>
    </button>
  </div>
  <div fxLayout="row" fxFlex fxLayoutAlign="end">
    <h3>
      {{widget.name}}
    </h3>
  </div>
  <mat-list fxLayout="column" fxFlex="100">
    <mat-list-item fxLayout="column" *ngFor="let item of (widget)?.Config.list" fxFlex="100">
      <mat-icon class="large-icon" mat-list-icon>account_box</mat-icon>
      <h4 mat-line> {{item.title}}</h4>
      <p mat-line> {{item.subtitle}} </p>
      <p mat-line> {{item.description}} </p>
    </mat-list-item>
  </mat-list>
</div>`,
                styles: [`:host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}.large-icon{font-size:50px!important;width:50px!important;height:50px!important;color:#999}mat-list{direction:rtl}`]
            },] },
];
/** @nocollapse */
ListViewComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    ListViewComponent.prototype.widget;
    /** @type {?} */
    ListViewComponent.prototype.havePermission$;
    /** @type {?} */
    ListViewComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUE0QnBGLE1BQU07Ozs7SUFHTCxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0tBQUs7Ozs7SUFFMUMsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUN6RTs7O1lBL0JELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQko7Z0JBQ04sTUFBTSxFQUFFLENBQUMsc1hBQXNYLENBQUM7YUFDaFk7Ozs7WUE5QlEsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBMaXN0V2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGlzdC13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlzdC12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9saW5rcycsICh3aWRnZXQpPy5faWRdXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZFwiPlxyXG4gICAgPGgzPlxyXG4gICAgICB7e3dpZGdldC5uYW1lfX1cclxuICAgIDwvaDM+XHJcbiAgPC9kaXY+XHJcbiAgPG1hdC1saXN0IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICA8bWF0LWxpc3QtaXRlbSBmeExheW91dD1cImNvbHVtblwiICpuZ0Zvcj1cImxldCBpdGVtIG9mICh3aWRnZXQpPy5Db25maWcubGlzdFwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJsYXJnZS1pY29uXCIgbWF0LWxpc3QtaWNvbj5hY2NvdW50X2JveDwvbWF0LWljb24+XHJcbiAgICAgIDxoNCBtYXQtbGluZT4ge3tpdGVtLnRpdGxlfX08L2g0PlxyXG4gICAgICA8cCBtYXQtbGluZT4ge3tpdGVtLnN1YnRpdGxlfX0gPC9wPlxyXG4gICAgICA8cCBtYXQtbGluZT4ge3tpdGVtLmRlc2NyaXB0aW9ufX0gPC9wPlxyXG4gICAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gIDwvbWF0LWxpc3Q+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlO2Rpc3BsYXk6YmxvY2t9Omhvc3Q6aG92ZXIgLmFjdGlvbnN7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZX1tYXQtbGlzdCBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5hY3Rpb25ze3RyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVufS5hY3Rpb25zIG1hdC1pY29ue2NvbG9yOiMxMjEyMTJ9aDN7cGFkZGluZy1yaWdodDoyMHB4fS5sYXJnZS1pY29ue2ZvbnQtc2l6ZTo1MHB4IWltcG9ydGFudDt3aWR0aDo1MHB4IWltcG9ydGFudDtoZWlnaHQ6NTBweCFpbXBvcnRhbnQ7Y29sb3I6Izk5OX1tYXQtbGlzdHtkaXJlY3Rpb246cnRsfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8TGlzdFdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxMaXN0V2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
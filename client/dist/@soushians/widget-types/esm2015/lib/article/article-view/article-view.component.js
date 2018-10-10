/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";
export class ArticleViewComponent {
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
ArticleViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-article-view",
                template: `<div fxLayout="row" fxFlex="100" fxLayoutAlign="center start">
  <button mat-mini-fab color="accent" *ngIf="havePermission$ | async" [routerLink]="['/widget/upsert/article', (widget)?._id]">
    <mat-icon>edit</mat-icon>
  </button>

  <div fxFlex="90" [froalaView]="(widget)?.Config.content" align="right" class="article"></div>
</div>`,
                styles: [`:host{position:relative;display:block}.mat-mini-fab{position:absolute;top:-20px;right:-20px}.article{direction:rtl;text-align:right;padding-top:25px}`]
            },] },
];
/** @nocollapse */
ArticleViewComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    ArticleViewComponent.prototype.widget;
    /** @type {?} */
    ArticleViewComponent.prototype.havePermission$;
    /** @type {?} */
    ArticleViewComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2FydGljbGUvYXJ0aWNsZS12aWV3L2FydGljbGUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFlcEYsTUFBTTs7OztJQUlMLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7S0FBSTs7OztJQUV6QyxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0tBQ3pFOzs7WUFuQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7O09BTUo7Z0JBQ04sTUFBTSxFQUFFLENBQUMsdUpBQXVKLENBQUM7YUFDaks7Ozs7WUFqQlEsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vYXJ0aWNsZS13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtYXJ0aWNsZS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBzdGFydFwiPlxyXG4gIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwiYWNjZW50XCIgKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiIFtyb3V0ZXJMaW5rXT1cIlsnL3dpZGdldC91cHNlcnQvYXJ0aWNsZScsICh3aWRnZXQpPy5faWRdXCI+XHJcbiAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcblxyXG4gIDxkaXYgZnhGbGV4PVwiOTBcIiBbZnJvYWxhVmlld109XCIod2lkZ2V0KT8uQ29uZmlnLmNvbnRlbnRcIiBhbGlnbj1cInJpZ2h0XCIgY2xhc3M9XCJhcnRpY2xlXCI+PC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9Lm1hdC1taW5pLWZhYntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTIwcHg7cmlnaHQ6LTIwcHh9LmFydGljbGV7ZGlyZWN0aW9uOnJ0bDt0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctdG9wOjI1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFydGljbGVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VmlldzxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcbn1cclxuIl19
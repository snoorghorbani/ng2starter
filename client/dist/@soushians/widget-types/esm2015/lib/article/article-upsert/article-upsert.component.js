/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UpsertWidgetStartAction, WidgetModel } from "@soushians/widget";
export class ArticleUpsertComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "article" });
    }
    /**
     * @return {?}
     */
    upsert() {
        /** @type {?} */
        const widget = Object.assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
        this.store.dispatch(new UpsertWidgetStartAction(widget));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.widget != undefined) {
            this.widgetFormGroup.patchValue(this.widget);
            this.configFormGroup.patchValue(this.widget.Config);
        }
    }
    /**
     * @return {?}
     */
    _createFormGroup() {
        this.configFormGroup = new FormGroup({
            content: new FormControl("")
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    }
}
ArticleUpsertComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-article-upsert",
                template: `<mat-card>
  <mat-card-header>
    <mat-card-title fxLayout="row" fxLayoutGap="5px">
      <mat-icon>gradient</mat-icon>
      <span>ایجاد افزونه‌</span>
    </mat-card-title>
    <!-- <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
      <span>
        افزونه‌ مورد نظر را براساس نوع آن ایجاد نمایید ...
      </span>
    </mat-card-subtitle> -->
  </mat-card-header>
  <mat-card-content>
    <h3>نام افزونه</h3>
    <div [formGroup]="widgetFormGroup">
      <mat-form-field>
        <input type="text" matInput placeholder="نام" formControlName="name">
      </mat-form-field>
    </div>
    <mat-divider></mat-divider>
    <h3>متن افزونه</h3>
    <div [formGroup]="configFormGroup">
      <div [froalaEditor] formControlName="content"></div>
    </div>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button color="primary" (click)="upsert()">Add</button>
  </mat-card-actions>
</mat-card>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ArticleUpsertComponent.ctorParameters = () => [
    { type: Store }
];
ArticleUpsertComponent.propDecorators = {
    widget: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ArticleUpsertComponent.prototype.widget;
    /** @type {?} */
    ArticleUpsertComponent.prototype.widgetFormGroup;
    /** @type {?} */
    ArticleUpsertComponent.prototype.configFormGroup;
    /** @type {?} */
    ArticleUpsertComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvIiwic291cmNlcyI6WyJsaWIvYXJ0aWNsZS9hcnRpY2xlLXVwc2VydC9hcnRpY2xlLXVwc2VydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFpQixNQUFNLG1CQUFtQixDQUFDO0FBcUN4RixNQUFNOzs7O0lBSUwsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUEyQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQzdFOzs7O0lBRUQsTUFBTTs7UUFDTCxNQUFNLE1BQU0scUJBQ1IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssSUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUNqQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDs7OztJQUNELFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BEO0tBQ0Q7Ozs7SUFFRCxnQkFBZ0I7UUFDZixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BDLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNIOzs7WUFoRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRCQztnQkFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDWjs7OztZQXRDUSxLQUFLOzs7cUJBd0NaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiwgV2lkZ2V0TW9kZWwsIElXaWRnZXRVcHNlcnQgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuXHJcbmltcG9ydCB7IEFydGljbGVXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9hcnRpY2xlLXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1hcnRpY2xlLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkPlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICA8bWF0LWljb24+Z3JhZGllbnQ8L21hdC1pY29uPlxyXG4gICAgICA8c3Bhbj7Yp9uM2KzYp9ivINin2YHYstmI2YbZh+KAjDwvc3Bhbj5cclxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8IS0tIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICDYp9mB2LLZiNmG2YfigIwg2YXZiNix2K8g2YbYuNixINix2Kcg2KjYsdin2LPYp9izINmG2YjYuSDYotmGINin24zYrNin2K8g2YbZhdin24zbjNivIC4uLlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L21hdC1jYXJkLXN1YnRpdGxlPiAtLT5cclxuICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxoMz7Zhtin2YUg2KfZgdiy2YjZhtmHPC9oMz5cclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ3aWRnZXRGb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YbYp9mFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICAgIDxoMz7Zhdiq2YYg2KfZgdiy2YjZhtmHPC9oMz5cclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXBcIj5cclxuICAgICAgPGRpdiBbZnJvYWxhRWRpdG9yXSBmb3JtQ29udHJvbE5hbWU9XCJjb250ZW50XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInVwc2VydCgpXCI+QWRkPC9idXR0b24+XHJcbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlVXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VXBzZXJ0PEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdEBJbnB1dCgpIHdpZGdldDogV2lkZ2V0TW9kZWw8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPjtcclxuXHR3aWRnZXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVGb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4oeyB0eXBlOiBcImFydGljbGVcIiB9KTtcclxuXHR9XHJcblxyXG5cdHVwc2VydCgpIHtcclxuXHRcdGNvbnN0IHdpZGdldCA9IHtcclxuXHRcdFx0Li4udGhpcy53aWRnZXQsXHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0Rm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRDb25maWc6IHRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24od2lkZ2V0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMud2lkZ2V0ICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLndpZGdldEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0KTtcclxuXHRcdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldC5Db25maWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0X2NyZWF0ZUZvcm1Hcm91cCgpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGNvbnRlbnQ6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZGdldEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    }
    /**
     * @return {?}
     */
    upsert() {
        const /** @type {?} */ widget = Object.assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
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
  <mat-card-content>
      <h3>مشخصات ویجت</h3>
    <div [formGroup]="widgetFormGroup">
      <mat-form-field>
        <input type="text" matInput placeholder="نام"  formControlName="name">
      </mat-form-field>
  </div>
  <mat-divider></mat-divider>
  <h3>تنظیمات ویجت</h3>
    <div [formGroup]="configFormGroup">
        <!-- <editor apiKey="test" [init]="{plugins: 'link'}"></editor> -->
        <mat-form-field>
            <input type="text" matInput placeholder="متن تایید"  formControlName="content">
          </mat-form-field>
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
function ArticleUpsertComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ArticleUpsertComponent.prototype.widget;
    /** @type {?} */
    ArticleUpsertComponent.prototype.widgetFormGroup;
    /** @type {?} */
    ArticleUpsertComponent.prototype.configFormGroup;
    /** @type {?} */
    ArticleUpsertComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvIiwic291cmNlcyI6WyJsaWIvYXJ0aWNsZS9hcnRpY2xlLXVwc2VydC9hcnRpY2xlLXVwc2VydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFpQixNQUFNLG1CQUFtQixDQUFDO0FBNkJ4RixNQUFNOzs7O0lBSUwsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELE1BQU07UUFDTCx1QkFBTSxNQUFNLHFCQUNSLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FDbEMsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDs7OztJQUNELFFBQVE7UUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEQ7S0FDRDs7OztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BDLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0g7OztZQXZERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQW9CRztnQkFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDWjs7OztZQTlCUSxLQUFLOzs7cUJBZ0NaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcblxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XG5cbmltcG9ydCB7IEFydGljbGVXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9hcnRpY2xlLXdpZGdldC1jb25maWcubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIndpZGdldC1hcnRpY2xlLXVwc2VydFwiLFxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICA8aDM+2YXYtNiu2LXYp9iqINmI24zYrNiqPC9oMz5cbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwid2lkZ2V0Rm9ybUdyb3VwXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YbYp9mFXCIgIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZGl2PlxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbiAgPGgzPtiq2YbYuNuM2YXYp9iqINmI24zYrNiqPC9oMz5cbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XG4gICAgICAgIDwhLS0gPGVkaXRvciBhcGlLZXk9XCJ0ZXN0XCIgW2luaXRdPVwie3BsdWdpbnM6ICdsaW5rJ31cIj48L2VkaXRvcj4gLS0+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YXYqtmGINiq2KfbjNuM2K9cIiAgZm9ybUNvbnRyb2xOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxuICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJ1cHNlcnQoKVwiPkFkZDwvYnV0dG9uPlxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cbiAgPC9tYXQtY2FyZD5gLFxuXHRzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVVwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFVwc2VydDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+IHtcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+O1xuXHR3aWRnZXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcblx0XHR0aGlzLl9jcmVhdGVGb3JtR3JvdXAoKTtcblx0fVxuXG5cdHVwc2VydCgpIHtcblx0XHRjb25zdCB3aWRnZXQgPSB7XG5cdFx0XHQuLi50aGlzLndpZGdldCxcblx0XHRcdC4uLnRoaXMud2lkZ2V0Rm9ybUdyb3VwLnZhbHVlLFxuXHRcdFx0Q29uZmlnOiB0aGlzLmNvbmZpZ0Zvcm1Hcm91cC52YWx1ZVxuXHRcdH07XG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24od2lkZ2V0KSk7XG5cdH1cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKHRoaXMud2lkZ2V0ICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldCk7XG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XG5cdFx0fVxuXHR9XG5cblx0X2NyZWF0ZUZvcm1Hcm91cCgpIHtcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuXHRcdFx0Y29udGVudDogbmV3IEZvcm1Db250cm9sKFwiXCIpXG5cdFx0fSk7XG5cdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxuXHRcdH0pO1xuXHR9XG59XG4iXX0=
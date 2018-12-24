/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UpsertWidgetStartAction, WidgetModel } from "@soushians/widget";
export class ListUpsertComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "list" });
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
            this._update_list(this.widget.Config.list);
        }
    }
    /**
     * @return {?}
     */
    addItem() {
        (/** @type {?} */ (this.configFormGroup.get("list"))).push(this._get_new_empty_list_item());
    }
    /**
     * @param {?} list
     * @return {?}
     */
    removelist(list) {
        debugger;
        /** @type {?} */
        const data = /** @type {?} */ (this.configFormGroup.get("list"));
        if (data.controls.length > -1) {
            data.removeAt(list);
        }
        else {
            return data;
        }
    }
    /**
     * @return {?}
     */
    _createFormGroup() {
        this.configFormGroup = new FormGroup({
            list: new FormArray([])
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    }
    /**
     * @return {?}
     */
    _get_new_empty_list_item() {
        return new FormGroup({
            title: new FormControl(""),
            subtitle: new FormControl(""),
            description: new FormControl("")
        });
    }
    /**
     * @param {?} list
     * @return {?}
     */
    _update_list(list) {
        (/** @type {?} */ (this.configFormGroup.get("list"))).reset();
        list.forEach((item) => {
            /** @type {?} */
            const _list = this._get_new_empty_list_item();
            _list.patchValue(item);
            (/** @type {?} */ (this.configFormGroup.get("list"))).push(_list);
        });
    }
}
ListUpsertComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-list-upsert",
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
    <button color="primary" mat-fab fxFlexAlign="end" (click)="addItem()">
      <mat-icon>add</mat-icon>
    </button>
    <div [formGroup]="configFormGroup">
      <div fxFlex="nogrow" *ngFor="let ctrl of $any(configFormGroup.get('list')).controls; let idx = index" [formGroup]="ctrl">
        <button mat-icon-button fxFlex="nogrow" (click)="removelist(idx)">
          <mat-icon>delete</mat-icon>
        </button>
        <mat-form-field fxFlex>
          <input type="text" matInput placeholder="عنوان" formControlName="title">
        </mat-form-field>
        <mat-form-field fxFlex>
          <input type="text" matInput placeholder="زیرعنوان" formControlName="subtitle">
        </mat-form-field>
        <mat-form-field fxFlex>
          <input type="text" matInput placeholder="توضیحات" formControlName="description">
        </mat-form-field>
      </div>
    </div>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button color="primary" (click)="upsert()">ثبت</button>
  </mat-card-actions>
</mat-card>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ListUpsertComponent.ctorParameters = () => [
    { type: Store }
];
ListUpsertComponent.propDecorators = {
    widget: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListUpsertComponent.prototype.widget;
    /** @type {?} */
    ListUpsertComponent.prototype.widgetFormGroup;
    /** @type {?} */
    ListUpsertComponent.prototype.configFormGroup;
    /** @type {?} */
    ListUpsertComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC11cHNlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvIiwic291cmNlcyI6WyJsaWIvbGlzdC9saXN0LXVwc2VydC9saXN0LXVwc2VydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBaUIsTUFBTSxtQkFBbUIsQ0FBQztBQXNEeEYsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUkvQixZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQXdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDdkU7Ozs7SUFFRCxNQUFNOztRQUNMLE1BQU0sTUFBTSxxQkFDUixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQ2pDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQztLQUNEOzs7O0lBRUQsT0FBTztRQUNOLG1CQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBYyxFQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7S0FDdEY7Ozs7O0lBQ0QsVUFBVSxDQUFDLElBQUk7UUFDZCxRQUFRLENBQUM7O1FBQ1QsTUFBTSxJQUFJLHFCQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBYyxFQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDWjtLQUNEOzs7O0lBQ0QsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSDs7OztJQUVELHdCQUF3QjtRQUN2QixPQUFPLElBQUksU0FBUyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDMUIsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUM3QixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ2hDLENBQUMsQ0FBQztLQUNIOzs7OztJQUVELFlBQVksQ0FBQyxJQUFnQjtRQUM1QixtQkFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQWMsRUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7WUFDckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDOUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixtQkFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQWMsRUFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1RCxDQUFDLENBQUM7S0FDSDs7O1lBOUdELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNENDO2dCQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNaOzs7O1lBdkRRLEtBQUs7OztxQkF5RFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBMaXN0V2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGlzdC13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIi4uL2xpc3Qtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpc3QtdXBzZXJ0XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQ+XHJcbiAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgIDxtYXQtaWNvbj5ncmFkaWVudDwvbWF0LWljb24+XHJcbiAgICAgIDxzcGFuPtin24zYrNin2K8g2KfZgdiy2YjZhtmH4oCMPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwhLS0gPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgINin2YHYstmI2YbZh+KAjCDZhdmI2LHYryDZhti42LEg2LHYpyDYqNix2KfYs9in2LMg2YbZiNi5INii2YYg2KfbjNis2KfYryDZhtmF2KfbjNuM2K8gLi4uXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+IC0tPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGgzPtmG2KfZhSDYp9mB2LLZiNmG2Yc8L2gzPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIndpZGdldEZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLZhtin2YVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gICAgPGgzPtmF2KrZhiDYp9mB2LLZiNmG2Yc8L2gzPlxyXG4gICAgPGJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXQtZmFiIGZ4RmxleEFsaWduPVwiZW5kXCIgKGNsaWNrKT1cImFkZEl0ZW0oKVwiPlxyXG4gICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiICpuZ0Zvcj1cImxldCBjdHJsIG9mICRhbnkoY29uZmlnRm9ybUdyb3VwLmdldCgnbGlzdCcpKS5jb250cm9sczsgbGV0IGlkeCA9IGluZGV4XCIgW2Zvcm1Hcm91cF09XCJjdHJsXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCIgKGNsaWNrKT1cInJlbW92ZWxpc3QoaWR4KVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2LnZhtmI2KfZhlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYstuM2LHYudmG2YjYp9mGXCIgZm9ybUNvbnRyb2xOYW1lPVwic3VidGl0bGVcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItiq2YjYttuM2K3Yp9iqXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj7Yq9io2Ko8L2J1dHRvbj5cclxuICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRVcHNlcnQ8TGlzdFdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaXN0V2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHdpZGdldEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NyZWF0ZUZvcm1Hcm91cCgpO1xyXG5cdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWw8TGlzdFdpZGdldENvbmZpZ01vZGVsPih7IHR5cGU6IFwibGlzdFwiIH0pO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0Y29uc3Qgd2lkZ2V0ID0ge1xyXG5cdFx0XHQuLi50aGlzLndpZGdldCxcclxuXHRcdFx0Li4udGhpcy53aWRnZXRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdENvbmZpZzogdGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbih3aWRnZXQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy53aWRnZXQgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuX3VwZGF0ZV9saXN0KHRoaXMud2lkZ2V0LkNvbmZpZy5saXN0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXkpLnB1c2godGhpcy5fZ2V0X25ld19lbXB0eV9saXN0X2l0ZW0oKSk7XHJcblx0fVxyXG5cdHJlbW92ZWxpc3QobGlzdCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXk7XHJcblx0XHRpZiAoZGF0YS5jb250cm9scy5sZW5ndGggPiAtMSkge1xyXG5cdFx0XHRkYXRhLnJlbW92ZUF0KGxpc3QpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9XHJcblx0fVxyXG5cdF9jcmVhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRsaXN0OiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZGdldEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X2dldF9uZXdfZW1wdHlfbGlzdF9pdGVtKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRzdWJ0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF91cGRhdGVfbGlzdChsaXN0OiBMaXN0SXRlbVtdKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXkpLnJlc2V0KCk7XHJcblx0XHRsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0Y29uc3QgX2xpc3QgPSB0aGlzLl9nZXRfbmV3X2VtcHR5X2xpc3RfaXRlbSgpO1xyXG5cdFx0XHRfbGlzdC5wYXRjaFZhbHVlKGl0ZW0pO1xyXG5cdFx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXkpLnB1c2goX2xpc3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
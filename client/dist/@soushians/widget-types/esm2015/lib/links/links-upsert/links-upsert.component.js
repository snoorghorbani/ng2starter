/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UpsertWidgetStartAction, WidgetModel } from "@soushians/widget";
export class LinksUpsertComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "links" });
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
            debugger;
            this._update_links(this.widget.Config.links);
        }
    }
    /**
     * view methods
     * @return {?}
     */
    addlink() {
        (/** @type {?} */ (this.configFormGroup.get("links"))).push(this._get_new_empty_link_item());
    }
    /**
     * @param {?} link
     * @return {?}
     */
    removelink(link) {
        debugger;
        /** @type {?} */
        const data = /** @type {?} */ (this.configFormGroup.get("links"));
        if (data.controls.length > -1) {
            data.removeAt(link);
        }
        else {
            return data;
        }
    }
    /**
     * private methods
     * @return {?}
     */
    _createFormGroup() {
        this.configFormGroup = new FormGroup({
            links: new FormArray([])
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    }
    /**
     * @return {?}
     */
    _get_new_empty_link_item() {
        return new FormGroup({
            url: new FormControl("/"),
            label: new FormControl("")
        });
    }
    /**
     * @param {?} links
     * @return {?}
     */
    _update_links(links) {
        (/** @type {?} */ (this.configFormGroup.get("links"))).reset();
        links.forEach((link) => {
            /** @type {?} */
            const _link = this._get_new_empty_link_item();
            _link.patchValue(link);
            (/** @type {?} */ (this.configFormGroup.get("links"))).push(_link);
        });
    }
}
LinksUpsertComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-links-upsert",
                template: `<mat-card fxFlex>
  <mat-card-header>
    <mat-card-title fxLayout="row" fxLayoutGap="5px">
      <mat-icon>gradient</mat-icon>
      <span>ایجاد افزونه‌</span>
    </mat-card-title>
    <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
      <span>
        نام لینک موردنظر را وارد کرده و اطلاعات را کامل نمایید ...
      </span>
    </mat-card-subtitle>
  </mat-card-header>
  <mat-card-content>
    <h3>نام ویجت</h3>
    <div [formGroup]="widgetFormGroup">
      <mat-form-field>
        <input type="text" matInput placeholder="نام" formControlName="name">
      </mat-form-field>
    </div>
    <mat-divider></mat-divider>
    <br>
    <div fxLayout="row" fxLayoutAlign="space-between center">
      <h3>تنظیمات ویجت</h3>
      <button color="primary" mat-fab fxFlexAlign="end" (click)="addlink()">
        <mat-icon>add</mat-icon>
      </button>
    </div>
    <div [formGroup]="configFormGroup">
      <div fxFlex="nogrow" *ngFor="let ctrl of $any(configFormGroup.get('links')).controls; let idx = index"
        [formGroup]="ctrl">
        <div [formGroup]="ctrl" fxLayout="row" fxLayoutGap="25px">
          <button mat-icon-button fxFlex="nogrow" (click)="removelink(idx)">
            <mat-icon>delete</mat-icon>
          </button>
          <mat-form-field fxFlex>
            <input type="text" matInput placeholder="آدرس" formControlName="url">
          </mat-form-field>
          <mat-form-field fxFlex>
            <input type="text" matInput placeholder="نام" formControlName="label">
          </mat-form-field>
        </div>
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
LinksUpsertComponent.ctorParameters = () => [
    { type: Store }
];
LinksUpsertComponent.propDecorators = {
    widget: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LinksUpsertComponent.prototype.widget;
    /** @type {?} */
    LinksUpsertComponent.prototype.widgetFormGroup;
    /** @type {?} */
    LinksUpsertComponent.prototype.configFormGroup;
    /** @type {?} */
    LinksUpsertComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MtdXBzZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQWlCLE1BQU0sbUJBQW1CLENBQUM7QUF3RHhGLE1BQU07Ozs7SUFJTCxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQXlCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDekU7Ozs7SUFFRCxNQUFNOztRQUNMLE1BQU0sTUFBTSxxQkFDUixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQ2pDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsUUFBUSxDQUFDO1lBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztLQUNEOzs7OztJQUtELE9BQU87UUFDTixtQkFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQWMsRUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZGOzs7OztJQUNELFVBQVUsQ0FBQyxJQUFJO1FBQ2QsUUFBUSxDQUFDOztRQUNULE1BQU0sSUFBSSxxQkFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQWMsRUFBQztRQUM1RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7S0FDRDs7Ozs7SUFLRCxnQkFBZ0I7UUFDZixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BDLEtBQUssRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNIOzs7O0lBQ0Qsd0JBQXdCO1FBQ3ZCLE9BQU8sSUFBSSxTQUFTLENBQUM7WUFDcEIsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUN6QixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQzFCLENBQUMsQ0FBQztLQUNIOzs7OztJQUNELGFBQWEsQ0FBQyxLQUFpQjtRQUM5QixtQkFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQWMsRUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7WUFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDOUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixtQkFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQWMsRUFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3RCxDQUFDLENBQUM7S0FDSDs7O1lBdEhELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0NDO2dCQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNaOzs7O1lBekRRLEtBQUs7OztxQkEyRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rc1dpZGdldENvbmZpZ01vZGVsLCBMaW5rSXRlbSB9IGZyb20gXCIuLi9saW5rcy13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlua3MtdXBzZXJ0XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgZnhGbGV4PlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICA8bWF0LWljb24+Z3JhZGllbnQ8L21hdC1pY29uPlxyXG4gICAgICA8c3Bhbj7Yp9uM2KzYp9ivINin2YHYstmI2YbZh+KAjDwvc3Bhbj5cclxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAg2YbYp9mFINmE24zZhtqpINmF2YjYsdiv2YbYuNixINix2Kcg2YjYp9ix2K8g2qnYsdiv2Ycg2Ygg2KfYt9mE2KfYudin2Kog2LHYpyDaqdin2YXZhCDZhtmF2KfbjNuM2K8gLi4uXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8aDM+2YbYp9mFINmI24zYrNiqPC9oMz5cclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ3aWRnZXRGb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YbYp9mFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICAgIDxicj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgPGgzPtiq2YbYuNuM2YXYp9iqINmI24zYrNiqPC9oMz5cclxuICAgICAgPGJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXQtZmFiIGZ4RmxleEFsaWduPVwiZW5kXCIgKGNsaWNrKT1cImFkZGxpbmsoKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiICpuZ0Zvcj1cImxldCBjdHJsIG9mICRhbnkoY29uZmlnRm9ybUdyb3VwLmdldCgnbGlua3MnKSkuY29udHJvbHM7IGxldCBpZHggPSBpbmRleFwiXHJcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJjdHJsXCI+XHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImN0cmxcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCIgKGNsaWNrKT1cInJlbW92ZWxpbmsoaWR4KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYotiv2LHYs1wiIGZvcm1Db250cm9sTmFtZT1cInVybFwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YbYp9mFXCIgZm9ybUNvbnRyb2xOYW1lPVwibGFiZWxcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJ1cHNlcnQoKVwiPtir2KjYqjwvYnV0dG9uPlxyXG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua3NVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRVcHNlcnQ8TGlua3NXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdEBJbnB1dCgpIHdpZGdldDogV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD47XHJcblx0d2lkZ2V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY3JlYXRlRm9ybUdyb3VwKCk7XHJcblx0XHR0aGlzLndpZGdldCA9IG5ldyBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPih7IHR5cGU6IFwibGlua3NcIiB9KTtcclxuXHR9XHJcblxyXG5cdHVwc2VydCgpIHtcclxuXHRcdGNvbnN0IHdpZGdldCA9IHtcclxuXHRcdFx0Li4udGhpcy53aWRnZXQsXHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0Rm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRDb25maWc6IHRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24od2lkZ2V0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMud2lkZ2V0ICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLndpZGdldEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0KTtcclxuXHRcdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldC5Db25maWcpO1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5fdXBkYXRlX2xpbmtzKHRoaXMud2lkZ2V0LkNvbmZpZy5saW5rcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiB2aWV3IG1ldGhvZHNcclxuXHQgKi9cclxuXHRhZGRsaW5rKCkge1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaCh0aGlzLl9nZXRfbmV3X2VtcHR5X2xpbmtfaXRlbSgpKTtcclxuXHR9XHJcblx0cmVtb3ZlbGluayhsaW5rKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXk7XHJcblx0XHRpZiAoZGF0YS5jb250cm9scy5sZW5ndGggPiAtMSkge1xyXG5cdFx0XHRkYXRhLnJlbW92ZUF0KGxpbmspO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIHByaXZhdGUgbWV0aG9kc1xyXG5cdCAqL1xyXG5cclxuXHRfY3JlYXRlRm9ybUdyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bGlua3M6IG5ldyBGb3JtQXJyYXkoW10pXHJcblx0XHR9KTtcclxuXHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9nZXRfbmV3X2VtcHR5X2xpbmtfaXRlbSgpIHtcclxuXHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0dXJsOiBuZXcgRm9ybUNvbnRyb2woXCIvXCIpLFxyXG5cdFx0XHRsYWJlbDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3VwZGF0ZV9saW5rcyhsaW5rczogTGlua0l0ZW1bXSkge1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheSkucmVzZXQoKTtcclxuXHRcdGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuXHRcdFx0Y29uc3QgX2xpbmsgPSB0aGlzLl9nZXRfbmV3X2VtcHR5X2xpbmtfaXRlbSgpO1xyXG5cdFx0XHRfbGluay5wYXRjaFZhbHVlKGxpbmspO1xyXG5cdFx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKF9saW5rKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
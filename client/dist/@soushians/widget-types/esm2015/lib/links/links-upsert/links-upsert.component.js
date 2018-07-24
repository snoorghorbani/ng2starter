/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ data = /** @type {?} */ (this.configFormGroup.controls["links"]);
        data.removeAt(link);
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
            const /** @type {?} */ _link = this._get_new_empty_link_item();
            _link.patchValue(link);
            (/** @type {?} */ (this.configFormGroup.get("links"))).push(_link);
        });
    }
}
LinksUpsertComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-links-upsert",
                template: `<mat-card fxFlex fxLayout="column">
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
      <button color="primary" mat-raised-button (click)="addlink()">
        اضافه کردن لینک
      </button>
      <div fxFlex="nogrow" *ngFor="let ctrl of $any(configFormGroup.get('links')).controls" [formGroup]="ctrl">
        <div [formGroup]="ctrl" fxLayout="row" fxLayoutGap="25px">
          <button mat-icon-button fxFlex="nogrow" (click)="removelink(ctrl)">
              <mat-icon>delete</mat-icon>
          </button>
        <mat-form-field fxFlex>
          <input type="text" matInput placeholder="آدرس"  formControlName="url">
        </mat-form-field>          
        <mat-form-field fxFlex >
          <input type="text" matInput placeholder="نام"  formControlName="label">
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
function LinksUpsertComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LinksUpsertComponent.prototype.widget;
    /** @type {?} */
    LinksUpsertComponent.prototype.widgetFormGroup;
    /** @type {?} */
    LinksUpsertComponent.prototype.configFormGroup;
    /** @type {?} */
    LinksUpsertComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MtdXBzZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQWlCLE1BQU0sbUJBQW1CLENBQUM7QUF5Q3hGLE1BQU07Ozs7SUFJTCxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQXlCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDekU7Ozs7SUFFRCxNQUFNO1FBQ0wsdUJBQU0sTUFBTSxxQkFDUixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQ2xDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDekQ7Ozs7SUFDRCxRQUFRO1FBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELFFBQVEsQ0FBQztZQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7S0FDRDs7Ozs7SUFLRCxPQUFPO1FBQ04sbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFjLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQztLQUN2Rjs7Ozs7SUFDRCxVQUFVLENBQUMsSUFBSTtRQUNkLHVCQUFNLElBQUkscUJBQXlCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxTQUFNLENBQUEsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BCOzs7OztJQUtELGdCQUFnQjtRQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsS0FBSyxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BDLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFDRCx3QkFBd0I7UUFDdkIsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDO1lBQ3BCLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUMxQixDQUFDLENBQUM7S0FDSDs7Ozs7SUFDRCxhQUFhLENBQUMsS0FBaUI7UUFDOUIsbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFjLEVBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDdEIsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzlDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFjLEVBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0QsQ0FBQyxDQUFDO0tBQ0g7OztZQWxHRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQWdDRztnQkFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDWjs7OztZQTFDUSxLQUFLOzs7cUJBNENaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uLCBXaWRnZXRNb2RlbCwgSVdpZGdldFVwc2VydCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5cclxuaW1wb3J0IHsgTGlua3NXaWRnZXRDb25maWdNb2RlbCwgTGlua0l0ZW0gfSBmcm9tIFwiLi4vbGlua3Mtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpbmtzLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGZ4RmxleCBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8aDM+2YXYtNiu2LXYp9iqINmI24zYrNiqPC9oMz5cclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ3aWRnZXRGb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YbYp9mFXCIgIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Rpdj5cclxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICA8aDM+2KrZhti424zZhdin2Kog2YjbjNis2Ko8L2gzPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICA8YnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJhZGRsaW5rKClcIj5cclxuICAgICAgICDYp9i22KfZgdmHINqp2LHYr9mGINmE24zZhtqpXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiICpuZ0Zvcj1cImxldCBjdHJsIG9mICRhbnkoY29uZmlnRm9ybUdyb3VwLmdldCgnbGlua3MnKSkuY29udHJvbHNcIiBbZm9ybUdyb3VwXT1cImN0cmxcIj5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY3RybFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiAoY2xpY2spPVwicmVtb3ZlbGluayhjdHJsKVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2KLYr9ix2LNcIiAgZm9ybUNvbnRyb2xOYW1lPVwidXJsXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD4gICAgICAgICAgXHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleCA+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItmG2KfZhVwiICBmb3JtQ29udHJvbE5hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+ICAgICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj7Yq9io2Ko8L2J1dHRvbj5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rc1Vwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFVwc2VydDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPjtcclxuXHR3aWRnZXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVGb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+KHsgdHlwZTogXCJsaW5rc1wiIH0pO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0Y29uc3Qgd2lkZ2V0ID0ge1xyXG5cdFx0XHQuLi50aGlzLndpZGdldCxcclxuXHRcdFx0Li4udGhpcy53aWRnZXRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdENvbmZpZzogdGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbih3aWRnZXQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy53aWRnZXQgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLl91cGRhdGVfbGlua3ModGhpcy53aWRnZXQuQ29uZmlnLmxpbmtzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdGFkZGxpbmsoKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKHRoaXMuX2dldF9uZXdfZW1wdHlfbGlua19pdGVtKCkpO1xyXG5cdH1cclxuXHRyZW1vdmVsaW5rKGxpbmspIHtcclxuXHRcdGNvbnN0IGRhdGE6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5jb25maWdGb3JtR3JvdXAuY29udHJvbHMubGlua3M7XHJcblx0XHRkYXRhLnJlbW92ZUF0KGxpbmspO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHJcblx0X2NyZWF0ZUZvcm1Hcm91cCgpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGxpbmtzOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZGdldEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKSB7XHJcblx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHVybDogbmV3IEZvcm1Db250cm9sKFwiL1wiKSxcclxuXHRcdFx0bGFiZWw6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF91cGRhdGVfbGlua3MobGlua3M6IExpbmtJdGVtW10pIHtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnJlc2V0KCk7XHJcblx0XHRsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcblx0XHRcdGNvbnN0IF9saW5rID0gdGhpcy5fZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKTtcclxuXHRcdFx0X2xpbmsucGF0Y2hWYWx1ZShsaW5rKTtcclxuXHRcdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChfbGluayk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
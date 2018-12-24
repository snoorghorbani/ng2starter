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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MtdXBzZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQWlCLE1BQU0sbUJBQW1CLENBQUM7QUF3RHhGLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFJaEMsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUF5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3pFOzs7O0lBRUQsTUFBTTs7UUFDTCxNQUFNLE1BQU0scUJBQ1IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssSUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUNqQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDs7OztJQUNELFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELFFBQVEsQ0FBQztZQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7S0FDRDs7Ozs7SUFLRCxPQUFPO1FBQ04sbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFjLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQztLQUN2Rjs7Ozs7SUFDRCxVQUFVLENBQUMsSUFBSTtRQUNkLFFBQVEsQ0FBQzs7UUFDVCxNQUFNLElBQUkscUJBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFjLEVBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0tBQ0Q7Ozs7O0lBS0QsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ3hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSDs7OztJQUNELHdCQUF3QjtRQUN2QixPQUFPLElBQUksU0FBUyxDQUFDO1lBQ3BCLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUMxQixDQUFDLENBQUM7S0FDSDs7Ozs7SUFDRCxhQUFhLENBQUMsS0FBaUI7UUFDOUIsbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFjLEVBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7O1lBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzlDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFjLEVBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0QsQ0FBQyxDQUFDO0tBQ0g7OztZQXRIRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStDQztnQkFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDWjs7OztZQXpEUSxLQUFLOzs7cUJBMkRaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uLCBXaWRnZXRNb2RlbCwgSVdpZGdldFVwc2VydCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5cclxuaW1wb3J0IHsgTGlua3NXaWRnZXRDb25maWdNb2RlbCwgTGlua0l0ZW0gfSBmcm9tIFwiLi4vbGlua3Mtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpbmtzLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGZ4RmxleD5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgPG1hdC1pY29uPmdyYWRpZW50PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+2KfbjNis2KfYryDYp9mB2LLZiNmG2YfigIw8L3NwYW4+XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgINmG2KfZhSDZhNuM2YbaqSDZhdmI2LHYr9mG2LjYsSDYsdinINmI2KfYsdivINqp2LHYr9mHINmIINin2LfZhNin2LnYp9iqINix2Kcg2qnYp9mF2YQg2YbZhdin24zbjNivIC4uLlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L21hdC1jYXJkLXN1YnRpdGxlPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGgzPtmG2KfZhSDZiNuM2KzYqjwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwid2lkZ2V0Rm9ybUdyb3VwXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItmG2KfZhVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICA8YnI+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgIDxoMz7YqtmG2LjbjNmF2KfYqiDZiNuM2KzYqjwvaDM+XHJcbiAgICAgIDxidXR0b24gY29sb3I9XCJwcmltYXJ5XCIgbWF0LWZhYiBmeEZsZXhBbGlnbj1cImVuZFwiIChjbGljayk9XCJhZGRsaW5rKClcIj5cclxuICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXBcIj5cclxuICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiAqbmdGb3I9XCJsZXQgY3RybCBvZiAkYW55KGNvbmZpZ0Zvcm1Hcm91cC5nZXQoJ2xpbmtzJykpLmNvbnRyb2xzOyBsZXQgaWR4ID0gaW5kZXhcIlxyXG4gICAgICAgIFtmb3JtR3JvdXBdPVwiY3RybFwiPlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjdHJsXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIChjbGljayk9XCJyZW1vdmVsaW5rKGlkeClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2KLYr9ix2LNcIiBmb3JtQ29udHJvbE5hbWU9XCJ1cmxcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItmG2KfZhVwiIGZvcm1Db250cm9sTmFtZT1cImxhYmVsXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj7Yq9io2Ko8L2J1dHRvbj5cclxuICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtzVXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VXBzZXJ0PExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHRASW5wdXQoKSB3aWRnZXQ6IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHdpZGdldEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NyZWF0ZUZvcm1Hcm91cCgpO1xyXG5cdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD4oeyB0eXBlOiBcImxpbmtzXCIgfSk7XHJcblx0fVxyXG5cclxuXHR1cHNlcnQoKSB7XHJcblx0XHRjb25zdCB3aWRnZXQgPSB7XHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0LFxyXG5cdFx0XHQuLi50aGlzLndpZGdldEZvcm1Hcm91cC52YWx1ZSxcclxuXHRcdFx0Q29uZmlnOiB0aGlzLmNvbmZpZ0Zvcm1Hcm91cC52YWx1ZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uKHdpZGdldCkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLndpZGdldCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldCk7XHJcblx0XHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQuQ29uZmlnKTtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMuX3VwZGF0ZV9saW5rcyh0aGlzLndpZGdldC5Db25maWcubGlua3MpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogdmlldyBtZXRob2RzXHJcblx0ICovXHJcblx0YWRkbGluaygpIHtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2godGhpcy5fZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKSk7XHJcblx0fVxyXG5cdHJlbW92ZWxpbmsobGluaykge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5O1xyXG5cdFx0aWYgKGRhdGEuY29udHJvbHMubGVuZ3RoID4gLTEpIHtcclxuXHRcdFx0ZGF0YS5yZW1vdmVBdChsaW5rKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHJcblx0X2NyZWF0ZUZvcm1Hcm91cCgpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGxpbmtzOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZGdldEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKSB7XHJcblx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHVybDogbmV3IEZvcm1Db250cm9sKFwiL1wiKSxcclxuXHRcdFx0bGFiZWw6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF91cGRhdGVfbGlua3MobGlua3M6IExpbmtJdGVtW10pIHtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnJlc2V0KCk7XHJcblx0XHRsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcblx0XHRcdGNvbnN0IF9saW5rID0gdGhpcy5fZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKTtcclxuXHRcdFx0X2xpbmsucGF0Y2hWYWx1ZShsaW5rKTtcclxuXHRcdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChfbGluayk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
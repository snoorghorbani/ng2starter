/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UpsertWidgetStartAction, WidgetModel } from "@soushians/widget";
var ArticleUpsertComponent = /** @class */ (function () {
    function ArticleUpsertComponent(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "article" });
    }
    /**
     * @return {?}
     */
    ArticleUpsertComponent.prototype.upsert = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ widget = tslib_1.__assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
        this.store.dispatch(new UpsertWidgetStartAction(widget));
    };
    /**
     * @return {?}
     */
    ArticleUpsertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.widget != undefined) {
            this.widgetFormGroup.patchValue(this.widget);
            this.configFormGroup.patchValue(this.widget.Config);
        }
    };
    /**
     * @return {?}
     */
    ArticleUpsertComponent.prototype._createFormGroup = /**
     * @return {?}
     */
    function () {
        this.configFormGroup = new FormGroup({
            content: new FormControl("")
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    };
    ArticleUpsertComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-article-upsert",
                    template: "<mat-card>\n  <mat-card-content>\n      <h3>\u0645\u0634\u062E\u0635\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"name\">\n      </mat-form-field>\n  </div>\n  <mat-divider></mat-divider>\n  <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"configFormGroup\">\n        <div [froalaEditor] formControlName=\"content\"></div>\n    </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button color=\"primary\" (click)=\"upsert()\">Add</button>\n    </mat-card-actions>\n  </mat-card>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ArticleUpsertComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    ArticleUpsertComponent.propDecorators = {
        widget: [{ type: Input }]
    };
    return ArticleUpsertComponent;
}());
export { ArticleUpsertComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvIiwic291cmNlcyI6WyJsaWIvYXJ0aWNsZS9hcnRpY2xlLXVwc2VydC9hcnRpY2xlLXVwc2VydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBaUIsTUFBTSxtQkFBbUIsQ0FBQzs7SUE4QnZGLGdDQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQTJCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7S0FDN0U7Ozs7SUFFRCx1Q0FBTTs7O0lBQU47UUFDQyxxQkFBTSxNQUFNLHdCQUNSLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FDbEMsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDs7OztJQUNELHlDQUFROzs7SUFBUjtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwRDtLQUNEOzs7O0lBRUQsaURBQWdCOzs7SUFBaEI7UUFDQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BDLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNIOztnQkFyREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSx3c0JBaUJHO29CQUNiLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDWjs7OztnQkEzQlEsS0FBSzs7O3lCQTZCWixLQUFLOztpQ0EvQlA7O1NBOEJhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uLCBXaWRnZXRNb2RlbCwgSVdpZGdldFVwc2VydCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5cclxuaW1wb3J0IHsgQXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2FydGljbGUtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWFydGljbGUtdXBzZXJ0XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQ+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxoMz7Zhdi02K7Ytdin2Kog2YjbjNis2Ko8L2gzPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIndpZGdldEZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLZhtin2YVcIiAgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZGl2PlxyXG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gIDxoMz7YqtmG2LjbjNmF2KfYqiDZiNuM2KzYqjwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPGRpdiBbZnJvYWxhRWRpdG9yXSBmb3JtQ29udHJvbE5hbWU9XCJjb250ZW50XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInVwc2VydCgpXCI+QWRkPC9idXR0b24+XHJcbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVVwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFVwc2VydDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHRASW5wdXQoKSB3aWRnZXQ6IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD47XHJcblx0d2lkZ2V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY3JlYXRlRm9ybUdyb3VwKCk7XHJcblx0XHR0aGlzLndpZGdldCA9IG5ldyBXaWRnZXRNb2RlbDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+KHsgdHlwZTogXCJhcnRpY2xlXCIgfSk7XHJcblx0fVxyXG5cclxuXHR1cHNlcnQoKSB7XHJcblx0XHRjb25zdCB3aWRnZXQgPSB7XHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0LFxyXG5cdFx0XHQuLi50aGlzLndpZGdldEZvcm1Hcm91cC52YWx1ZSxcclxuXHRcdFx0Q29uZmlnOiB0aGlzLmNvbmZpZ0Zvcm1Hcm91cC52YWx1ZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uKHdpZGdldCkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLndpZGdldCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldCk7XHJcblx0XHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQuQ29uZmlnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdF9jcmVhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRjb250ZW50OiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
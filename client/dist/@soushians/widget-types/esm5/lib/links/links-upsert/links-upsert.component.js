/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UpsertWidgetStartAction, WidgetModel } from "@soushians/widget";
var LinksUpsertComponent = /** @class */ (function () {
    function LinksUpsertComponent(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "links" });
    }
    /**
     * @return {?}
     */
    LinksUpsertComponent.prototype.upsert = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widget = tslib_1.__assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
        this.store.dispatch(new UpsertWidgetStartAction(widget));
    };
    /**
     * @return {?}
     */
    LinksUpsertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.widget != undefined) {
            this.widgetFormGroup.patchValue(this.widget);
            this.configFormGroup.patchValue(this.widget.Config);
            debugger;
            this._update_links(this.widget.Config.links);
        }
    };
    /**
     * view methods
     */
    /**
     * view methods
     * @return {?}
     */
    LinksUpsertComponent.prototype.addlink = /**
     * view methods
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this.configFormGroup.get("links")))).push(this._get_new_empty_link_item());
    };
    /**
     * @param {?} link
     * @return {?}
     */
    LinksUpsertComponent.prototype.removelink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        debugger;
        /** @type {?} */
        var data = (/** @type {?} */ (this.configFormGroup.get("links")));
        if (data.controls.length > -1) {
            data.removeAt(link);
        }
        else {
            return data;
        }
    };
    /**
     * private methods
     */
    /**
     * private methods
     * @return {?}
     */
    LinksUpsertComponent.prototype._createFormGroup = /**
     * private methods
     * @return {?}
     */
    function () {
        this.configFormGroup = new FormGroup({
            links: new FormArray([])
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    };
    /**
     * @return {?}
     */
    LinksUpsertComponent.prototype._get_new_empty_link_item = /**
     * @return {?}
     */
    function () {
        return new FormGroup({
            url: new FormControl("/"),
            label: new FormControl("")
        });
    };
    /**
     * @param {?} links
     * @return {?}
     */
    LinksUpsertComponent.prototype._update_links = /**
     * @param {?} links
     * @return {?}
     */
    function (links) {
        var _this = this;
        ((/** @type {?} */ (this.configFormGroup.get("links")))).reset();
        links.forEach(function (link) {
            /** @type {?} */
            var _link = _this._get_new_empty_link_item();
            _link.patchValue(link);
            ((/** @type {?} */ (_this.configFormGroup.get("links")))).push(_link);
        });
    };
    LinksUpsertComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-links-upsert",
                    template: "<mat-card fxFlex>\r\n  <mat-card-header>\r\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n      <mat-icon>gradient</mat-icon>\r\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\r\n    </mat-card-title>\r\n    <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span>\r\n        \u0646\u0627\u0645 \u0644\u06CC\u0646\u06A9 \u0645\u0648\u0631\u062F\u0646\u0638\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0631\u0627 \u06A9\u0627\u0645\u0644 \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n      </span>\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <h3>\u0646\u0627\u0645 \u0648\u06CC\u062C\u062A</h3>\r\n    <div [formGroup]=\"widgetFormGroup\">\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <br>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\r\n      <button color=\"primary\" mat-fab fxFlexAlign=\"end\" (click)=\"addlink()\">\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n    </div>\r\n    <div [formGroup]=\"configFormGroup\">\r\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('links')).controls; let idx = index\"\r\n        [formGroup]=\"ctrl\">\r\n        <div [formGroup]=\"ctrl\" fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n          <button mat-icon-button fxFlex=\"nogrow\" (click)=\"removelink(idx)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n          <mat-form-field fxFlex>\r\n            <input type=\"text\" matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"url\">\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex>\r\n            <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"label\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n  </mat-card-actions>\r\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LinksUpsertComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    LinksUpsertComponent.propDecorators = {
        widget: [{ type: Input }]
    };
    return LinksUpsertComponent;
}());
export { LinksUpsertComponent };
if (false) {
    /** @type {?} */
    LinksUpsertComponent.prototype.widget;
    /** @type {?} */
    LinksUpsertComponent.prototype.widgetFormGroup;
    /** @type {?} */
    LinksUpsertComponent.prototype.configFormGroup;
    /**
     * @type {?}
     * @private
     */
    LinksUpsertComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MtdXBzZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFpQixNQUFNLG1CQUFtQixDQUFDO0FBSXhGO0lBU0MsOEJBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBeUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7O0lBRUQscUNBQU07OztJQUFOOztZQUNPLE1BQU0sd0JBQ1IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssSUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUNsQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBQ0QsdUNBQVE7OztJQUFSO1FBQ0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxRQUFRLENBQUM7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0YsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHNDQUFPOzs7O0lBQVA7UUFDQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7OztJQUNELHlDQUFVOzs7O0lBQVYsVUFBVyxJQUFJO1FBQ2QsUUFBUSxDQUFDOztZQUNILElBQUksR0FBRyxtQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBYTtRQUMzRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDO0lBQ0Q7O09BRUc7Ozs7O0lBRUgsK0NBQWdCOzs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ3hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBQ0QsdURBQXdCOzs7SUFBeEI7UUFDQyxPQUFPLElBQUksU0FBUyxDQUFDO1lBQ3BCLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUMxQixDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUNELDRDQUFhOzs7O0lBQWIsVUFBYyxLQUFpQjtRQUEvQixpQkFPQztRQU5BLENBQUMsbUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJOztnQkFDWixLQUFLLEdBQUcsS0FBSSxDQUFDLHdCQUF3QixFQUFFO1lBQzdDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxtQkFBQSxLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBdkVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixzMUVBQTRDOztpQkFFNUM7Ozs7Z0JBVlEsS0FBSzs7O3lCQVlaLEtBQUs7O0lBa0VQLDJCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0FuRVksb0JBQW9COzs7SUFDaEMsc0NBQXFEOztJQUNyRCwrQ0FBMkI7O0lBQzNCLCtDQUEyQjs7Ozs7SUFDZixxQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uLCBXaWRnZXRNb2RlbCwgSVdpZGdldFVwc2VydCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5cclxuaW1wb3J0IHsgTGlua3NXaWRnZXRDb25maWdNb2RlbCwgTGlua0l0ZW0gfSBmcm9tIFwiLi4vbGlua3Mtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpbmtzLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbGlua3MtdXBzZXJ0LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCIuL2xpbmtzLXVwc2VydC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rc1Vwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFVwc2VydDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPjtcclxuXHR3aWRnZXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVGb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+KHsgdHlwZTogXCJsaW5rc1wiIH0pO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0Y29uc3Qgd2lkZ2V0ID0ge1xyXG5cdFx0XHQuLi50aGlzLndpZGdldCxcclxuXHRcdFx0Li4udGhpcy53aWRnZXRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdENvbmZpZzogdGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbih3aWRnZXQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy53aWRnZXQgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLl91cGRhdGVfbGlua3ModGhpcy53aWRnZXQuQ29uZmlnLmxpbmtzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdGFkZGxpbmsoKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKHRoaXMuX2dldF9uZXdfZW1wdHlfbGlua19pdGVtKCkpO1xyXG5cdH1cclxuXHRyZW1vdmVsaW5rKGxpbmspIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheTtcclxuXHRcdGlmIChkYXRhLmNvbnRyb2xzLmxlbmd0aCA+IC0xKSB7XHJcblx0XHRcdGRhdGEucmVtb3ZlQXQobGluayk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH1cclxuXHR9XHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblxyXG5cdF9jcmVhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRsaW5rczogbmV3IEZvcm1BcnJheShbXSlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2dldF9uZXdfZW1wdHlfbGlua19pdGVtKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHR1cmw6IG5ldyBGb3JtQ29udHJvbChcIi9cIiksXHJcblx0XHRcdGxhYmVsOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfdXBkYXRlX2xpbmtzKGxpbmtzOiBMaW5rSXRlbVtdKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5KS5yZXNldCgpO1xyXG5cdFx0bGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG5cdFx0XHRjb25zdCBfbGluayA9IHRoaXMuX2dldF9uZXdfZW1wdHlfbGlua19pdGVtKCk7XHJcblx0XHRcdF9saW5rLnBhdGNoVmFsdWUobGluayk7XHJcblx0XHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2goX2xpbmspO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        (/** @type {?} */ (this.configFormGroup.get("links"))).push(this._get_new_empty_link_item());
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
        var data = /** @type {?} */ (this.configFormGroup.get("links"));
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
        (/** @type {?} */ (this.configFormGroup.get("links"))).reset();
        links.forEach(function (link) {
            /** @type {?} */
            var _link = _this._get_new_empty_link_item();
            _link.patchValue(link);
            (/** @type {?} */ (_this.configFormGroup.get("links"))).push(_link);
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
    /** @type {?} */
    LinksUpsertComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MtdXBzZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFpQixNQUFNLG1CQUFtQixDQUFDOztJQWF2Riw4QkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUF5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3pFOzs7O0lBRUQscUNBQU07OztJQUFOOztRQUNDLElBQU0sTUFBTSx3QkFDUixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQ2pDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOzs7O0lBQ0QsdUNBQVE7OztJQUFSO1FBQ0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxRQUFRLENBQUM7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0tBQ0Q7SUFFRDs7T0FFRzs7Ozs7SUFDSCxzQ0FBTzs7OztJQUFQO1FBQ0MsbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFjLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQztLQUN2Rjs7Ozs7SUFDRCx5Q0FBVTs7OztJQUFWLFVBQVcsSUFBSTtRQUNkLFFBQVEsQ0FBQzs7UUFDVCxJQUFNLElBQUkscUJBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFjLEVBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0tBQ0Q7SUFDRDs7T0FFRzs7Ozs7SUFFSCwrQ0FBZ0I7Ozs7SUFBaEI7UUFDQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BDLEtBQUssRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNIOzs7O0lBQ0QsdURBQXdCOzs7SUFBeEI7UUFDQyxPQUFPLElBQUksU0FBUyxDQUFDO1lBQ3BCLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUMxQixDQUFDLENBQUM7S0FDSDs7Ozs7SUFDRCw0Q0FBYTs7OztJQUFiLFVBQWMsS0FBaUI7UUFBL0IsaUJBT0M7UUFOQSxtQkFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQWMsRUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJOztZQUNsQixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUM5QyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLG1CQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBYyxFQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdELENBQUMsQ0FBQztLQUNIOztnQkF2RUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHMxRUFBNEM7O2lCQUU1Qzs7OztnQkFWUSxLQUFLOzs7eUJBWVosS0FBSzs7K0JBZFA7O1NBYWEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiwgV2lkZ2V0TW9kZWwsIElXaWRnZXRVcHNlcnQgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuXHJcbmltcG9ydCB7IExpbmtzV2lkZ2V0Q29uZmlnTW9kZWwsIExpbmtJdGVtIH0gZnJvbSBcIi4uL2xpbmtzLXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1saW5rcy11cHNlcnRcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2xpbmtzLXVwc2VydC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9saW5rcy11cHNlcnQuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua3NVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRVcHNlcnQ8TGlua3NXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdEBJbnB1dCgpIHdpZGdldDogV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD47XHJcblx0d2lkZ2V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY3JlYXRlRm9ybUdyb3VwKCk7XHJcblx0XHR0aGlzLndpZGdldCA9IG5ldyBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPih7IHR5cGU6IFwibGlua3NcIiB9KTtcclxuXHR9XHJcblxyXG5cdHVwc2VydCgpIHtcclxuXHRcdGNvbnN0IHdpZGdldCA9IHtcclxuXHRcdFx0Li4udGhpcy53aWRnZXQsXHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0Rm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRDb25maWc6IHRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24od2lkZ2V0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMud2lkZ2V0ICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLndpZGdldEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0KTtcclxuXHRcdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldC5Db25maWcpO1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5fdXBkYXRlX2xpbmtzKHRoaXMud2lkZ2V0LkNvbmZpZy5saW5rcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiB2aWV3IG1ldGhvZHNcclxuXHQgKi9cclxuXHRhZGRsaW5rKCkge1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaCh0aGlzLl9nZXRfbmV3X2VtcHR5X2xpbmtfaXRlbSgpKTtcclxuXHR9XHJcblx0cmVtb3ZlbGluayhsaW5rKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXk7XHJcblx0XHRpZiAoZGF0YS5jb250cm9scy5sZW5ndGggPiAtMSkge1xyXG5cdFx0XHRkYXRhLnJlbW92ZUF0KGxpbmspO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIHByaXZhdGUgbWV0aG9kc1xyXG5cdCAqL1xyXG5cclxuXHRfY3JlYXRlRm9ybUdyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bGlua3M6IG5ldyBGb3JtQXJyYXkoW10pXHJcblx0XHR9KTtcclxuXHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9nZXRfbmV3X2VtcHR5X2xpbmtfaXRlbSgpIHtcclxuXHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0dXJsOiBuZXcgRm9ybUNvbnRyb2woXCIvXCIpLFxyXG5cdFx0XHRsYWJlbDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3VwZGF0ZV9saW5rcyhsaW5rczogTGlua0l0ZW1bXSkge1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheSkucmVzZXQoKTtcclxuXHRcdGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuXHRcdFx0Y29uc3QgX2xpbmsgPSB0aGlzLl9nZXRfbmV3X2VtcHR5X2xpbmtfaXRlbSgpO1xyXG5cdFx0XHRfbGluay5wYXRjaFZhbHVlKGxpbmspO1xyXG5cdFx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKF9saW5rKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
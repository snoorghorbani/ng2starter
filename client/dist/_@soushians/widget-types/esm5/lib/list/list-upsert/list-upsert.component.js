/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UpsertWidgetStartAction, WidgetModel } from "@soushians/widget";
var ListUpsertComponent = /** @class */ (function () {
    function ListUpsertComponent(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "list" });
    }
    /**
     * @return {?}
     */
    ListUpsertComponent.prototype.upsert = /**
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
    ListUpsertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.widget != undefined) {
            this.widgetFormGroup.patchValue(this.widget);
            this.configFormGroup.patchValue(this.widget.Config);
            this._update_list(this.widget.Config.list);
        }
    };
    /**
     * @return {?}
     */
    ListUpsertComponent.prototype.addItem = /**
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this.configFormGroup.get("list")))).push(this._get_new_empty_list_item());
    };
    /**
     * @param {?} list
     * @return {?}
     */
    ListUpsertComponent.prototype.removelist = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        debugger;
        /** @type {?} */
        var data = (/** @type {?} */ (this.configFormGroup.get("list")));
        if (data.controls.length > -1) {
            data.removeAt(list);
        }
        else {
            return data;
        }
    };
    /**
     * @return {?}
     */
    ListUpsertComponent.prototype._createFormGroup = /**
     * @return {?}
     */
    function () {
        this.configFormGroup = new FormGroup({
            list: new FormArray([])
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    };
    /**
     * @return {?}
     */
    ListUpsertComponent.prototype._get_new_empty_list_item = /**
     * @return {?}
     */
    function () {
        return new FormGroup({
            title: new FormControl(""),
            subtitle: new FormControl(""),
            description: new FormControl("")
        });
    };
    /**
     * @param {?} list
     * @return {?}
     */
    ListUpsertComponent.prototype._update_list = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var _this = this;
        ((/** @type {?} */ (this.configFormGroup.get("list")))).reset();
        list.forEach(function (item) {
            /** @type {?} */
            var _list = _this._get_new_empty_list_item();
            _list.patchValue(item);
            ((/** @type {?} */ (_this.configFormGroup.get("list")))).push(_list);
        });
    };
    ListUpsertComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-list-upsert",
                    template: "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n      <mat-icon>gradient</mat-icon>\r\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\r\n    </mat-card-title>\r\n    <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span>\r\n        \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n      </span>\r\n    </mat-card-subtitle> -->\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <h3>\u0646\u0627\u0645 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\r\n    <div [formGroup]=\"widgetFormGroup\">\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <h3>\u0645\u062A\u0646 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\r\n    <button color=\"primary\" mat-fab fxFlexAlign=\"end\" (click)=\"addItem()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n    <div [formGroup]=\"configFormGroup\">\r\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('list')).controls; let idx = index\" [formGroup]=\"ctrl\">\r\n        <button mat-icon-button fxFlex=\"nogrow\" (click)=\"removelist(idx)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" matInput placeholder=\"\u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646\" formControlName=\"subtitle\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\u0627\u062A\" formControlName=\"description\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n  </mat-card-actions>\r\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ListUpsertComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    ListUpsertComponent.propDecorators = {
        widget: [{ type: Input }]
    };
    return ListUpsertComponent;
}());
export { ListUpsertComponent };
if (false) {
    /** @type {?} */
    ListUpsertComponent.prototype.widget;
    /** @type {?} */
    ListUpsertComponent.prototype.widgetFormGroup;
    /** @type {?} */
    ListUpsertComponent.prototype.configFormGroup;
    /**
     * @type {?}
     * @private
     */
    ListUpsertComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC11cHNlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvIiwic291cmNlcyI6WyJsaWIvbGlzdC9saXN0LXVwc2VydC9saXN0LXVwc2VydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQWlCLE1BQU0sbUJBQW1CLENBQUM7QUFLeEY7SUFTQyw2QkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBVyxDQUF3QixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFFRCxvQ0FBTTs7O0lBQU47O1lBQ08sTUFBTSx3QkFDUixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQ2xDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFDRCxzQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0M7SUFDRixDQUFDOzs7O0lBRUQscUNBQU87OztJQUFQO1FBQ0MsQ0FBQyxtQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7SUFDRCx3Q0FBVTs7OztJQUFWLFVBQVcsSUFBSTtRQUNkLFFBQVEsQ0FBQzs7WUFDSCxJQUFJLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQWE7UUFDMUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7OztJQUNELDhDQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsc0RBQXdCOzs7SUFBeEI7UUFDQyxPQUFPLElBQUksU0FBUyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDMUIsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUM3QixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ2hDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLElBQWdCO1FBQTdCLGlCQU9DO1FBTkEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7O2dCQUNYLEtBQUssR0FBRyxLQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDN0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixDQUFDLG1CQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOztnQkFsRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLCt6RUFBMkM7O2lCQUUzQzs7OztnQkFYUSxLQUFLOzs7eUJBYVosS0FBSzs7SUE2RFAsMEJBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQTlEWSxtQkFBbUI7OztJQUMvQixxQ0FBb0Q7O0lBQ3BELDhDQUEyQjs7SUFDM0IsOENBQTJCOzs7OztJQUNmLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBMaXN0V2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGlzdC13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIi4uL2xpc3Qtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpc3QtdXBzZXJ0XCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9saXN0LXVwc2VydC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9saXN0LXVwc2VydC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0VXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VXBzZXJ0PExpc3RXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdEBJbnB1dCgpIHdpZGdldDogV2lkZ2V0TW9kZWw8TGlzdFdpZGdldENvbmZpZ01vZGVsPjtcclxuXHR3aWRnZXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVGb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsPExpc3RXaWRnZXRDb25maWdNb2RlbD4oeyB0eXBlOiBcImxpc3RcIiB9KTtcclxuXHR9XHJcblxyXG5cdHVwc2VydCgpIHtcclxuXHRcdGNvbnN0IHdpZGdldCA9IHtcclxuXHRcdFx0Li4udGhpcy53aWRnZXQsXHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0Rm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRDb25maWc6IHRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24od2lkZ2V0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMud2lkZ2V0ICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLndpZGdldEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0KTtcclxuXHRcdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldC5Db25maWcpO1xyXG5cdFx0XHR0aGlzLl91cGRhdGVfbGlzdCh0aGlzLndpZGdldC5Db25maWcubGlzdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKCkge1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpc3RcIikgYXMgRm9ybUFycmF5KS5wdXNoKHRoaXMuX2dldF9uZXdfZW1wdHlfbGlzdF9pdGVtKCkpO1xyXG5cdH1cclxuXHRyZW1vdmVsaXN0KGxpc3QpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpc3RcIikgYXMgRm9ybUFycmF5O1xyXG5cdFx0aWYgKGRhdGEuY29udHJvbHMubGVuZ3RoID4gLTEpIHtcclxuXHRcdFx0ZGF0YS5yZW1vdmVBdChsaXN0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRfY3JlYXRlRm9ybUdyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bGlzdDogbmV3IEZvcm1BcnJheShbXSlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9nZXRfbmV3X2VtcHR5X2xpc3RfaXRlbSgpIHtcclxuXHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcclxuXHRcdFx0c3VidGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcclxuXHRcdFx0ZGVzY3JpcHRpb246IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfdXBkYXRlX2xpc3QobGlzdDogTGlzdEl0ZW1bXSkge1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpc3RcIikgYXMgRm9ybUFycmF5KS5yZXNldCgpO1xyXG5cdFx0bGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdGNvbnN0IF9saXN0ID0gdGhpcy5fZ2V0X25ld19lbXB0eV9saXN0X2l0ZW0oKTtcclxuXHRcdFx0X2xpc3QucGF0Y2hWYWx1ZShpdGVtKTtcclxuXHRcdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpc3RcIikgYXMgRm9ybUFycmF5KS5wdXNoKF9saXN0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
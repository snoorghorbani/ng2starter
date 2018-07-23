/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UpsertPageStartAction } from "../services/api";
import { ActivatedRoute } from "@angular/router";
import { pluck, switchMap, filter } from "rxjs/operators";
import { PageService } from "../services/page.service";
var UpsertComponent = /** @class */ (function () {
    function UpsertComponent(store, route, service) {
        this.store = store;
        this.route = route;
        this.service = service;
        this._init_formgroup();
    }
    /**
     * view methods
     */
    /**
     * view methods
     * @return {?}
     */
    UpsertComponent.prototype.upsert = /**
     * view methods
     * @return {?}
     */
    function () {
        debugger;
        var /** @type {?} */ page = tslib_1.__assign({}, this.formGroup.value);
        this.store.dispatch(new UpsertPageStartAction(page));
    };
    /**
     * @return {?}
     */
    UpsertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._select_page();
        this._update_formgroup_base_on_page();
    };
    /**
     * private methods
     */
    /**
     * private methods
     * @return {?}
     */
    UpsertComponent.prototype._init_formgroup = /**
     * private methods
     * @return {?}
     */
    function () {
        this.formGroup = new FormGroup({
            _id: new FormControl(""),
            name: new FormControl(""),
            grid: new FormControl("")
        });
    };
    /**
     * @return {?}
     */
    UpsertComponent.prototype._select_page = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.page$ = this.route.params.pipe(pluck("name"), filter(function (name) { return name != undefined; }), switchMap(function (name) { return _this.service.selectByName(name); }), filter(function (page) { return page != undefined; }));
    };
    /**
     * @return {?}
     */
    UpsertComponent.prototype._update_formgroup_base_on_page = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.page$.subscribe(function (page) {
            _this.formGroup.patchValue(page);
        });
    };
    UpsertComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card fxFlex=\"50\">\n        <mat-card-content [formGroup]=\"formGroup\">\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"name\">\n            </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions align=\"end\">\n            <button mat-button color=\"primary\" (click)=\"upsert()\">Add</button>\n        </mat-card-actions>\n    </mat-card>\n</div>"
                },] },
    ];
    /** @nocollapse */
    UpsertComponent.ctorParameters = function () { return [
        { type: Store },
        { type: ActivatedRoute },
        { type: PageService }
    ]; };
    return UpsertComponent;
}());
export { UpsertComponent };
function UpsertComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    UpsertComponent.prototype.formGroup;
    /** @type {?} */
    UpsertComponent.prototype.page$;
    /** @type {?} */
    UpsertComponent.prototype.store;
    /** @type {?} */
    UpsertComponent.prototype.route;
    /** @type {?} */
    UpsertComponent.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBbUJ0RCx5QkFBb0IsS0FBc0IsRUFBVSxLQUFxQixFQUFVLE9BQW9CO1FBQW5GLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3RHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN2QjtJQUVEOztPQUVHOzs7OztJQUNILGdDQUFNOzs7O0lBQU47UUFDQyxRQUFRLENBQUM7UUFDVCxxQkFBTSxJQUFJLHdCQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3JEOzs7O0lBQ0Qsa0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0tBQ3RDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQWU7Ozs7SUFBZjtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDOUIsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUN4QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ3pCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFFRCxzQ0FBWTs7O0lBQVo7UUFBQSxpQkFPQztRQU5BLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNsQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ2IsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxJQUFJLFNBQVMsRUFBakIsQ0FBaUIsQ0FBQyxFQUNuQyxTQUFTLENBQUMsVUFBQyxJQUFZLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxFQUM1RCxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLElBQUksU0FBUyxFQUFqQixDQUFpQixDQUFDLENBQ25DLENBQUM7S0FDRjs7OztJQUNELHdEQUE4Qjs7O0lBQTlCO1FBQUEsaUJBSUM7UUFIQSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDekIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0tBQ0g7O2dCQTNERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVnQkFXSjtpQkFDTjs7OztnQkF2QlEsS0FBSztnQkFLTCxjQUFjO2dCQUdkLFdBQVc7OzBCQVZwQjs7U0EwQmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFBhZ2VTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIHN3aXRjaE1hcCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCI1MFwiPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YbYp9mFXCIgIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJ1cHNlcnQoKVwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFVwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0cGFnZSQ6IE9ic2VydmFibGU8UGFnZU1vZGVsPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLl9pbml0X2Zvcm1ncm91cCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogdmlldyBtZXRob2RzXHJcblx0ICovXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBwYWdlID0ge1xyXG5cdFx0XHQuLi50aGlzLmZvcm1Hcm91cC52YWx1ZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFBhZ2VTdGFydEFjdGlvbihwYWdlKSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5fc2VsZWN0X3BhZ2UoKTtcclxuXHRcdHRoaXMuX3VwZGF0ZV9mb3JtZ3JvdXBfYmFzZV9vbl9wYWdlKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHRfaW5pdF9mb3JtZ3JvdXAoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRfaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRncmlkOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X3NlbGVjdF9wYWdlKCkge1xyXG5cdFx0dGhpcy5wYWdlJCA9IHRoaXMucm91dGUucGFyYW1zLnBpcGUoXHJcblx0XHRcdHBsdWNrKFwibmFtZVwiKSxcclxuXHRcdFx0ZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9IHVuZGVmaW5lZCksXHJcblx0XHRcdHN3aXRjaE1hcCgobmFtZTogc3RyaW5nKSA9PiB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlOYW1lKG5hbWUpKSxcclxuXHRcdFx0ZmlsdGVyKChwYWdlKSA9PiBwYWdlICE9IHVuZGVmaW5lZClcclxuXHRcdCk7XHJcblx0fVxyXG5cdF91cGRhdGVfZm9ybWdyb3VwX2Jhc2Vfb25fcGFnZSgpIHtcclxuXHRcdHRoaXMucGFnZSQuc3Vic2NyaWJlKChwYWdlKSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUocGFnZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
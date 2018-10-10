/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        var page = tslib_1.__assign({}, this.formGroup.value);
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
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"main-container\">\n    <mat-card fxFlex=\"50\">\n        <mat-card-header>\n            <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n                <mat-icon>receipt</mat-icon>\n                <span>\u0627\u06CC\u062C\u0627\u062F \u0635\u0641\u062D\u0647 \u062C\u062F\u06CC\u062F</span>\n            </mat-card-title>\n            <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <span>\n                    \u0646\u0627\u0645 \u0635\u0641\u062D\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F \u0648 \u0628\u0647 \u0645\u0631\u062D\u0644\u0647 \u0628\u0639\u062F \u0628\u0631\u0648\u06CC\u062F ...\n                </span>\n            </mat-card-subtitle>\n        </mat-card-header>\n\n        <mat-card-content [formGroup]=\"formGroup\">\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n            </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions align=\"end\">\n            <button mat-raised-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n    </mat-card>\n</div>"
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
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBK0J0RCx5QkFBb0IsS0FBc0IsRUFBVSxLQUFxQixFQUFVLE9BQW9CO1FBQW5GLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3RHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN2QjtJQUVEOztPQUVHOzs7OztJQUNILGdDQUFNOzs7O0lBQU47UUFDQyxRQUFRLENBQUM7O1FBQ1QsSUFBTSxJQUFJLHdCQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUN0QjtRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNyRDs7OztJQUNELGtDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztLQUN0QztJQUVEOztPQUVHOzs7OztJQUNILHlDQUFlOzs7O0lBQWY7UUFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDO1lBQzlCLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDeEIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUN6QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNIOzs7O0lBRUQsc0NBQVk7OztJQUFaO1FBQUEsaUJBT0M7UUFOQSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUNiLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksSUFBSSxTQUFTLEVBQWpCLENBQWlCLENBQUMsRUFDbkMsU0FBUyxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsRUFDNUQsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxJQUFJLFNBQVMsRUFBakIsQ0FBaUIsQ0FBQyxDQUNuQyxDQUFDO0tBQ0Y7Ozs7SUFDRCx3REFBOEI7OztJQUE5QjtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztLQUNIOztnQkF2RUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw4d0NBdUJKO2lCQUNOOzs7O2dCQW5DUSxLQUFLO2dCQUtMLGNBQWM7Z0JBR2QsV0FBVzs7MEJBVnBCOztTQXNDYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0UGFnZVN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBwbHVjaywgc3dpdGNoTWFwLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFnZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCI1MFwiPlxyXG4gICAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24+cmVjZWlwdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7Yp9uM2KzYp9ivINi12YHYrdmHINis2K/bjNivPC9zcGFuPlxyXG4gICAgICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgINmG2KfZhSDYtdmB2K3ZhyDYsdinINmI2KfYsdivINmG2YXYp9uM24zYryDZiCDYqNmHINmF2LHYrdmE2Ycg2KjYudivINio2LHZiNuM2K8gLi4uXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YbYp9mFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJ1cHNlcnQoKVwiPtir2KjYqjwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFVwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0cGFnZSQ6IE9ic2VydmFibGU8UGFnZU1vZGVsPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLl9pbml0X2Zvcm1ncm91cCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogdmlldyBtZXRob2RzXHJcblx0ICovXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBwYWdlID0ge1xyXG5cdFx0XHQuLi50aGlzLmZvcm1Hcm91cC52YWx1ZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFBhZ2VTdGFydEFjdGlvbihwYWdlKSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5fc2VsZWN0X3BhZ2UoKTtcclxuXHRcdHRoaXMuX3VwZGF0ZV9mb3JtZ3JvdXBfYmFzZV9vbl9wYWdlKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHRfaW5pdF9mb3JtZ3JvdXAoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRfaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRncmlkOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X3NlbGVjdF9wYWdlKCkge1xyXG5cdFx0dGhpcy5wYWdlJCA9IHRoaXMucm91dGUucGFyYW1zLnBpcGUoXHJcblx0XHRcdHBsdWNrKFwibmFtZVwiKSxcclxuXHRcdFx0ZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9IHVuZGVmaW5lZCksXHJcblx0XHRcdHN3aXRjaE1hcCgobmFtZTogc3RyaW5nKSA9PiB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlOYW1lKG5hbWUpKSxcclxuXHRcdFx0ZmlsdGVyKChwYWdlKSA9PiBwYWdlICE9IHVuZGVmaW5lZClcclxuXHRcdCk7XHJcblx0fVxyXG5cdF91cGRhdGVfZm9ybWdyb3VwX2Jhc2Vfb25fcGFnZSgpIHtcclxuXHRcdHRoaXMucGFnZSQuc3Vic2NyaWJlKChwYWdlKSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUocGFnZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
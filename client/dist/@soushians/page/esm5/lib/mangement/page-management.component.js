/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GetPagesStartAction } from "../services/api/get-pages/get-pages.actions";
import { DeletePageStartAction } from "../services/api";
var PagesManagementComponent = /** @class */ (function () {
    function PagesManagementComponent(store) {
        this.store = store;
        this.pages$ = this.store.select(function (state) { return state.pages.db.data; });
    }
    /**
     * @return {?}
     */
    PagesManagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new GetPagesStartAction());
    };
    /**
     * view methods
     */
    /**
     * view methods
     * @param {?} page
     * @return {?}
     */
    PagesManagementComponent.prototype.delete = /**
     * view methods
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.store.dispatch(new DeletePageStartAction(page._id));
    };
    PagesManagementComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\n  <div fXFlex fxLayout=\"row\">\n    <button  color=\"primary\" mat-mini-fab routerLink=\"../upsert\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n  <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\">\n    <mat-card class=\"cards-item\" *ngFor=\"let item of (pages$ | async)\" fxFlex=\"32\" fxLayout=\"row\">\n\n      <div fxFlex fxLayoutAlign=\"start center\">\n        {{item.name}}\n      </div>\n      <div fxFlex fxLayoutAlign=\"center center\">\n        {{item.type}}\n      </div>\n      <div fxLayout=\"row\" >\n          <div fxFlex=\"nogrow\">\n              <a mat-icon-button [routerLink]=\"['../upsert' , item.name]\">\n                <mat-icon aria-label=\"edit page\">edit</mat-icon>\n              </a>\n            </div>\n    \n        <div fxFlex=\"nogrow\">\n          <button mat-icon-button (click)=\"delete(item)\">\n            <mat-icon aria-label=\"delete page\">delete</mat-icon>\n          </button>\n        </div>\n                <div fxFlex=\"nogrow\">\n          <a mat-icon-button [routerLink]=\"['/page' , item.name]\">\n            <mat-icon aria-label=\"edit page\">remove_red_eye</mat-icon>\n          </a>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    PagesManagementComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return PagesManagementComponent;
}());
export { PagesManagementComponent };
function PagesManagementComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    PagesManagementComponent.prototype.pages$;
    /** @type {?} */
    PagesManagementComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQTBDdkQsa0NBQW1CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQW5CLENBQW1CLENBQUMsQ0FBQztLQUNoRTs7OztJQUNELDJDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0tBQy9DO0lBQ0Q7O09BRUc7Ozs7OztJQUNILHlDQUFNOzs7OztJQUFOLFVBQU8sSUFBZTtRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOztnQkFuREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwreENBbUNKO2lCQUNOOzs7O2dCQTVDUSxLQUFLOzttQ0FGZDs7U0ErQ2Esd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRQYWdlc1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtcGFnZXMvZ2V0LXBhZ2VzLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRGVsZXRlUGFnZVN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gIDxkaXYgZlhGbGV4IGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICA8YnV0dG9uICBjb2xvcj1cInByaW1hcnlcIiBtYXQtbWluaS1mYWIgcm91dGVyTGluaz1cIi4uL3Vwc2VydFwiPlxyXG4gICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjBweFwiPlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwiY2FyZHMtaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIChwYWdlcyQgfCBhc3luYylcIiBmeEZsZXg9XCIzMlwiIGZ4TGF5b3V0PVwicm93XCI+XHJcblxyXG4gICAgICA8ZGl2IGZ4RmxleCBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+XHJcbiAgICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgPlxyXG4gICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgICAgICA8YSBtYXQtaWNvbi1idXR0b24gW3JvdXRlckxpbmtdPVwiWycuLi91cHNlcnQnICwgaXRlbS5uYW1lXVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHBhZ2VcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGUoaXRlbSlcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJkZWxldGUgcGFnZVwiPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICA8YSBtYXQtaWNvbi1idXR0b24gW3JvdXRlckxpbmtdPVwiWycvcGFnZScgLCBpdGVtLm5hbWVdXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCBwYWdlXCI+cmVtb3ZlX3JlZF9leWU8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VzTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cGFnZXMkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5wYWdlcyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLnBhZ2VzLmRiLmRhdGEpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFBhZ2VzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdGRlbGV0ZShwYWdlOiBQYWdlTW9kZWwpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVBhZ2VTdGFydEFjdGlvbihwYWdlLl9pZCkpO1xyXG5cdH1cclxufVxyXG4iXX0=
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
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card class=\"with-sticky-action\">\n      <mat-card-header>\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-icon>settings_input_component</mat-icon>\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u063A\u062D\u0627\u062A</span>\n        </mat-card-title>\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n          </span>\n        </mat-card-subtitle>\n      </mat-card-header>\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"20px\">\n          <mat-card class=\"cards-item\" *ngFor=\"let item of (pages$ | async)\" fxFlex=\"32\" fxLayout=\"row\">\n\n            <div fxFlex fxLayoutAlign=\"start center\">\n              <h3> {{item.name}}</h3>\n            </div>\n            <div fxFlex fxLayoutAlign=\"center center\">\n              {{item.type}}\n            </div>\n            <div fxLayout=\"row\">\n              <div fxFlex=\"nogrow\">\n                <a mat-icon-button [routerLink]=\"['../upsert' , item.name]\">\n                  <mat-icon aria-label=\"edit page\">edit</mat-icon>\n                </a>\n              </div>\n\n              <div fxFlex=\"nogrow\">\n                <button mat-icon-button (click)=\"delete(item)\">\n                  <mat-icon aria-label=\"delete page\">delete</mat-icon>\n                </button>\n              </div>\n              <div fxFlex=\"nogrow\">\n                <a mat-icon-button [routerLink]=\"['/page' , item.name]\">\n                  <mat-icon aria-label=\"edit page\">remove_red_eye</mat-icon>\n                </a>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n      </div>\n    </mat-card>\n    <div fxLayout=\"column\" class=\"sticky-action\">\n      <a color=\"primary\" mat-mini-fab routerLink=\"../upsert\">\n        <mat-icon>add</mat-icon>\n      </a>\n    </div>\n  </div>\n</div>"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQTZEdkQsa0NBQW1CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQW5CLENBQW1CLENBQUMsQ0FBQztLQUNoRTs7OztJQUNELDJDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0tBQy9DO0lBQ0Q7O09BRUc7Ozs7OztJQUNILHlDQUFNOzs7OztJQUFOLFVBQU8sSUFBZTtRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOztnQkF0RUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtMkVBc0RKO2lCQUNOOzs7O2dCQS9EUSxLQUFLOzttQ0FGZDs7U0FrRWEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRQYWdlc1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtcGFnZXMvZ2V0LXBhZ2VzLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRGVsZXRlUGFnZVN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPnNldHRpbmdzX2lucHV0X2NvbXBvbmVudDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8c3Bhbj7Zhdiv24zYsduM2Kog2LXYutit2KfYqjwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgINi02KfZhdmEINiq2YXYp9mF24wg2K/Ysdiu2YjYp9iz2KrigIzZh9inINin2LIg2YLYqNuM2YQg2K/Yp9im2LHbjNiMINis2YXYueKAjNii2YjYsduMINmIIC4uLlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjIwcHhcIj5cclxuICAgICAgICAgIDxtYXQtY2FyZCBjbGFzcz1cImNhcmRzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAocGFnZXMkIHwgYXN5bmMpXCIgZnhGbGV4PVwiMzJcIiBmeExheW91dD1cInJvd1wiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz4ge3tpdGVtLm5hbWV9fTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleCBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIHt7aXRlbS50eXBlfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgbWF0LWljb24tYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnLi4vdXBzZXJ0JyAsIGl0ZW0ubmFtZV1cIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHBhZ2VcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGUoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJkZWxldGUgcGFnZVwiPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgbWF0LWljb24tYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnL3BhZ2UnICwgaXRlbS5uYW1lXVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgcGFnZVwiPnJlbW92ZV9yZWRfZXllPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L21hdC1jYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgY2xhc3M9XCJzdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxhIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0XCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHBhZ2VzJDogT2JzZXJ2YWJsZTxQYWdlTW9kZWxbXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMucGFnZXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5wYWdlcy5kYi5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQYWdlc1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiB2aWV3IG1ldGhvZHNcclxuXHQgKi9cclxuXHRkZWxldGUocGFnZTogUGFnZU1vZGVsKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVQYWdlU3RhcnRBY3Rpb24ocGFnZS5faWQpKTtcclxuXHR9XHJcbn1cclxuIl19
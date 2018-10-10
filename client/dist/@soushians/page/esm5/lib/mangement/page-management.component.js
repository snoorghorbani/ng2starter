/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card class=\"with-sticky-action\">\n      <mat-card-header>\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-icon>list_alt</mat-icon>\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u063A\u062D\u0627\u062A</span>\n        </mat-card-title>\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            \u062F\u0631 \u0627\u06CC\u0646 \u0642\u0633\u0645\u062A \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0635\u063A\u062D\u0627\u062A \u0628\u0627 \u06AF\u0631\u06CC\u062F\u0647\u0627\u06CC \u062F\u0644\u062E\u0648\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\n          </span>\n        </mat-card-subtitle>\n      </mat-card-header>\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n          <mat-card fxFlex.gt-lg=\"24\" fxFlex.lg=\"32\" fxFlex.md=\"48\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" class=\"link\" *ngFor=\"let item of (pages$ | async)\"\n            fxFlex=\"32\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <div fxFlex fxLayoutAlign=\"start center\">\n              <h3> {{item.name}}</h3>\n            </div>\n            <div fxFlex fxLayoutAlign=\"center center\">\n              {{item.type}}\n            </div>\n            <div fxLayout=\"row\">\n              <div fxFlex=\"nogrow\">\n                <a mat-icon-button [routerLink]=\"['../upsert' , item.name]\">\n                  <mat-icon aria-label=\"edit page\">edit</mat-icon>\n                </a>\n              </div>\n\n              <div fxFlex=\"nogrow\">\n                <button mat-icon-button (click)=\"delete(item)\">\n                  <mat-icon aria-label=\"delete page\">delete</mat-icon>\n                </button>\n              </div>\n              <div fxFlex=\"nogrow\">\n                <a mat-icon-button [routerLink]=\"['/page' , item.name]\">\n                  <mat-icon aria-label=\"edit page\">remove_red_eye</mat-icon>\n                </a>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n      </div>\n    </mat-card>\n    <div fxLayout=\"column\" class=\"sticky-action\">\n      <a color=\"primary\" mat-mini-fab routerLink=\"../upsert\">\n        <mat-icon>add</mat-icon>\n      </a>\n    </div>\n  </div>\n</div>",
                    styles: ["mat-card.link{padding:25px 15px;margin:.5%;box-sizing:border-box}"]
                },] },
    ];
    /** @nocollapse */
    PagesManagementComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return PagesManagementComponent;
}());
export { PagesManagementComponent };
if (false) {
    /** @type {?} */
    PagesManagementComponent.prototype.pages$;
    /** @type {?} */
    PagesManagementComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQThEdkQsa0NBQW1CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQW5CLENBQW1CLENBQUMsQ0FBQztLQUNoRTs7OztJQUNELDJDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0tBQy9DO0lBQ0Q7O09BRUc7Ozs7OztJQUNILHlDQUFNOzs7OztJQUFOLFVBQU8sSUFBZTtRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOztnQkF2RUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxvakZBc0RKO29CQUNOLE1BQU0sRUFBRSxDQUFDLG1FQUFtRSxDQUFDO2lCQUM3RTs7OztnQkFoRVEsS0FBSzs7bUNBRmQ7O1NBbUVhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0UGFnZXNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2VzL2dldC1wYWdlcy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERlbGV0ZVBhZ2VTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwid2l0aC1zdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5saXN0X2FsdDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8c3Bhbj7Zhdiv24zYsduM2Kog2LXYutit2KfYqjwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgINiv2LEg2KfbjNmGINmC2LPZhdiqINmF24zigIzYqtmI2KfZhtuM2K8g2LXYutit2KfYqiDYqNinINqv2LHbjNiv2YfYp9uMINiv2YTYrtmI2KfZhyDYrtmI2K8g2LHYpyDYp9uM2KzYp9ivINmG2YXYp9uM24zYryAuLi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXN1YnRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuXHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gICAgICAgICAgPG1hdC1jYXJkIGZ4RmxleC5ndC1sZz1cIjI0XCIgZnhGbGV4LmxnPVwiMzJcIiBmeEZsZXgubWQ9XCI0OFwiIGZ4RmxleC5zbT1cIjEwMFwiIGZ4RmxleC54cz1cIjEwMFwiIGNsYXNzPVwibGlua1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mIChwYWdlcyQgfCBhc3luYylcIlxyXG4gICAgICAgICAgICBmeEZsZXg9XCIzMlwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz4ge3tpdGVtLm5hbWV9fTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleCBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIHt7aXRlbS50eXBlfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgbWF0LWljb24tYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnLi4vdXBzZXJ0JyAsIGl0ZW0ubmFtZV1cIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHBhZ2VcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGUoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJkZWxldGUgcGFnZVwiPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgbWF0LWljb24tYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnL3BhZ2UnICwgaXRlbS5uYW1lXVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgcGFnZVwiPnJlbW92ZV9yZWRfZXllPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L21hdC1jYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgY2xhc3M9XCJzdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxhIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0XCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2BtYXQtY2FyZC5saW5re3BhZGRpbmc6MjVweCAxNXB4O21hcmdpbjouNSU7Ym94LXNpemluZzpib3JkZXItYm94fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlc01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHBhZ2VzJDogT2JzZXJ2YWJsZTxQYWdlTW9kZWxbXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMucGFnZXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5wYWdlcy5kYi5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQYWdlc1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiB2aWV3IG1ldGhvZHNcclxuXHQgKi9cclxuXHRkZWxldGUocGFnZTogUGFnZU1vZGVsKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVQYWdlU3RhcnRBY3Rpb24ocGFnZS5faWQpKTtcclxuXHR9XHJcbn1cclxuIl19
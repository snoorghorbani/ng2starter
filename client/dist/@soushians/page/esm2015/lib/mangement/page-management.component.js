/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GetPagesStartAction } from "../services/api/get-pages/get-pages.actions";
import { DeletePageStartAction } from "../services/api";
export class PagesManagementComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.pages$ = this.store.select((state) => state.pages.db.data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.dispatch(new GetPagesStartAction());
    }
    /**
     * view methods
     * @param {?} page
     * @return {?}
     */
    delete(page) {
        this.store.dispatch(new DeletePageStartAction(page._id));
    }
}
PagesManagementComponent.decorators = [
    { type: Component, args: [{
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>list_alt</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u063A\u062D\u0627\u062A</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u062F\u0631 \u0627\u06CC\u0646 \u0642\u0633\u0645\u062A \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0635\u063A\u062D\u0627\u062A \u0628\u0627 \u06AF\u0631\u06CC\u062F\u0647\u0627\u06CC \u062F\u0644\u062E\u0648\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n          <mat-card fxFlex.gt-lg=\"24\" fxFlex.lg=\"32\" fxFlex.md=\"48\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" class=\"link\" *ngFor=\"let item of (pages$ | async)\"\r\n            fxFlex=\"32\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div fxFlex fxLayoutAlign=\"start center\">\r\n              <h3> {{item.name}}</h3>\r\n            </div>\r\n            <div fxFlex fxLayoutAlign=\"center center\">\r\n              {{item.type}}\r\n            </div>\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex=\"nogrow\">\r\n                <a mat-icon-button [routerLink]=\"['../upsert' , item.name]\">\r\n                  <mat-icon aria-label=\"edit page\">edit</mat-icon>\r\n                </a>\r\n              </div>\r\n\r\n              <div fxFlex=\"nogrow\">\r\n                <button mat-icon-button (click)=\"delete(item)\">\r\n                  <mat-icon aria-label=\"delete page\">delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div fxFlex=\"nogrow\">\r\n                <a mat-icon-button [routerLink]=\"['/page' , item.name]\">\r\n                  <mat-icon aria-label=\"edit page\">remove_red_eye</mat-icon>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n    <div fxLayout=\"column\" class=\"sticky-action\">\r\n      <a color=\"primary\" mat-mini-fab routerLink=\"../upsert\">\r\n        <mat-icon>add</mat-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["mat-card.link{padding:25px 15px;margin:.5%;box-sizing:border-box}"]
            }] }
];
/** @nocollapse */
PagesManagementComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    PagesManagementComponent.prototype.pages$;
    /** @type {?} */
    PagesManagementComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9tYW5nZW1lbnQvcGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTXhELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFFcEMsWUFBbUIsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEU7Ozs7SUFDRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7S0FDL0M7Ozs7OztJQUlELE1BQU0sQ0FBQyxJQUFlO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDekQ7OztZQWpCRCxTQUFTLFNBQUM7Z0JBQ1YsMHFGQUE2Qzs7YUFFN0M7Ozs7WUFWUSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRQYWdlc1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtcGFnZXMvZ2V0LXBhZ2VzLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRGVsZXRlUGFnZVN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGVVcmw6IFwicGFnZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCJwYWdlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VzTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cGFnZXMkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5wYWdlcyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLnBhZ2VzLmRiLmRhdGEpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFBhZ2VzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdGRlbGV0ZShwYWdlOiBQYWdlTW9kZWwpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVBhZ2VTdGFydEFjdGlvbihwYWdlLl9pZCkpO1xyXG5cdH1cclxufVxyXG4iXX0=
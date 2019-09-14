/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
var FormListComponent = /** @class */ (function () {
    function FormListComponent() {
    }
    FormListComponent.decorators = [
        { type: Component, args: [{
                    selector: "form-list",
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>assignment</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0631\u0645 \u0647\u0627</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\r\n\r\n        <button fxFlex.lt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"32\" fxFlex.sm=\"49\" fxFlex.xs=\"100\" class='link'\r\n          mat-raised-button [routerLink]=\"['edit' ,  item._id]\" *ngFor=\"let item of (data$ | async)\">\r\n          <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>settings</mat-icon>\r\n            <h3 class='title'>{{item.name}}</h3>\r\n          </div>\r\n        </button>\r\n\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>",
                    styles: ["button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}"]
                }] }
    ];
    FormListComponent.propDecorators = {
        data$: [{ type: Input, args: ["data",] }]
    };
    return FormListComponent;
}());
export { FormListComponent };
if (false) {
    /** @type {?} */
    FormListComponent.prototype.data$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9saXN0L2Zvcm0tbGlzdC9mb3JtLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJN0M7SUFBQTtJQVFBLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsV0FBVztvQkFDckIscytDQUF5Qzs7aUJBRXpDOzs7d0JBR0MsS0FBSyxTQUFDLE1BQU07O0lBQ2Qsd0JBQUM7Q0FBQSxBQVJELElBUUM7U0FIWSxpQkFBaUI7OztJQUU3QixrQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImZvcm0tbGlzdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZm9ybS1saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCIuL2Zvcm0tbGlzdC5jb21wb25lbnQuc2Nzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUxpc3RDb21wb25lbnQge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHRASW5wdXQoXCJkYXRhXCIpIGRhdGEkOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPjtcclxufVxyXG4iXX0=
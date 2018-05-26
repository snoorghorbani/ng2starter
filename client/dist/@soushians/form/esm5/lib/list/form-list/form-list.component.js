/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
var FormListComponent = /** @class */ (function () {
    function FormListComponent() {
    }
    return FormListComponent;
}());
export { FormListComponent };
FormListComponent.decorators = [
    { type: Component, args: [{
                selector: "form-list",
                template: "<div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\" >\n    <mat-card class=\"cards-item\" *ngFor=\"let item of (data$ | async)\" fxFlex=\"51\">\n      <h3>\n        <a [routerLink]=\"['edit' ,  item._id]\">\n          <mat-icon aria-label=\"edit form\">edit</mat-icon>\n        </a>\n        {{item.name}}\n      </h3>\n  </mat-card>\n</div>"
            },] },
];
FormListComponent.propDecorators = {
    data$: [{ type: Input, args: ["data",] }]
};
function FormListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FormListComponent.prototype.data$;
}
//# sourceMappingURL=form-list.component.js.map

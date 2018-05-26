/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
var NumberComponent = /** @class */ (function () {
    function NumberComponent() {
    }
    /**
     * @return {?}
     */
    NumberComponent.prototype.ngOnInit = function () { };
    return NumberComponent;
}());
export { NumberComponent };
NumberComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-number",
                template: "<div  [formGroup]=\"form\">\n    <mat-form-field fxFlexFill>\n        <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n    </mat-form-field>\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
NumberComponent.ctorParameters = function () { return []; };
NumberComponent.propDecorators = {
    form: [{ type: Input }],
    schema: [{ type: Input }]
};
function NumberComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NumberComponent.prototype.form;
    /** @type {?} */
    NumberComponent.prototype.schema;
}
//# sourceMappingURL=number.component.js.map

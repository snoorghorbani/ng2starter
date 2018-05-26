/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
var ColorComponent = /** @class */ (function () {
    function ColorComponent() {
    }
    /**
     * @return {?}
     */
    ColorComponent.prototype.ngOnInit = function () { };
    return ColorComponent;
}());
export { ColorComponent };
ColorComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-color",
                template: "<div  [formGroup]=\"form\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n</mat-form-field>\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
ColorComponent.ctorParameters = function () { return []; };
ColorComponent.propDecorators = {
    form: [{ type: Input }],
    schema: [{ type: Input }]
};
function ColorComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ColorComponent.prototype.config;
    /** @type {?} */
    ColorComponent.prototype.group;
    /** @type {?} */
    ColorComponent.prototype.form;
    /** @type {?} */
    ColorComponent.prototype.schema;
}
//# sourceMappingURL=color.component.js.map

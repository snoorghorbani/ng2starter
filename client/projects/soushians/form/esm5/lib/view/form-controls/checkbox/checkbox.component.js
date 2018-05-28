/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    return CheckboxComponent;
}());
export { CheckboxComponent };
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-checkbox",
                template: "<div [formGroup]=\"group\">\n    <mat-checkbox [formControlName]=\"config.name\">\n        {{config.title}}\n    </mat-checkbox>\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = function () { return []; };
function CheckboxComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CheckboxComponent.prototype.config;
    /** @type {?} */
    CheckboxComponent.prototype.group;
}
//# sourceMappingURL=checkbox.component.js.map

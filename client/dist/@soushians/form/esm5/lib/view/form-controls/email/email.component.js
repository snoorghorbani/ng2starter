/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    /**
     * @return {?}
     */
    EmailComponent.prototype.ngOnInit = function () { };
    return EmailComponent;
}());
export { EmailComponent };
EmailComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-email",
                template: "<div  [formGroup]=\"group\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n</mat-form-field>\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
EmailComponent.ctorParameters = function () { return []; };
function EmailComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EmailComponent.prototype.config;
    /** @type {?} */
    EmailComponent.prototype.group;
}
//# sourceMappingURL=email.component.js.map

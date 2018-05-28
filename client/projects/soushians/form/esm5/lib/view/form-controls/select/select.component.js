/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    return SelectComponent;
}());
export { SelectComponent };
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-select",
                template: "<div  [formGroup]=\"group\">\n<mat-form-field>\n    <mat-select [formControlName]=\"config.name\" [placeholder]=\"config.title\">\n      <mat-option *ngFor=\"let option of config.options\" [value]=\"option.value\">{{option.key}}</mat-option>\n    </mat-select>\n</mat-form-field>\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = function () { return []; };
function SelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectComponent.prototype.config;
    /** @type {?} */
    SelectComponent.prototype.group;
}
//# sourceMappingURL=select.component.js.map

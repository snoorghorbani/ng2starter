/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    return TextComponent;
}());
export { TextComponent };
TextComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-text",
                template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\n\n  <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\n    {{config.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\n    {{config.validator.minlength.message}}\n  </mat-error>\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\n    {{config.validator.email.message}}\n  </mat-error> -->\n\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\n  </div> -->\n\n</mat-form-field>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
TextComponent.ctorParameters = function () { return []; };
function TextComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TextComponent.prototype.config;
    /** @type {?} */
    TextComponent.prototype.group;
}
//# sourceMappingURL=text.component.js.map

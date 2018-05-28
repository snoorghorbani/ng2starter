/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
export class CheckboxComponent {
    constructor() { }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-checkbox",
                template: `<div [formGroup]="group">
    <mat-checkbox [formControlName]="config.name">
        {{config.title}}
    </mat-checkbox>
</div>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
function CheckboxComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CheckboxComponent.prototype.config;
    /** @type {?} */
    CheckboxComponent.prototype.group;
}
//# sourceMappingURL=checkbox.component.js.map

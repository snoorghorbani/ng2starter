/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
export class EmailComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
EmailComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-email",
                template: `<div  [formGroup]="group">
<mat-form-field fxFlexFill>
    <input matInput [type]="config.inputType" [placeholder]="config.title" [formControlName]="config.name">
</mat-form-field>
</div>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
];
/** @nocollapse */
EmailComponent.ctorParameters = () => [];
function EmailComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EmailComponent.prototype.config;
    /** @type {?} */
    EmailComponent.prototype.group;
}
//# sourceMappingURL=email.component.js.map

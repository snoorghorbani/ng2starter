/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../models";
export class ColorComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ColorComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-color",
                template: `<div  [formGroup]="form">
<mat-form-field fxFlexFill>
    <input matInput [type]="schema.inputType" [placeholder]="schema.title" [formControlName]="schema.name">
</mat-form-field>
</div>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
];
/** @nocollapse */
ColorComponent.ctorParameters = () => [];
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

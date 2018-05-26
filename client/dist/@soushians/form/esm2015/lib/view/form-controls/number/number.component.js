/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../models";
export class NumberComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
NumberComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-number",
                template: `<div  [formGroup]="form">
    <mat-form-field fxFlexFill>
        <input matInput [type]="schema.inputType" [placeholder]="schema.title" [formControlName]="schema.name">
    </mat-form-field>
</div>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
];
/** @nocollapse */
NumberComponent.ctorParameters = () => [];
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

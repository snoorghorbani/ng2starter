/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
export class SelectComponent {
    constructor() { }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-form-control-select",
                template: `<div  [formGroup]="group">
<mat-form-field>
    <mat-select [formControlName]="config.name" [placeholder]="config.title">
      <mat-option *ngFor="let option of config.options" [value]="option.value">{{option.key}}</mat-option>
    </mat-select>
</mat-form-field>
</div>`,
                styles: [`:host{display:block}.mat-form-field{width:100%}`]
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
function SelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectComponent.prototype.config;
    /** @type {?} */
    SelectComponent.prototype.group;
}
//# sourceMappingURL=select.component.js.map

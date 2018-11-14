/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    NumberComponent.prototype.form;
    /** @type {?} */
    NumberComponent.prototype.schema;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2Zvcm0tY29udHJvbHMvbnVtYmVyL251bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFXOUMsTUFBTTtJQUdMLGlCQUFnQjs7OztJQUVoQixRQUFRLE1BQUs7OztZQWRiLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7T0FJSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMzRDs7Ozs7bUJBRUMsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtbnVtYmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
export class GivenUserIsAuthenticatedStepComponent {
    constructor() {
        this.formGroup = new FormGroup({
            role: new FormControl("")
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set params(value) {
        this.formGroup.patchValue(value);
    }
    /**
     * @return {?}
     */
    get params() {
        return this.formGroup.value;
    }
}
GivenUserIsAuthenticatedStepComponent.decorators = [
    { type: Component, args: [{
                template: `<mat-card class="step" fxLayout="row" fxLayoutGap="25px" fxLayoutAlign="center end">
  <div class="step-text" fxFlex="nogrow">
    <span class="given">
        هنگامی که
    </span>
    کاربر احراز هویت کرده است
    </div>
</mat-card>`,
                styles: [`:host{width:100%}`]
            },] },
];
/** @nocollapse */
GivenUserIsAuthenticatedStepComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    GivenUserIsAuthenticatedStepComponent.prototype.formGroup;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkL3N0ZXAtY29tcG9uZW50L2dpdmVuLXVzZXItaXMtYXV0aGVudGljYXRlZC1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0J4RCxNQUFNLE9BQU8scUNBQXFDO0lBVWpEO1FBVEEsaUJBQXVCLElBQUksU0FBUyxDQUFDO1lBQ3BDLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBT2E7Ozs7O0lBTmhCLElBQUksTUFBTSxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQzs7OztJQUNELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDNUI7OztZQXBCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7O1lBT0M7Z0JBQ1gsTUFBTSxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEd3dEdpdmVuU3RlcFVpIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5pbXBvcnQgeyBVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zIH0gZnJvbSBcIi4uL3VzZXItaXMtYXV0aGVudGljYXRlZC5nd3QtZ2l2ZW4tc3RlcC1wYXJhbXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGNsYXNzPVwic3RlcFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBlbmRcIj5cclxuICA8ZGl2IGNsYXNzPVwic3RlcC10ZXh0XCIgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImdpdmVuXCI+XHJcbiAgICAgICAg2YfZhtqv2KfZhduMINqp2YdcclxuICAgIDwvc3Bhbj5cclxuICAgINqp2KfYsdio2LEg2KfYrdix2KfYsiDZh9mI24zYqiDaqdix2K/ZhyDYp9iz2KpcclxuICAgIDwvZGl2PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdpdmVuVXNlcklzQXV0aGVudGljYXRlZFN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBHd3RHaXZlblN0ZXBVaTxVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zPiB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdHJvbGU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdH0pO1xyXG5cdHNldCBwYXJhbXModmFsdWUpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUodmFsdWUpO1xyXG5cdH1cclxuXHRnZXQgcGFyYW1zKCk6IFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXMge1xyXG5cdFx0cmV0dXJuIHRoaXMuZm9ybUdyb3VwLnZhbHVlO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19
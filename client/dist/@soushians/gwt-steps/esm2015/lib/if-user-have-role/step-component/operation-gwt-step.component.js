/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
export class IfUserHaveRoleGwtGivenStepComponent {
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
IfUserHaveRoleGwtGivenStepComponent.decorators = [
    { type: Component, args: [{
                template: `<mat-card class="step" fxLayout="row" fxLayoutGap="25px" fxLayoutAlign="center end">
  <div class="step-text" fxFlex="nogrow">
    <span class="given">
        هنگامی که
    </span>
    کاربر نقش
    </div>
  <div fxFlex [formGroup]="formGroup">
    <mat-form-field>
      <input matInput placeholder="دسترسی" formControlName="role">
    </mat-form-field>
  </div>
  <div class="step-text" fxFlex="nogrow">دارد</div>
</mat-card>`,
                styles: [`:host{width:100%}`]
            },] },
];
/** @nocollapse */
IfUserHaveRoleGwtGivenStepComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    IfUserHaveRoleGwtGivenStepComponent.prototype.formGroup;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9uLWd3dC1zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3d0LXN0ZXBzLyIsInNvdXJjZXMiOlsibGliL2lmLXVzZXItaGF2ZS1yb2xlL3N0ZXAtY29tcG9uZW50L29wZXJhdGlvbi1nd3Qtc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXFCeEQsTUFBTSxPQUFPLG1DQUFtQztJQVUvQztRQVRBLGlCQUF1QixJQUFJLFNBQVMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQU9hOzs7OztJQU5oQixJQUFJLE1BQU0sQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7SUFDRCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQzVCOzs7WUExQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztZQWFDO2dCQUNYLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEd3dEdpdmVuU3RlcFVpIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5pbXBvcnQgeyBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcyB9IGZyb20gXCIuLi91c2VyLWhhdmUtcm9sZS5nd3QtZ2l2ZW4tc3RlcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgY2xhc3M9XCJzdGVwXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGVuZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJzdGVwLXRleHRcIiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZ2l2ZW5cIj5cclxuICAgICAgICDZh9mG2q/Yp9mF24wg2qnZh1xyXG4gICAgPC9zcGFuPlxyXG4gICAg2qnYp9ix2KjYsSDZhtmC2LRcclxuICAgIDwvZGl2PlxyXG4gIDxkaXYgZnhGbGV4IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItiv2LPYqtix2LPbjFwiIGZvcm1Db250cm9sTmFtZT1cInJvbGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInN0ZXAtdGV4dFwiIGZ4RmxleD1cIm5vZ3Jvd1wiPtiv2KfYsdivPC9kaXY+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBHd3RHaXZlblN0ZXBVaTxJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcz4ge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRyb2xlOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHR9KTtcclxuXHRzZXQgcGFyYW1zKHZhbHVlKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHZhbHVlKTtcclxuXHR9XHJcblx0Z2V0IHBhcmFtcygpOiBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcyB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JtR3JvdXAudmFsdWU7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=
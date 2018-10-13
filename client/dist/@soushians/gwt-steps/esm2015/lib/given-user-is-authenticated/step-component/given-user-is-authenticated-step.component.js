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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkL3N0ZXAtY29tcG9uZW50L2dpdmVuLXVzZXItaXMtYXV0aGVudGljYXRlZC1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0J4RCxNQUFNO0lBVUw7eUJBVHVCLElBQUksU0FBUyxDQUFDO1lBQ3BDLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekIsQ0FBQztLQU9jOzs7OztJQU5oQixJQUFJLE1BQU0sQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7SUFDRCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQzVCOzs7WUFwQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7OztZQU9DO2dCQUNYLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RHaXZlblN0ZXBVaSB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuaW1wb3J0IHsgVXNlcklzQXV0aGVudGljYXRlZEd3dEdpdmVuU3RlcFBhcmFtcyB9IGZyb20gXCIuLi91c2VyLWlzLWF1dGhlbnRpY2F0ZWQuZ3d0LWdpdmVuLXN0ZXAtcGFyYW1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBjbGFzcz1cInN0ZXBcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgZW5kXCI+XHJcbiAgPGRpdiBjbGFzcz1cInN0ZXAtdGV4dFwiIGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJnaXZlblwiPlxyXG4gICAgICAgINmH2Ybar9in2YXbjCDaqdmHXHJcbiAgICA8L3NwYW4+XHJcbiAgICDaqdin2LHYqNixINin2K3Ysdin2LIg2YfZiNuM2Kog2qnYsdiv2Ycg2KfYs9iqXHJcbiAgICA8L2Rpdj5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHaXZlblVzZXJJc0F1dGhlbnRpY2F0ZWRTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgR3d0R2l2ZW5TdGVwVWk8VXNlcklzQXV0aGVudGljYXRlZEd3dEdpdmVuU3RlcFBhcmFtcz4ge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRyb2xlOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHR9KTtcclxuXHRzZXQgcGFyYW1zKHZhbHVlKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHZhbHVlKTtcclxuXHR9XHJcblx0Z2V0IHBhcmFtcygpOiBVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zIHtcclxuXHRcdHJldHVybiB0aGlzLmZvcm1Hcm91cC52YWx1ZTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==
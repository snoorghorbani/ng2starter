/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
var GivenUserIsAuthenticatedStepComponent = /** @class */ (function () {
    function GivenUserIsAuthenticatedStepComponent() {
        this.formGroup = new FormGroup({
            role: new FormControl("")
        });
    }
    Object.defineProperty(GivenUserIsAuthenticatedStepComponent.prototype, "params", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formGroup.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.formGroup.patchValue(value);
        },
        enumerable: true,
        configurable: true
    });
    GivenUserIsAuthenticatedStepComponent.decorators = [
        { type: Component, args: [{
                    template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center end\">\n  <div class=\"step-text\" fxFlex=\"nogrow\">\n    <span class=\"given\">\n        \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647\n    </span>\n    \u06A9\u0627\u0631\u0628\u0631 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A\n    </div>\n</mat-card>",
                    styles: [":host{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    GivenUserIsAuthenticatedStepComponent.ctorParameters = function () { return []; };
    return GivenUserIsAuthenticatedStepComponent;
}());
export { GivenUserIsAuthenticatedStepComponent };
if (false) {
    /** @type {?} */
    GivenUserIsAuthenticatedStepComponent.prototype.formGroup;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkL3N0ZXAtY29tcG9uZW50L2dpdmVuLXVzZXItaXMtYXV0aGVudGljYXRlZC1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQTBCdkQ7UUFUQSxpQkFBdUIsSUFBSSxTQUFTLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FPYTtJQU5oQixzQkFBSSx5REFBTTs7OztRQUdWO1lBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUM1Qjs7Ozs7UUFMRCxVQUFXLEtBQUs7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzs7O09BQUE7O2dCQWpCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtaQU9DO29CQUNYLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUM3Qjs7OztnREFoQkQ7O1NBaUJhLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgR3d0R2l2ZW5TdGVwVWkgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcbmltcG9ydCB7IFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXMgfSBmcm9tIFwiLi4vdXNlci1pcy1hdXRoZW50aWNhdGVkLmd3dC1naXZlbi1zdGVwLXBhcmFtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgY2xhc3M9XCJzdGVwXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGVuZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJzdGVwLXRleHRcIiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZ2l2ZW5cIj5cclxuICAgICAgICDZh9mG2q/Yp9mF24wg2qnZh1xyXG4gICAgPC9zcGFuPlxyXG4gICAg2qnYp9ix2KjYsSDYp9it2LHYp9iyINmH2YjbjNiqINqp2LHYr9mHINin2LPYqlxyXG4gICAgPC9kaXY+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2l2ZW5Vc2VySXNBdXRoZW50aWNhdGVkU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIEd3dEdpdmVuU3RlcFVpPFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXM+IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0cm9sZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0fSk7XHJcblx0c2V0IHBhcmFtcyh2YWx1ZSkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh2YWx1ZSk7XHJcblx0fVxyXG5cdGdldCBwYXJhbXMoKTogVXNlcklzQXV0aGVudGljYXRlZEd3dEdpdmVuU3RlcFBhcmFtcyB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JtR3JvdXAudmFsdWU7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center end\">\r\n  <div class=\"step-text\" fxFlex=\"nogrow\">\r\n    <span class=\"given\">\r\n        \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647\r\n    </span>\r\n    \u06A9\u0627\u0631\u0628\u0631 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A\r\n    </div>\r\n</mat-card>",
                    styles: [":host{width:100%}"]
                }] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkL3N0ZXAtY29tcG9uZW50L2dpdmVuLXVzZXItaXMtYXV0aGVudGljYXRlZC1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3hEO0lBY0M7UUFUQSxjQUFTLEdBQWMsSUFBSSxTQUFTLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7SUFPWSxDQUFDO0lBTmhCLHNCQUFJLHlEQUFNOzs7O1FBR1Y7WUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzdCLENBQUM7Ozs7O1FBTEQsVUFBVyxLQUFLO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7O2dCQVZELFNBQVMsU0FBQztvQkFDViwwYUFBZ0U7O2lCQUVoRTs7OztJQVlELDRDQUFDO0NBQUEsQUFmRCxJQWVDO1NBWFkscUNBQXFDOzs7SUFDakQsMERBRUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEd3dEdpdmVuU3RlcFVpIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5pbXBvcnQgeyBVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zIH0gZnJvbSBcIi4uL3VzZXItaXMtYXV0aGVudGljYXRlZC5nd3QtZ2l2ZW4tc3RlcC1wYXJhbXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkLXN0ZXAuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL2dpdmVuLXVzZXItaXMtYXV0aGVudGljYXRlZC1zdGVwLmNvbXBvbmVudC5jc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHaXZlblVzZXJJc0F1dGhlbnRpY2F0ZWRTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgR3d0R2l2ZW5TdGVwVWk8VXNlcklzQXV0aGVudGljYXRlZEd3dEdpdmVuU3RlcFBhcmFtcz4ge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRyb2xlOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHR9KTtcclxuXHRzZXQgcGFyYW1zKHZhbHVlKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHZhbHVlKTtcclxuXHR9XHJcblx0Z2V0IHBhcmFtcygpOiBVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zIHtcclxuXHRcdHJldHVybiB0aGlzLmZvcm1Hcm91cC52YWx1ZTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==
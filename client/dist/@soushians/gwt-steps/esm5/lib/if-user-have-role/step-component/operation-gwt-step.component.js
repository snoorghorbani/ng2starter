/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
var IfUserHaveRoleGwtGivenStepComponent = /** @class */ (function () {
    function IfUserHaveRoleGwtGivenStepComponent() {
        this.formGroup = new FormGroup({
            role: new FormControl("")
        });
    }
    Object.defineProperty(IfUserHaveRoleGwtGivenStepComponent.prototype, "params", {
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
    IfUserHaveRoleGwtGivenStepComponent.decorators = [
        { type: Component, args: [{
                    template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center end\">\n  <div class=\"step-text\" fxFlex=\"nogrow\">\n    <span class=\"given\">\n        \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647\n    </span>\n    \u06A9\u0627\u0631\u0628\u0631 \u0646\u0642\u0634\n    </div>\n  <div fxFlex [formGroup]=\"formGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u062F\u0633\u062A\u0631\u0633\u06CC\" formControlName=\"role\">\n    </mat-form-field>\n  </div>\n  <div class=\"step-text\" fxFlex=\"nogrow\">\u062F\u0627\u0631\u062F</div>\n</mat-card>",
                    styles: [":host{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    IfUserHaveRoleGwtGivenStepComponent.ctorParameters = function () { return []; };
    return IfUserHaveRoleGwtGivenStepComponent;
}());
export { IfUserHaveRoleGwtGivenStepComponent };
function IfUserHaveRoleGwtGivenStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    IfUserHaveRoleGwtGivenStepComponent.prototype.formGroup;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9uLWd3dC1zdGVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3d0LXN0ZXBzLyIsInNvdXJjZXMiOlsibGliL2lmLXVzZXItaGF2ZS1yb2xlL3N0ZXAtY29tcG9uZW50L29wZXJhdGlvbi1nd3Qtc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUErQnZEO3lCQVR1QixJQUFJLFNBQVMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUM7S0FPYztJQU5oQixzQkFBSSx1REFBTTs7OztRQUdWO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQzVCOzs7OztRQUxELFVBQVcsS0FBSztZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDOzs7T0FBQTs7Z0JBdkJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscWxCQWFDO29CQUNYLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUM3Qjs7Ozs4Q0FyQkQ7O1NBc0JhLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBHd3RHaXZlblN0ZXBVaSB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuaW1wb3J0IHsgSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBQYXJhbXMgfSBmcm9tIFwiLi4vdXNlci1oYXZlLXJvbGUuZ3d0LWdpdmVuLXN0ZXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGNsYXNzPVwic3RlcFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBlbmRcIj5cclxuICA8ZGl2IGNsYXNzPVwic3RlcC10ZXh0XCIgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImdpdmVuXCI+XHJcbiAgICAgICAg2YfZhtqv2KfZhduMINqp2YdcclxuICAgIDwvc3Bhbj5cclxuICAgINqp2KfYsdio2LEg2YbZgti0XHJcbiAgICA8L2Rpdj5cclxuICA8ZGl2IGZ4RmxleCBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYr9iz2KrYsdiz24xcIiBmb3JtQ29udHJvbE5hbWU9XCJyb2xlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzdGVwLXRleHRcIiBmeEZsZXg9XCJub2dyb3dcIj7Yr9in2LHYrzwvZGl2PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwQ29tcG9uZW50IGltcGxlbWVudHMgR3d0R2l2ZW5TdGVwVWk8SWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBQYXJhbXM+IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0cm9sZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0fSk7XHJcblx0c2V0IHBhcmFtcyh2YWx1ZSkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh2YWx1ZSk7XHJcblx0fVxyXG5cdGdldCBwYXJhbXMoKTogSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBQYXJhbXMge1xyXG5cdFx0cmV0dXJuIHRoaXMuZm9ybUdyb3VwLnZhbHVlO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19
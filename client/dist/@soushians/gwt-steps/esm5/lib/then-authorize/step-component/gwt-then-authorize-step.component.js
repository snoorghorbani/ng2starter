/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
var GwtThenAuthorizeStepComponent = /** @class */ (function () {
    function GwtThenAuthorizeStepComponent() {
        var _this = this;
        this.params$ = new BehaviorSubject(/** @type {?} */ ({}));
        this.formGroup = this._create_formGroup();
        this.params$.subscribe(function (params) { return _this.formGroup.patchValue(params); });
    }
    Object.defineProperty(GwtThenAuthorizeStepComponent.prototype, "params", {
        get: /**
         * @return {?}
         */
        function () {
            return Object.assign({}, this.formGroup.value);
        },
        set: /**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (this.formGroup) {
                this.formGroup.patchValue(params);
            }
            this.params$.next(params);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * private methods
     */
    /**
     * private methods
     * @return {?}
     */
    GwtThenAuthorizeStepComponent.prototype._create_formGroup = /**
     * private methods
     * @return {?}
     */
    function () {
        return new FormGroup({
            verb: new FormControl("hidden")
        });
    };
    GwtThenAuthorizeStepComponent.decorators = [
        { type: Component, args: [{
                    template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"start end\" [formGroup]=\"formGroup\">\n  <div fxFlex=\"0 0 auto\" class=\"step-text then\">\n    \u0622\u0646\u06AF\u0627\u0647\n  </div>\n  <div fxFlex=\"0 0 auto\" class=\"step-text\">\n    \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0642\u0627\u0628\u0644 \u0646\u0645\u0627\u06CC\u0634\n  </div>\n  <div fxFlex=\"nogrow\">\n    <mat-form-field fxFlex=\"nogrow\">\n      <mat-select formControlName=\"verb\">\n        <mat-option value=\"visible\">\u0628\u0627\u0634\u062F</mat-option>\n        <mat-option value=\"hidden\">\u0646\u0628\u0627\u0634\u062F</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</mat-card>",
                    styles: [":host{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    GwtThenAuthorizeStepComponent.ctorParameters = function () { return []; };
    return GwtThenAuthorizeStepComponent;
}());
export { GwtThenAuthorizeStepComponent };
function GwtThenAuthorizeStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    GwtThenAuthorizeStepComponent.prototype.formGroup;
    /** @type {?} */
    GwtThenAuthorizeStepComponent.prototype.params$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvdGhlbi1hdXRob3JpemUvc3RlcC1jb21wb25lbnQvZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFrQ3RDO1FBQUEsaUJBR0M7dUJBYlMsSUFBSSxlQUFlLG1CQUE2QixFQUFnQyxFQUFDO1FBVzFGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO0tBQ3BFO0lBWkQsc0JBQUksaURBQU07Ozs7UUFNVjtZQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DOzs7OztRQVJELFVBQVcsTUFBTTtZQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEM7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxQjs7O09BQUE7SUFTRDs7T0FFRzs7Ozs7SUFDSCx5REFBaUI7Ozs7SUFBakI7UUFDQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUM7WUFDcEIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7S0FDSDs7Z0JBM0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMHNCQWVDO29CQUNYLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUM3Qjs7Ozt3Q0F6QkQ7O1NBMEJhLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3d0VGhlblN0ZXBVaSB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcyB9IGZyb20gXCIuLi9hdXRob3JpemUuZ3d0LXRoZW4tc3RlcFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGNsYXNzPVwic3RlcFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIiBmeExheW91dEFsaWduPVwic3RhcnQgZW5kXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICA8ZGl2IGZ4RmxleD1cIjAgMCBhdXRvXCIgY2xhc3M9XCJzdGVwLXRleHQgdGhlblwiPlxyXG4gICAg2KLZhtqv2KfZh1xyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhGbGV4PVwiMCAwIGF1dG9cIiBjbGFzcz1cInN0ZXAtdGV4dFwiPlxyXG4gICAg2KfbjNmGINio2K7YtCDZgtin2KjZhCDZhtmF2KfbjNi0XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwidmVyYlwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidmlzaWJsZVwiPtio2KfYtNivPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiaGlkZGVuXCI+2YbYqNin2LTYrzwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Rpdj5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHd3RUaGVuQXV0aG9yaXplU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIEd3dFRoZW5TdGVwVWk8YW55PiB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0cGFyYW1zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXM+KHt9IGFzIFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zKTtcclxuXHRzZXQgcGFyYW1zKHBhcmFtcykge1xyXG5cdFx0aWYgKHRoaXMuZm9ybUdyb3VwKSB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUocGFyYW1zKTtcclxuXHRcdH1cclxuXHRcdHRoaXMucGFyYW1zJC5uZXh0KHBhcmFtcyk7XHJcblx0fVxyXG5cdGdldCBwYXJhbXMoKTogVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXMge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuX2NyZWF0ZV9mb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMucGFyYW1zJC5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUocGFyYW1zKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHRfY3JlYXRlX2Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0dmVyYjogbmV3IEZvcm1Db250cm9sKFwiaGlkZGVuXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
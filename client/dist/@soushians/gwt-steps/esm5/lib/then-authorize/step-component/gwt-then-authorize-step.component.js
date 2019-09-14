/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
var GwtThenAuthorizeStepComponent = /** @class */ (function () {
    function GwtThenAuthorizeStepComponent() {
        var _this = this;
        this.params$ = new BehaviorSubject((/** @type {?} */ ({})));
        this.formGroup = this._create_formGroup();
        this.params$.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) { return _this.formGroup.patchValue(params); }));
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
                    template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"start end\" [formGroup]=\"formGroup\">\r\n  <div fxFlex=\"0 0 auto\" class=\"step-text then\">\r\n    \u0622\u0646\u06AF\u0627\u0647\r\n  </div>\r\n  <div fxFlex=\"0 0 auto\" class=\"step-text\">\r\n    \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0642\u0627\u0628\u0644 \u0646\u0645\u0627\u06CC\u0634\r\n  </div>\r\n  <div fxFlex=\"nogrow\">\r\n    <mat-form-field fxFlex=\"nogrow\">\r\n      <mat-select formControlName=\"verb\">\r\n        <mat-option value=\"visible\">\u0628\u0627\u0634\u062F</mat-option>\r\n        <mat-option value=\"hidden\">\u0646\u0628\u0627\u0634\u062F</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-card>",
                    styles: [":host{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    GwtThenAuthorizeStepComponent.ctorParameters = function () { return []; };
    return GwtThenAuthorizeStepComponent;
}());
export { GwtThenAuthorizeStepComponent };
if (false) {
    /** @type {?} */
    GwtThenAuthorizeStepComponent.prototype.formGroup;
    /** @type {?} */
    GwtThenAuthorizeStepComponent.prototype.params$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvdGhlbi1hdXRob3JpemUvc3RlcC1jb21wb25lbnQvZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2QztJQWdCQztRQUFBLGlCQUdDO1FBYkQsWUFBTyxHQUFHLElBQUksZUFBZSxDQUE2QixtQkFBQSxFQUFFLEVBQThCLENBQUMsQ0FBQztRQVczRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQWpDLENBQWlDLEVBQUMsQ0FBQztJQUNyRSxDQUFDO0lBWkQsc0JBQUksaURBQU07Ozs7UUFNVjtZQUNDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7OztRQVJELFVBQVcsTUFBTTtZQUNoQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFTRDs7T0FFRzs7Ozs7SUFDSCx5REFBaUI7Ozs7SUFBakI7UUFDQyxPQUFPLElBQUksU0FBUyxDQUFDO1lBQ3BCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBNUJELFNBQVMsU0FBQztvQkFDVixrdkJBQXVEOztpQkFFdkQ7Ozs7SUEwQkQsb0NBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXpCWSw2QkFBNkI7OztJQUN6QyxrREFBcUI7O0lBQ3JCLGdEQUE0RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3d0VGhlblN0ZXBVaSB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcyB9IGZyb20gXCIuLi9hdXRob3JpemUuZ3d0LXRoZW4tc3RlcFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcIi4vZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3d0VGhlbkF1dGhvcml6ZVN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBHd3RUaGVuU3RlcFVpPGFueT4ge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdHBhcmFtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zPih7fSBhcyBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcyk7XHJcblx0c2V0IHBhcmFtcyhwYXJhbXMpIHtcclxuXHRcdGlmICh0aGlzLmZvcm1Hcm91cCkge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHBhcmFtcyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnBhcmFtcyQubmV4dChwYXJhbXMpO1xyXG5cdH1cclxuXHRnZXQgcGFyYW1zKCk6IFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zIHtcclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLl9jcmVhdGVfZm9ybUdyb3VwKCk7XHJcblx0XHR0aGlzLnBhcmFtcyQuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHBhcmFtcykpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X2NyZWF0ZV9mb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHZlcmI6IG5ldyBGb3JtQ29udHJvbChcImhpZGRlblwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
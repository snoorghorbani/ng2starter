/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
export class GwtThenAuthorizeStepComponent {
    constructor() {
        this.params$ = new BehaviorSubject(/** @type {?} */ ({}));
        this.formGroup = this._create_formGroup();
        this.params$.subscribe(params => this.formGroup.patchValue(params));
    }
    /**
     * @param {?} params
     * @return {?}
     */
    set params(params) {
        if (this.formGroup) {
            this.formGroup.patchValue(params);
        }
        this.params$.next(params);
    }
    /**
     * @return {?}
     */
    get params() {
        return Object.assign({}, this.formGroup.value);
    }
    /**
     * private methods
     * @return {?}
     */
    _create_formGroup() {
        return new FormGroup({
            verb: new FormControl("hidden")
        });
    }
}
GwtThenAuthorizeStepComponent.decorators = [
    { type: Component, args: [{
                template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"start end\" [formGroup]=\"formGroup\">\r\n  <div fxFlex=\"0 0 auto\" class=\"step-text then\">\r\n    \u0622\u0646\u06AF\u0627\u0647\r\n  </div>\r\n  <div fxFlex=\"0 0 auto\" class=\"step-text\">\r\n    \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0642\u0627\u0628\u0644 \u0646\u0645\u0627\u06CC\u0634\r\n  </div>\r\n  <div fxFlex=\"nogrow\">\r\n    <mat-form-field fxFlex=\"nogrow\">\r\n      <mat-select formControlName=\"verb\">\r\n        <mat-option value=\"visible\">\u0628\u0627\u0634\u062F</mat-option>\r\n        <mat-option value=\"hidden\">\u0646\u0628\u0627\u0634\u062F</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-card>",
                styles: [":host{width:100%}"]
            }] }
];
/** @nocollapse */
GwtThenAuthorizeStepComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    GwtThenAuthorizeStepComponent.prototype.formGroup;
    /** @type {?} */
    GwtThenAuthorizeStepComponent.prototype.params$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvdGhlbi1hdXRob3JpemUvc3RlcC1jb21wb25lbnQvZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU92QyxNQUFNLE9BQU8sNkJBQTZCO0lBWXpDO1FBVkEsZUFBVSxJQUFJLGVBQWUsbUJBQTZCLEVBQWdDLEVBQUMsQ0FBQztRQVczRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNwRTs7Ozs7SUFaRCxJQUFJLE1BQU0sQ0FBQyxNQUFNO1FBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFCOzs7O0lBQ0QsSUFBSSxNQUFNO1FBQ1QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9DOzs7OztJQVNELGlCQUFpQjtRQUNoQixPQUFPLElBQUksU0FBUyxDQUFDO1lBQ3BCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0tBQ0g7OztZQTVCRCxTQUFTLFNBQUM7Z0JBQ1Ysa3ZCQUF1RDs7YUFFdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEd3dFRoZW5TdGVwVWkgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXMgfSBmcm9tIFwiLi4vYXV0aG9yaXplLmd3dC10aGVuLXN0ZXBcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2d3dC10aGVuLWF1dGhvcml6ZS1zdGVwLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCIuL2d3dC10aGVuLWF1dGhvcml6ZS1zdGVwLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEd3dFRoZW5BdXRob3JpemVTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgR3d0VGhlblN0ZXBVaTxhbnk+IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRwYXJhbXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcz4oe30gYXMgVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXMpO1xyXG5cdHNldCBwYXJhbXMocGFyYW1zKSB7XHJcblx0XHRpZiAodGhpcy5mb3JtR3JvdXApIHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShwYXJhbXMpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJhbXMkLm5leHQocGFyYW1zKTtcclxuXHR9XHJcblx0Z2V0IHBhcmFtcygpOiBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcyB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5fY3JlYXRlX2Zvcm1Hcm91cCgpO1xyXG5cdFx0dGhpcy5wYXJhbXMkLnN1YnNjcmliZShwYXJhbXMgPT4gdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShwYXJhbXMpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHByaXZhdGUgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdF9jcmVhdGVfZm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHR2ZXJiOiBuZXcgRm9ybUNvbnRyb2woXCJoaWRkZW5cIilcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
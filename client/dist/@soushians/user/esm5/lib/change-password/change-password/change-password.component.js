/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
        this.submited = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.submit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.changePassword = /**
     * @return {?}
     */
    function () {
        if (!this.formGroup.valid)
            return;
        this.submited.emit(this.formGroup.value);
    };
    ChangePasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: "user-change-password",
                    template: "<div fxFlex=\"450px\">\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"changePassword()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n        <mat-form-field fxFlexFill>\n          <input type=\"password\" matInput placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Password\">\n        </mat-form-field>\n        <mat-form-field fxFlexFill>\n          <input type=\"password\" matInput placeholder=\"\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Confirm\">\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ChangePasswordComponent.ctorParameters = function () { return []; };
    ChangePasswordComponent.propDecorators = {
        formGroup: [{ type: Input }],
        submited: [{ type: Output }]
    };
    return ChangePasswordComponent;
}());
export { ChangePasswordComponent };
function ChangePasswordComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangePasswordComponent.prototype.formGroup;
    /** @type {?} */
    ChangePasswordComponent.prototype.submited;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBMkIsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFpQ25FO3dCQU5xQixJQUFJLFlBQVksRUFBRTtLQU12Qjs7OztJQUpoQiwwQ0FBUTs7O0lBQVIsZUFBYTs7OztJQUViLHdDQUFNOzs7SUFBTixlQUFXOzs7O0lBSVgsZ0RBQWM7OztJQUFkO1FBQ0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOztnQkFuQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSwraENBaUJKO29CQUNOLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDWjs7Ozs7NEJBRUMsS0FBSzsyQkFDTCxNQUFNOztrQ0E1QlI7O1NBMEJhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ1c2VyLWNoYW5nZS1wYXNzd29yZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImNoYW5nZVBhc3N3b3JkKClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItqp2YTZhdmHINi52KjZiNixXCIgZm9ybUNvbnRyb2xOYW1lPVwiUGFzc3dvcmRcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2Kraqdix2KfYsSDaqdmE2YXZhyDYudio2YjYsVwiIGZvcm1Db250cm9sTmFtZT1cIkNvbmZpcm1cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+2KrYutuM24zYsSDYsdmF2LIg2LnYqNmI2LE8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiL3VzZXIvcGFuZWxcIiBtYXQtcmFpc2VkLWJ1dHRvbj7YqNin2LLar9i02Ko8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdHN1Ym1pdCgpIHt9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Y2hhbmdlUGFzc3dvcmQoKSB7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN1Ym1pdGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxufVxyXG4iXX0=
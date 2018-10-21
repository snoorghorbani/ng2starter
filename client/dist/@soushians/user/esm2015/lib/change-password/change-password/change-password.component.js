/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
export class ChangePasswordComponent {
    constructor() {
        this.submited = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    submit() { }
    /**
     * @return {?}
     */
    changePassword() {
        if (!this.formGroup.valid)
            return;
        this.submited.emit(this.formGroup.value);
    }
}
ChangePasswordComponent.decorators = [
    { type: Component, args: [{
                selector: "user-change-password",
                template: `<div fxFlex="450px">
  <form [formGroup]="formGroup" (ngSubmit)="changePassword()" fxLayout="column">
    <mat-card>
      <mat-card-content>
        <mat-form-field fxFlexFill>
          <input type="password" matInput placeholder="کلمه عبور" formControlName="Password">
        </mat-form-field>
        <mat-form-field fxFlexFill>
          <input type="password" matInput placeholder="تکرار کلمه عبور" formControlName="Confirm">
        </mat-form-field>
      </mat-card-content>
      <mat-card-actions fxLayoutAlign="center center">
        <button fxFlex="nogrow" type="submit" mat-raised-button color="primary">تغییر رمز عبور</button>
        <button fxFlex="nogrow" type="button" routerLink="/user/panel" mat-raised-button>بازگشت</button>
      </mat-card-actions>
    </mat-card>
  </form>
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ChangePasswordComponent.ctorParameters = () => [];
ChangePasswordComponent.propDecorators = {
    formGroup: [{ type: Input }],
    submited: [{ type: Output }]
};
function ChangePasswordComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangePasswordComponent.prototype.formGroup;
    /** @type {?} */
    ChangePasswordComponent.prototype.submited;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBMkIsTUFBTSxnQkFBZ0IsQ0FBQztBQXlCcEUsTUFBTTtJQVFMO3dCQU5xQixJQUFJLFlBQVksRUFBRTtLQU12Qjs7OztJQUpoQixRQUFRLE1BQUs7Ozs7SUFFYixNQUFNLE1BQUs7Ozs7SUFJWCxjQUFjO1FBQ2IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOzs7WUFuQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQko7Z0JBQ04sTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ1o7Ozs7O3dCQUVDLEtBQUs7dUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ1c2VyLWNoYW5nZS1wYXNzd29yZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImNoYW5nZVBhc3N3b3JkKClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItqp2YTZhdmHINi52KjZiNixXCIgZm9ybUNvbnRyb2xOYW1lPVwiUGFzc3dvcmRcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2Kraqdix2KfYsSDaqdmE2YXZhyDYudio2YjYsVwiIGZvcm1Db250cm9sTmFtZT1cIkNvbmZpcm1cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+2KrYutuM24zYsSDYsdmF2LIg2LnYqNmI2LE8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiL3VzZXIvcGFuZWxcIiBtYXQtcmFpc2VkLWJ1dHRvbj7YqNin2LLar9i02Ko8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdHN1Ym1pdCgpIHt9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Y2hhbmdlUGFzc3dvcmQoKSB7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN1Ym1pdGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxufVxyXG4iXX0=
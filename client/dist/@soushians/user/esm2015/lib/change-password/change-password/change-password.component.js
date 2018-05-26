/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class ChangePasswordComponent {
    constructor() {
        this.submited = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    submit() {
    }
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
                selector: 'user-change-password',
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
//# sourceMappingURL=change-password.component.js.map

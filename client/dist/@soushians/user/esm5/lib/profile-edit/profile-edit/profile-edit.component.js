/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from "@angular/core";
var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent() {
        this.submited = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ProfileEditComponent.prototype.ngOnInit = function () { };
    /**
     * @return {?}
     */
    ProfileEditComponent.prototype.editProfile = function () {
        if (!this.formGroup.valid)
            return;
        this.submited.emit(this.formGroup.value);
    };
    return ProfileEditComponent;
}());
export { ProfileEditComponent };
ProfileEditComponent.decorators = [
    { type: Component, args: [{
                selector: "profile-edit",
                template: "<div fxFlex=\"450px\">\n\n  \n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n          <!-- <ngs-form-view [id]=\"formId\"></ngs-form-view> -->\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel/profile\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>"
            },] },
];
/** @nocollapse */
ProfileEditComponent.ctorParameters = function () { return []; };
ProfileEditComponent.propDecorators = {
    submited: [{ type: Output }],
    formId: [{ type: Input }],
    formGroup: [{ type: Input }],
    roles$: [{ type: Input, args: ["roles",] }],
    groups: [{ type: Input }]
};
function ProfileEditComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ProfileEditComponent.prototype.submited;
    /** @type {?} */
    ProfileEditComponent.prototype.formId;
    /** @type {?} */
    ProfileEditComponent.prototype.formGroup;
    /** @type {?} */
    ProfileEditComponent.prototype.roles$;
    /** @type {?} */
    ProfileEditComponent.prototype.groups;
}
//# sourceMappingURL=profile-edit.component.js.map

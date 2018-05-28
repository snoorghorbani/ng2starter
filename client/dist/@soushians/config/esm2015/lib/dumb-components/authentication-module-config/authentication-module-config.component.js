/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
export class AuthenticationModuleConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                signIn: new FormControl("", [Validators.required]),
                signOut: new FormControl("", [Validators.required]),
                userInformation: new FormControl("", [Validators.required])
            }),
            forms: new FormGroup({
                signIn: new FormControl("", [Validators.required])
            })
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe(data => {
            this.formGroup.patchValue(data);
        });
    }
    /**
     * @param {?} formId
     * @param {?} formName
     * @return {?}
     */
    setFormId(formId, formName) {
        debugger;
        this.formGroup.patchValue({ [formName]: formId });
    }
}
AuthenticationModuleConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "config-authentication-module-config",
                template: `<h2>Endpoints</h2>
<div [formGroup]="formGroup.controls.endpoints" fxLayout="column">
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="sign in" formControlName="signIn">
    </mat-form-field>
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="sign out" formControlName="signOut">
    </mat-form-field>
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="user information" formControlName="userInformation">
    </mat-form-field>
</div>
<h2>Forms</h2>
<div [formGroup]="formGroup.controls.forms" fxLayout="column">
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="SignIn Forms" formControlName="signIn">
    </mat-form-field>
            <!-- <ngs-form-selector (select)="setFormId($event,'signIn')"></ngs-form-selector> -->
</div>`
            },] },
];
/** @nocollapse */
AuthenticationModuleConfigComponent.ctorParameters = () => [
    { type: Injector }
];
AuthenticationModuleConfigComponent.propDecorators = {
    configFormGroup: [{ type: Input }],
    configChanged: [{ type: Output }]
};
function AuthenticationModuleConfigComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AuthenticationModuleConfigComponent.prototype.formGroup;
    /** @type {?} */
    AuthenticationModuleConfigComponent.prototype.configChanged;
    /** @type {?} */
    AuthenticationModuleConfigComponent.prototype.injector;
}
//# sourceMappingURL=authentication-module-config.component.js.map

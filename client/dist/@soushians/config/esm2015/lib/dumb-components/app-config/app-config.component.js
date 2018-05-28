/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
export class ConfigAppConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({ AppTitle: new FormControl("", [Validators.required]) });
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
}
ConfigAppConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "config-app-config",
                template: `<div [formGroup]="formGroup">
    <mat-form-field>
        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="نام پروژه" formControlName="AppTitle">
    </mat-form-field>
</div>`
            },] },
];
/** @nocollapse */
ConfigAppConfigComponent.ctorParameters = () => [
    { type: Injector }
];
ConfigAppConfigComponent.propDecorators = {
    configFormGroup: [{ type: Input }],
    configChanged: [{ type: Output }]
};
function ConfigAppConfigComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigAppConfigComponent.prototype.formGroup;
    /** @type {?} */
    ConfigAppConfigComponent.prototype.configChanged;
    /** @type {?} */
    ConfigAppConfigComponent.prototype.injector;
}
//# sourceMappingURL=app-config.component.js.map

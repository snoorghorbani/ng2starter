/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
var ConfigAppConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function ConfigAppConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({ AppTitle: new FormControl("", [Validators.required]) });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(ConfigAppConfigComponent.prototype, "configFormGroup", {
        /**
         * @param {?} configFormGroup
         * @return {?}
         */
        set: function (configFormGroup) {
            var _this = this;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    return ConfigAppConfigComponent;
}());
export { ConfigAppConfigComponent };
ConfigAppConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "config-app-config",
                template: "<div [formGroup]=\"formGroup\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\" formControlName=\"AppTitle\">\n    </mat-form-field>\n</div>"
            },] },
];
/** @nocollapse */
ConfigAppConfigComponent.ctorParameters = function () { return [
    { type: Injector }
]; };
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

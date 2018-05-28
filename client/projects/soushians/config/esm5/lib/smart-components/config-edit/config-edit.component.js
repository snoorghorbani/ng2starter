/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormControl } from "@angular/forms";
import { EditConfigApiModel } from "../../models";
import { ConfigService } from "../../services/config.service";
var ConfigEditComponent = /** @class */ (function () {
    /**
     * @param {?} configService
     * @param {?} formBuilder
     * @param {?} route
     */
    function ConfigEditComponent(configService, formBuilder, route) {
        var _this = this;
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = EditConfigApiModel.Request.formGroup;
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ configName = params["name"];
            _this.configService.getConfigByName(configName).subscribe(function (data) {
                _this.partialConfigModel = {
                    type: data.Result.Name,
                    inputs: {
                        configFormGroup: /** @type {?} */ (_this.formGroup.controls["Config"])
                    }
                };
                _this.formGroup.patchValue({
                    _id: data.Result._id,
                    Name: data.Result.Name
                });
                Object.keys(data.Result.Config).forEach(function (key) {
                    _this.addControl(/** @type {?} */ (_this.formGroup.controls["Config"]), key, data.Result.Config[key]);
                });
            });
        });
    }
    /**
     * @param {?} formGroup
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    ConfigEditComponent.prototype.addControl = function (formGroup, key, value) {
        if (value instanceof Array) {
            formGroup.addControl(key, this.formBuilder.array(value));
        }
        else if (value instanceof Object) {
            formGroup.addControl(key, this.formBuilder.group(value));
        }
        else {
            formGroup.addControl(key, new FormControl(value));
        }
    };
    /**
     * @return {?}
     */
    ConfigEditComponent.prototype.ngOnInit = function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfigEditComponent.prototype.configChanged = function (event) {
        debugger;
        this.formGroup.controls["Config"].patchValue(event);
    };
    /**
     * @return {?}
     */
    ConfigEditComponent.prototype.edit = function () {
        debugger;
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(function (config) {
            debugger;
        });
    };
    return ConfigEditComponent;
}());
export { ConfigEditComponent };
ConfigEditComponent.decorators = [
    { type: Component, args: [{
                selector: "config-config-edit",
                template: "<div >\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n          <dynamic-config-component-selector (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>"
            },] },
];
/** @nocollapse */
ConfigEditComponent.ctorParameters = function () { return [
    { type: ConfigService },
    { type: FormBuilder },
    { type: ActivatedRoute }
]; };
function ConfigEditComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigEditComponent.prototype.configInforamation;
    /** @type {?} */
    ConfigEditComponent.prototype.formGroup;
    /** @type {?} */
    ConfigEditComponent.prototype.partialConfigModel;
    /** @type {?} */
    ConfigEditComponent.prototype.configService;
    /** @type {?} */
    ConfigEditComponent.prototype.formBuilder;
    /** @type {?} */
    ConfigEditComponent.prototype.route;
}
//# sourceMappingURL=config-edit.component.js.map

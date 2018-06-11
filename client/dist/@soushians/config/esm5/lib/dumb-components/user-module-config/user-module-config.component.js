/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";
var UserModuleConfigComponent = /** @class */ (function () {
    function UserModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                changePassword: new FormControl("", [Validators.required]),
                editProfile: new FormControl("", [Validators.required]),
                getUserInfo: new FormControl("", [Validators.required]),
                whoAmI: new FormControl("", [Validators.required])
            }),
            forms: new FormGroup({
                profile_edit: new FormControl("", [Validators.required])
            }),
            dashboardLinks: new FormArray([])
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(UserModuleConfigComponent.prototype, "configFormGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._configFormGroup;
        },
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this._configFormGroup = configFormGroup;
            (/** @type {?} */ (configFormGroup.controls["dashboardLinks"])).controls.forEach(function (control) {
                (/** @type {?} */ (_this.formGroup.controls["dashboardLinks"])).push(new FormGroup({
                    route: new FormControl("", [Validators.required]),
                    icon: new FormControl("", [Validators.required]),
                    title: new FormControl("", [Validators.required])
                }));
            });
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UserModuleConfigComponent.prototype.addMenu = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            title: new FormControl("", [Validators.required])
        });
        (/** @type {?} */ (this.formGroup.get("dashboardLinks"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("dashboardLinks"))).push(menuItem);
    };
    UserModuleConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-user-module-config",
                    template: "<h2>Endpoints</h2>\n<div [formGroup]=\"formGroup.get('endpoints')\" fxLayout=\"column\">\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\" formControlName=\"changePassword\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\" formControlName=\"editProfile\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\" formControlName=\"getUserInfo\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Who Am I\" formControlName=\"whoAmI\">\n        </mat-form-field>\n</div>\n<h2>Forms</h2>\n<div [formGroup]=\"formGroup.get('forms')\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"profile edit\" formControlName=\"profile_edit\">\n    </mat-form-field>\n            <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n</div>\n\n\n<h2 fxFlex=\"100\">\n    Dashobard Links\n    <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n        <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n    </button>\n</h2>\n<div fxFlex=\"100\" *ngFor=\"let item of $any(formGroup.get('dashboardLinks')).controls\">\n    <div [formGroup]=\"item\">\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">\n        </mat-form-field>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    UserModuleConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    UserModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: Input }],
        configChanged: [{ type: Output }]
    };
    return UserModuleConfigComponent;
}());
export { UserModuleConfigComponent };
function UserModuleConfigComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    UserModuleConfigComponent.prototype.formGroup;
    /** @type {?} */
    UserModuleConfigComponent.prototype._configFormGroup;
    /** @type {?} */
    UserModuleConfigComponent.prototype.configChanged;
    /** @type {?} */
    UserModuleConfigComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1tb2R1bGUtY29uZmlnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL2R1bWItY29tcG9uZW50cy91c2VyLW1vZHVsZS1jb25maWcvdXNlci1tb2R1bGUtY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFZLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQXFGOUUsbUNBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7eUJBbkNmLElBQUksU0FBUyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQztnQkFDeEIsY0FBYyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDNUQsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDekQsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDekQsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzthQUNwRCxDQUFDO1lBQ0YsS0FBSyxFQUFFLElBQUksU0FBUyxDQUFDO2dCQUNwQixZQUFZLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2FBQzFELENBQUM7WUFDRixjQUFjLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ2pDLENBQUM7NkJBdUJ3QixJQUFJLFlBQVksRUFBRTtRQUUzQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDNUQ7SUF4QkQsc0JBQ0ksc0RBQWU7Ozs7UUFpQm5CO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3Qjs7Ozs7UUFwQkQsVUFDb0IsZUFBMEI7WUFEOUMsaUJBaUJDO1lBZkEsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztZQUN4QyxtQkFBQyxlQUFlLENBQUMsUUFBUSxrQkFBNEIsRUFBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUM5RSxtQkFBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsa0JBQTRCLEVBQUMsQ0FBQyxJQUFJLENBQ3pELElBQUksU0FBUyxDQUFDO29CQUNiLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7b0JBQ25ELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7b0JBQ2xELEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7aUJBQ25ELENBQUMsQ0FDRixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDMUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEMsQ0FBQyxDQUFDO1NBQ0g7OztPQUFBOzs7O0lBUUQsMkNBQU87OztJQUFQO1FBQ0MscUJBQUksUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQzVCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7WUFDbkQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztZQUNsRCxLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1NBQ25ELENBQUMsQ0FBQztRQUVILG1CQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFjLEVBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQWMsRUFBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN6RTs7Z0JBOUZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsZ3NFQTBDSjtpQkFDTjs7OztnQkFqRGtFLFFBQVE7OztrQ0FnRXpFLEtBQUs7Z0NBcUJMLE1BQU07O29DQXJGUjs7U0FrRGEseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLXVzZXItbW9kdWxlLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGgyPkVuZHBvaW50czwvaDI+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuZ2V0KCdlbmRwb2ludHMnKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJjaGFuZ2UgcGFzc3dvcmRcIiBmb3JtQ29udHJvbE5hbWU9XCJjaGFuZ2VQYXNzd29yZFwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJlZGl0IHByb2ZpbGVcIiBmb3JtQ29udHJvbE5hbWU9XCJlZGl0UHJvZmlsZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJnZXQgdXNlciBpbmZvXCIgZm9ybUNvbnRyb2xOYW1lPVwiZ2V0VXNlckluZm9cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiV2hvIEFtIElcIiBmb3JtQ29udHJvbE5hbWU9XCJ3aG9BbUlcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5cclxuPGgyPkZvcm1zPC9oMj5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5nZXQoJ2Zvcm1zJylcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInByb2ZpbGUgZWRpdFwiIGZvcm1Db250cm9sTmFtZT1cInByb2ZpbGVfZWRpdFwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPCEtLSA8bmdzLWZvcm0tc2VsZWN0b3IgKHNlbGVjdCk9XCJzZXRGb3JtSWQoJGV2ZW50LCdzaWduSW4nKVwiPjwvbmdzLWZvcm0tc2VsZWN0b3I+IC0tPlxyXG48L2Rpdj5cclxuXHJcblxyXG48aDIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICBEYXNob2JhcmQgTGlua3NcclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRNZW51KClcIj5cclxuICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImljb24tYnV0dG9uIGljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbjwvaDI+XHJcbjxkaXYgZnhGbGV4PVwiMTAwXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgJGFueShmb3JtR3JvdXAuZ2V0KCdkYXNoYm9hcmRMaW5rcycpKS5jb250cm9sc1wiPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIml0ZW1cIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInJvdXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwicm91dGVcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiaWNvblwiIGZvcm1Db250cm9sTmFtZT1cImljb25cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwidGl0bGVcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGVuZHBvaW50czogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGNoYW5nZVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRlZGl0UHJvZmlsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0Z2V0VXNlckluZm86IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHdob0FtSTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSksXHJcblx0XHRmb3JtczogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHByb2ZpbGVfZWRpdDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSksXHJcblx0XHRkYXNoYm9hcmRMaW5rczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRfY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLl9jb25maWdGb3JtR3JvdXAgPSBjb25maWdGb3JtR3JvdXA7XHJcblx0XHQoY29uZmlnRm9ybUdyb3VwLmNvbnRyb2xzLmRhc2hib2FyZExpbmtzIGFzIEZvcm1BcnJheSkuY29udHJvbHMuZm9yRWFjaChjb250cm9sID0+IHtcclxuXHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmRhc2hib2FyZExpbmtzIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldCBjb25maWdGb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnRm9ybUdyb3VwO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcblx0YWRkTWVudSgpIHtcclxuXHRcdHZhciBtZW51SXRlbSA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdCh0aGlzLmZvcm1Hcm91cC5nZXQoXCJkYXNoYm9hcmRMaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImRhc2hib2FyZExpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
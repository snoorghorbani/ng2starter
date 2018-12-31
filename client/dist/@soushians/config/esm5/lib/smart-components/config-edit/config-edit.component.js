/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormControl } from "@angular/forms";
import { EditConfigApiModel } from "../../models";
import { ConfigService } from "../../services/config.service";
import { DynamicConfigComponentSelectorComponent } from "../dynamic-config-component-selector";
var ConfigEditComponent = /** @class */ (function () {
    function ConfigEditComponent(configService, formBuilder, route) {
        var _this = this;
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = EditConfigApiModel.Request.formGroup;
        this.route.params.subscribe(function (params) {
            /** @type {?} */
            var configName = params["name"];
            _this.configService.getConfigByName(configName).subscribe(function (data) {
                debugger;
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
    ConfigEditComponent.prototype.addControl = /**
     * @param {?} formGroup
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (formGroup, key, value) {
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
    ConfigEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfigEditComponent.prototype.configChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log("-");
    };
    /**
     * @return {?}
     */
    ConfigEditComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.formGroup.controls["Config"].patchValue(this.dynConfig.config);
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(function (config) { });
    };
    ConfigEditComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-config-edit",
                    template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">\r\n  <dynamic-config-component-selector #dynConfig (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>\r\n  <button mat-fab  type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\r\n    <mat-icon>done</mat-icon>\r\n  </button>\r\n  <!-- <button  type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button> -->\r\n</form>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ConfigEditComponent.ctorParameters = function () { return [
        { type: ConfigService },
        { type: FormBuilder },
        { type: ActivatedRoute }
    ]; };
    ConfigEditComponent.propDecorators = {
        dynConfig: [{ type: ViewChild, args: ["dynConfig",] }]
    };
    return ConfigEditComponent;
}());
export { ConfigEditComponent };
if (false) {
    /** @type {?} */
    ConfigEditComponent.prototype.configInforamation;
    /** @type {?} */
    ConfigEditComponent.prototype.formGroup;
    /** @type {?} */
    ConfigEditComponent.prototype.partialConfigModel;
    /** @type {?} */
    ConfigEditComponent.prototype.dynConfig;
    /** @type {?} */
    ConfigEditComponent.prototype.configService;
    /** @type {?} */
    ConfigEditComponent.prototype.formBuilder;
    /** @type {?} */
    ConfigEditComponent.prototype.route;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9jb25maWctZWRpdC9jb25maWctZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQXVDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFFdEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBYSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckUsT0FBTyxFQUFFLGtCQUFrQixFQUFpQixNQUFNLGNBQWMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0lBWTlGLDZCQUFvQixhQUE0QixFQUFVLFdBQXdCLEVBQVUsS0FBcUI7UUFBakgsaUJBb0JDO1FBcEJtQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFIakgsaUJBQXVCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFJM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTs7WUFDakMsSUFBTSxVQUFVLEdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQzVELFFBQVEsQ0FBQztnQkFDVCxLQUFJLENBQUMsa0JBQWtCLEdBQUc7b0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBQ3RCLE1BQU0sRUFBRTt3QkFDUCxlQUFlLG9CQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxVQUFvQixDQUFBO3FCQUM1RDtpQkFDRCxDQUFDO2dCQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO29CQUN6QixHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHO29CQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2lCQUN0QixDQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7b0JBQzFDLEtBQUksQ0FBQyxVQUFVLG1CQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxVQUFvQixHQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUMzRixDQUFDLENBQUM7YUFDSCxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSDs7Ozs7OztJQUVELHdDQUFVOzs7Ozs7SUFBVixVQUFXLFNBQW9CLEVBQUUsR0FBVyxFQUFFLEtBQVU7UUFDdkQsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1lBQzNCLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDekQ7YUFBTSxJQUFJLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDbkMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ04sU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNsRDtLQUNEOzs7O0lBRUQsc0NBQVE7OztJQUFSLGVBQWM7Ozs7O0lBQ2QsMkNBQWE7Ozs7SUFBYixVQUFjLEtBQVU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjs7OztJQUNELGtDQUFJOzs7SUFBSjtRQUNDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxXQUFRLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxLQUFPLENBQUMsQ0FBQztLQUM3RTs7Z0JBbERELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qiw0Z0JBQTJDOztpQkFFM0M7Ozs7Z0JBUFEsYUFBYTtnQkFIRixXQUFXO2dCQUR0QixjQUFjOzs7NEJBZ0JyQixTQUFTLFNBQUMsV0FBVzs7OEJBbEJ2Qjs7U0FjYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0Q29uZmlnQXBpTW9kZWwsIFBhcnRpYWxDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4uL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWNvbmZpZy1lZGl0XCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9jb25maWctZWRpdC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9jb25maWctZWRpdC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25maWdJbmZvcmFtYXRpb246IGFueTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRwYXJ0aWFsQ29uZmlnTW9kZWw6IFBhcnRpYWxDb25maWc7XHJcblx0QFZpZXdDaGlsZChcImR5bkNvbmZpZ1wiKSBkeW5Db25maWc6IER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbmZpZ05hbWU6IHN0cmluZyA9IHBhcmFtc1tcIm5hbWVcIl07XHJcblx0XHRcdHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdCeU5hbWUoY29uZmlnTmFtZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdHRoaXMucGFydGlhbENvbmZpZ01vZGVsID0ge1xyXG5cdFx0XHRcdFx0dHlwZTogZGF0YS5SZXN1bHQuTmFtZSxcclxuXHRcdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0XHRjb25maWdGb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZyBhcyBGb3JtR3JvdXBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0X2lkOiBkYXRhLlJlc3VsdC5faWQsXHJcblx0XHRcdFx0XHROYW1lOiBkYXRhLlJlc3VsdC5OYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5SZXN1bHQuQ29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENvbnRyb2wodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnIGFzIEZvcm1Hcm91cCwga2V5LCBkYXRhLlJlc3VsdC5Db25maWdba2V5XSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhZGRDb250cm9sKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KHZhbHVlKSk7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgdGhpcy5mb3JtQnVpbGRlci5ncm91cCh2YWx1ZSkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2wodmFsdWUpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkgeyB9XHJcblx0Y29uZmlnQ2hhbmdlZChldmVudDogYW55KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIi1cIik7XHJcblx0fVxyXG5cdGVkaXQoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db25maWcucGF0Y2hWYWx1ZSh0aGlzLmR5bkNvbmZpZy5jb25maWcpO1xyXG5cdFx0aWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLmVkaXRDb25maWcodGhpcy5mb3JtR3JvdXAudmFsdWUpLnN1YnNjcmliZShjb25maWcgPT4geyB9KTtcclxuXHR9XHJcbn1cclxuIl19
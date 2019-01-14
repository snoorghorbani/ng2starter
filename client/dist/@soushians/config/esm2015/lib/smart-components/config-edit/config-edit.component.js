/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormControl } from "@angular/forms";
import { EditConfigApiModel } from "../../models";
import { ConfigService } from "../../services/config.service";
import { DynamicConfigComponentSelectorComponent } from "../dynamic-config-component-selector";
export class ConfigEditComponent {
    /**
     * @param {?} configService
     * @param {?} formBuilder
     * @param {?} route
     */
    constructor(configService, formBuilder, route) {
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = EditConfigApiModel.Request.formGroup;
        this.route.params.subscribe(params => {
            /** @type {?} */
            const configName = params["name"];
            this.configService.getConfigByName(configName).subscribe(data => {
                debugger;
                this.partialConfigModel = {
                    type: data.Result.Name,
                    inputs: {
                        configFormGroup: (/** @type {?} */ (this.formGroup.controls.Config))
                    }
                };
                this.formGroup.patchValue({
                    _id: data.Result._id,
                    Name: data.Result.Name
                });
                Object.keys(data.Result.Config).forEach(key => {
                    this.addControl((/** @type {?} */ (this.formGroup.controls.Config)), key, data.Result.Config[key]);
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
    addControl(formGroup, key, value) {
        if (value instanceof Array) {
            formGroup.addControl(key, this.formBuilder.array(value));
        }
        else if (value instanceof Object) {
            formGroup.addControl(key, this.formBuilder.group(value));
        }
        else {
            formGroup.addControl(key, new FormControl(value));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    configChanged(event) {
        console.log("-");
    }
    /**
     * @return {?}
     */
    edit() {
        this.formGroup.controls.Config.patchValue(this.dynConfig.config);
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(config => { });
    }
}
ConfigEditComponent.decorators = [
    { type: Component, args: [{
                selector: "config-config-edit",
                template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">\r\n  <dynamic-config-component-selector #dynConfig (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>\r\n  <button mat-fab  type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\r\n    <mat-icon>done</mat-icon>\r\n  </button>\r\n  <!-- <button  type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button> -->\r\n</form>",
                styles: [""]
            }] }
];
/** @nocollapse */
ConfigEditComponent.ctorParameters = () => [
    { type: ConfigService },
    { type: FormBuilder },
    { type: ActivatedRoute }
];
ConfigEditComponent.propDecorators = {
    dynConfig: [{ type: ViewChild, args: ["dynConfig",] }]
};
if (false) {
    /** @type {?} */
    ConfigEditComponent.prototype.configInforamation;
    /** @type {?} */
    ConfigEditComponent.prototype.formGroup;
    /** @type {?} */
    ConfigEditComponent.prototype.partialConfigModel;
    /** @type {?} */
    ConfigEditComponent.prototype.dynConfig;
    /**
     * @type {?}
     * @private
     */
    ConfigEditComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    ConfigEditComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    ConfigEditComponent.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9jb25maWctZWRpdC9jb25maWctZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQXVDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFFdEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBYSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckUsT0FBTyxFQUFFLGtCQUFrQixFQUFpQixNQUFNLGNBQWMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPL0YsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBSy9CLFlBQW9CLGFBQTRCLEVBQVUsV0FBd0IsRUFBVSxLQUFxQjtRQUE3RixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFIakgsY0FBUyxHQUFjLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFJM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztrQkFDOUIsVUFBVSxHQUFXLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvRCxRQUFRLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLGtCQUFrQixHQUFHO29CQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO29CQUN0QixNQUFNLEVBQUU7d0JBQ1AsZUFBZSxFQUFFLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBYTtxQkFDNUQ7aUJBQ0QsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztvQkFDekIsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRztvQkFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtpQkFDdEIsQ0FBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFhLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVGLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCxVQUFVLENBQUMsU0FBb0IsRUFBRSxHQUFXLEVBQUUsS0FBVTtRQUN2RCxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7WUFDM0IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNLElBQUksS0FBSyxZQUFZLE1BQU0sRUFBRTtZQUNuQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO2FBQU07WUFDTixTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0YsQ0FBQzs7OztJQUVELFFBQVEsS0FBSyxDQUFDOzs7OztJQUNkLGFBQWEsQ0FBQyxLQUFVO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7OztJQUNELElBQUk7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7WUFsREQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDRnQkFBMkM7O2FBRTNDOzs7O1lBUFEsYUFBYTtZQUhGLFdBQVc7WUFEdEIsY0FBYzs7O3dCQWdCckIsU0FBUyxTQUFDLFdBQVc7Ozs7SUFIdEIsaURBQXdCOztJQUN4Qix3Q0FBNEQ7O0lBQzVELGlEQUFrQzs7SUFDbEMsd0NBQTJFOzs7OztJQUMvRCw0Q0FBb0M7Ozs7O0lBQUUsMENBQWdDOzs7OztJQUFFLG9DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi4vZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctY29uZmlnLWVkaXRcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2NvbmZpZy1lZGl0LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCIuL2NvbmZpZy1lZGl0LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0VkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbmZpZ0luZm9yYW1hdGlvbjogYW55O1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gRWRpdENvbmZpZ0FwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHBhcnRpYWxDb25maWdNb2RlbDogUGFydGlhbENvbmZpZztcclxuXHRAVmlld0NoaWxkKFwiZHluQ29uZmlnXCIpIGR5bkNvbmZpZzogRHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgY29uZmlnTmFtZTogc3RyaW5nID0gcGFyYW1zW1wibmFtZVwiXTtcclxuXHRcdFx0dGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ0J5TmFtZShjb25maWdOYW1lKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0dGhpcy5wYXJ0aWFsQ29uZmlnTW9kZWwgPSB7XHJcblx0XHRcdFx0XHR0eXBlOiBkYXRhLlJlc3VsdC5OYW1lLFxyXG5cdFx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRcdGNvbmZpZ0Zvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnIGFzIEZvcm1Hcm91cFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0XHRfaWQ6IGRhdGEuUmVzdWx0Ll9pZCxcclxuXHRcdFx0XHRcdE5hbWU6IGRhdGEuUmVzdWx0Lk5hbWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRPYmplY3Qua2V5cyhkYXRhLlJlc3VsdC5Db25maWcpLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuYWRkQ29udHJvbCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db25maWcgYXMgRm9ybUdyb3VwLCBrZXksIGRhdGEuUmVzdWx0LkNvbmZpZ1trZXldKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFkZENvbnRyb2woZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRmb3JtR3JvdXAuYWRkQ29udHJvbChrZXksIHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkodmFsdWUpKTtcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHZhbHVlKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3JtR3JvdXAuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbCh2YWx1ZSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxuXHRjb25maWdDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiLVwiKTtcclxuXHR9XHJcblx0ZWRpdCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZy5wYXRjaFZhbHVlKHRoaXMuZHluQ29uZmlnLmNvbmZpZyk7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuZWRpdENvbmZpZyh0aGlzLmZvcm1Hcm91cC52YWx1ZSkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7IH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
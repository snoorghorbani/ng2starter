/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            const configName = params["name"];
            this.configService.getConfigByName(configName).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
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
                Object.keys(data.Result.Config).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    this.addControl((/** @type {?} */ (this.formGroup.controls.Config)), key, data.Result.Config[key]);
                }));
            }));
        }));
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
        this.configService.editConfig(this.formGroup.value).subscribe((/**
         * @param {?} config
         * @return {?}
         */
        config => { }));
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
    dynConfig: [{ type: ViewChild, args: ["dynConfig", { static: false },] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9jb25maWctZWRpdC9jb25maWctZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQXVDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFFdEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBYSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckUsT0FBTyxFQUFFLGtCQUFrQixFQUFpQixNQUFNLGNBQWMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPL0YsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBSy9CLFlBQW9CLGFBQTRCLEVBQVUsV0FBd0IsRUFBVSxLQUFxQjtRQUE3RixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFIakgsY0FBUyxHQUFjLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFJM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFOztrQkFDOUIsVUFBVSxHQUFXLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvRCxRQUFRLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLGtCQUFrQixHQUFHO29CQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO29CQUN0QixNQUFNLEVBQUU7d0JBQ1AsZUFBZSxFQUFFLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBYTtxQkFDNUQ7aUJBQ0QsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztvQkFDekIsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRztvQkFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtpQkFDdEIsQ0FBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBYSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM1RixDQUFDLEVBQUMsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLFNBQW9CLEVBQUUsR0FBVyxFQUFFLEtBQVU7UUFDdkQsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1lBQzNCLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDekQ7YUFBTSxJQUFJLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDbkMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ04sU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNsRDtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRLEtBQUssQ0FBQzs7Ozs7SUFDZCxhQUFhLENBQUMsS0FBVTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFDRCxJQUFJO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFDLENBQUM7SUFDOUUsQ0FBQzs7O1lBbERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw0Z0JBQTJDOzthQUUzQzs7OztZQVBRLGFBQWE7WUFIRixXQUFXO1lBRHRCLGNBQWM7Ozt3QkFnQnJCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBSHpDLGlEQUF3Qjs7SUFDeEIsd0NBQTREOztJQUM1RCxpREFBa0M7O0lBQ2xDLHdDQUE4Rjs7Ozs7SUFDbEYsNENBQW9DOzs7OztJQUFFLDBDQUFnQzs7Ozs7SUFBRSxvQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0Q29uZmlnQXBpTW9kZWwsIFBhcnRpYWxDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4uL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWNvbmZpZy1lZGl0XCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9jb25maWctZWRpdC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9jb25maWctZWRpdC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25maWdJbmZvcmFtYXRpb246IGFueTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRwYXJ0aWFsQ29uZmlnTW9kZWw6IFBhcnRpYWxDb25maWc7XHJcblx0QFZpZXdDaGlsZChcImR5bkNvbmZpZ1wiLCB7IHN0YXRpYzogZmFsc2UgfSkgZHluQ29uZmlnOiBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQ7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBjb25maWdOYW1lOiBzdHJpbmcgPSBwYXJhbXNbXCJuYW1lXCJdO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQnlOYW1lKGNvbmZpZ05hbWUpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHR0aGlzLnBhcnRpYWxDb25maWdNb2RlbCA9IHtcclxuXHRcdFx0XHRcdHR5cGU6IGRhdGEuUmVzdWx0Lk5hbWUsXHJcblx0XHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdFx0Y29uZmlnRm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db25maWcgYXMgRm9ybUdyb3VwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcclxuXHRcdFx0XHRcdF9pZDogZGF0YS5SZXN1bHQuX2lkLFxyXG5cdFx0XHRcdFx0TmFtZTogZGF0YS5SZXN1bHQuTmFtZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdE9iamVjdC5rZXlzKGRhdGEuUmVzdWx0LkNvbmZpZykuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5hZGRDb250cm9sKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZyBhcyBGb3JtR3JvdXAsIGtleSwgZGF0YS5SZXN1bHQuQ29uZmlnW2tleV0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YWRkQ29udHJvbChmb3JtR3JvdXA6IEZvcm1Hcm91cCwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgdGhpcy5mb3JtQnVpbGRlci5hcnJheSh2YWx1ZSkpO1xyXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRmb3JtR3JvdXAuYWRkQ29udHJvbChrZXksIHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAodmFsdWUpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgbmV3IEZvcm1Db250cm9sKHZhbHVlKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHsgfVxyXG5cdGNvbmZpZ0NoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCItXCIpO1xyXG5cdH1cclxuXHRlZGl0KCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnLnBhdGNoVmFsdWUodGhpcy5keW5Db25maWcuY29uZmlnKTtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuY29uZmlnU2VydmljZS5lZGl0Q29uZmlnKHRoaXMuZm9ybUdyb3VwLnZhbHVlKS5zdWJzY3JpYmUoY29uZmlnID0+IHsgfSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
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
        debugger;
        this.formGroup.controls["Config"].patchValue(event);
    };
    /**
     * @return {?}
     */
    ConfigEditComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        debugger;
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(function (config) {
            debugger;
        });
    };
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
    return ConfigEditComponent;
}());
export { ConfigEditComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvc21hcnQtY29tcG9uZW50cy9jb25maWctZWRpdC9jb25maWctZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQW9FLE1BQU0sZUFBZSxDQUFDO0FBRXRILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQWEsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxjQUFjLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQXVCN0QsNkJBQW9CLGFBQTRCLEVBQVUsV0FBd0IsRUFBVSxLQUFxQjtRQUFqSCxpQkFtQkM7UUFuQm1CLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjt5QkFIMUYsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVM7UUFJMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNqQyxxQkFBTSxVQUFVLEdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQzVELEtBQUksQ0FBQyxrQkFBa0IsR0FBRztvQkFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtvQkFDdEIsTUFBTSxFQUFFO3dCQUNQLGVBQWUsb0JBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFVBQW9CLENBQUE7cUJBQzVEO2lCQUNELENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7b0JBQ3pCLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7b0JBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7aUJBQ3RCLENBQUMsQ0FBQztnQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztvQkFDMUMsS0FBSSxDQUFDLFVBQVUsbUJBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFVBQW9CLEdBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzNGLENBQUMsQ0FBQzthQUNILENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNIOzs7Ozs7O0lBRUQsd0NBQVU7Ozs7OztJQUFWLFVBQVcsU0FBb0IsRUFBRSxHQUFXLEVBQUUsS0FBVTtRQUN2RCxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QixTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbEQ7S0FDRDs7OztJQUVELHNDQUFROzs7SUFBUixlQUFhOzs7OztJQUNiLDJDQUFhOzs7O0lBQWIsVUFBYyxLQUFVO1FBQ3ZCLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxXQUFRLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqRDs7OztJQUNELGtDQUFJOzs7SUFBSjtRQUNDLFFBQVEsQ0FBQztRQUNULEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25FLFFBQVEsQ0FBQztTQUNULENBQUMsQ0FBQztLQUNIOztnQkEvREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxndEJBWUo7aUJBQ047Ozs7Z0JBakJRLGFBQWE7Z0JBSEYsV0FBVztnQkFEdEIsY0FBYzs7OEJBRnZCOztTQXdCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0Q29uZmlnQXBpTW9kZWwsIFBhcnRpYWxDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1jb25maWctZWRpdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiA+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiZWRpdCgpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8ZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yIChjb25maWdDaGFuZ2VkKT1cImNvbmZpZ0NoYW5nZWQoJGV2ZW50KVwiIFtkYXRhXT1cInBhcnRpYWxDb25maWdNb2RlbFwiPjwvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImVkaXRcIj7ZiNuM2LHYp9uM2LQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiL2NvbmZpZ3NcIiBtYXQtcmFpc2VkLWJ1dHRvbj7YqNin2LLar9i02Ko8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0VkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbmZpZ0luZm9yYW1hdGlvbjogYW55O1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gRWRpdENvbmZpZ0FwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHBhcnRpYWxDb25maWdNb2RlbDogUGFydGlhbENvbmZpZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBjb25maWdOYW1lOiBzdHJpbmcgPSBwYXJhbXNbXCJuYW1lXCJdO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnQnlOYW1lKGNvbmZpZ05hbWUpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLnBhcnRpYWxDb25maWdNb2RlbCA9IHtcclxuXHRcdFx0XHRcdHR5cGU6IGRhdGEuUmVzdWx0Lk5hbWUsXHJcblx0XHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdFx0Y29uZmlnRm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db25maWcgYXMgRm9ybUdyb3VwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcclxuXHRcdFx0XHRcdF9pZDogZGF0YS5SZXN1bHQuX2lkLFxyXG5cdFx0XHRcdFx0TmFtZTogZGF0YS5SZXN1bHQuTmFtZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdE9iamVjdC5rZXlzKGRhdGEuUmVzdWx0LkNvbmZpZykuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5hZGRDb250cm9sKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZyBhcyBGb3JtR3JvdXAsIGtleSwgZGF0YS5SZXN1bHQuQ29uZmlnW2tleV0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YWRkQ29udHJvbChmb3JtR3JvdXA6IEZvcm1Hcm91cCwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgdGhpcy5mb3JtQnVpbGRlci5hcnJheSh2YWx1ZSkpO1xyXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRmb3JtR3JvdXAuYWRkQ29udHJvbChrZXksIHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAodmFsdWUpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgbmV3IEZvcm1Db250cm9sKHZhbHVlKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0Y29uZmlnQ2hhbmdlZChldmVudDogYW55KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZy5wYXRjaFZhbHVlKGV2ZW50KTtcclxuXHR9XHJcblx0ZWRpdCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLmVkaXRDb25maWcodGhpcy5mb3JtR3JvdXAudmFsdWUpLnN1YnNjcmliZShjb25maWcgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
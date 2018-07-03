/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function WidgetModuleConfig() { }
function WidgetModuleConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    WidgetModuleConfig.prototype.development_uri;
    /** @type {?|undefined} */
    WidgetModuleConfig.prototype.production_uri;
    /** @type {?|undefined} */
    WidgetModuleConfig.prototype.env;
    /** @type {?|undefined} */
    WidgetModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    WidgetModuleConfig.prototype.types;
}
export var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    development_uri: "http://localhost:3000",
    production_uri: "",
    env: {
        production: false
    },
    endpoints: {
        upsert: "http://localhost:3000/api/uiwidget",
        find: "http://localhost:3000/api/uiwidget",
        get: "http://localhost:3000/api/uiwidget/${model._id}"
    },
    types: {}
};
export var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("WidgetModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUIvQyxNQUFNLENBQUMscUJBQU0scUJBQXFCLEdBQXVCO0lBQ3hELGVBQWUsRUFBRSx1QkFBdUI7SUFDeEMsY0FBYyxFQUFFLEVBQUU7SUFDbEIsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsb0NBQW9DO1FBQzVDLElBQUksRUFBRSxvQ0FBb0M7UUFDMUMsR0FBRyxFQUFFLGlEQUFpRDtLQUN0RDtJQUNELEtBQUssRUFBRSxFQUFFO0NBQ1QsQ0FBQztBQUNGLE1BQU0sQ0FBQyxxQkFBTSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBcUIsb0JBQW9CLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaT86IHN0cmluZztcclxuXHRwcm9kdWN0aW9uX3VyaT86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHR9O1xyXG5cdHR5cGVzPzogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFdpZGdldE1vZHVsZUNvbmZpZyA9IHtcclxuXHRkZXZlbG9wbWVudF91cmk6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcblx0cHJvZHVjdGlvbl91cmk6IFwiXCIsXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZVxyXG5cdH0sXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91aXdpZGdldFwiLFxyXG5cdFx0ZmluZDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Vpd2lkZ2V0XCIsXHJcblx0XHRnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91aXdpZGdldC8ke21vZGVsLl9pZH1cIlxyXG5cdH0sXHJcblx0dHlwZXM6IHt9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFdpZGdldE1vZHVsZUNvbmZpZz4oXCJXaWRnZXRNb2R1bGVDb25maWdcIik7XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function WidgetModuleConfig() { }
if (false) {
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
/** @type {?} */
export const MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: "frontend_server/did/not/set"
    },
    endpoints: {
        upsert: "/api/uiwidget",
        find: "/api/uiwidget",
        get: "/api/uiwidget/${model._id}",
        deleteItem: "/api/uiwidget/${model.widgetId}"
    },
    types: {}
};
/** @type {?} */
export const MODULE_CONFIG_TOKEN = new InjectionToken("WidgetModuleConfig");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFJL0Msd0NBY0M7OztJQWJBLDZDQUF5Qjs7SUFDekIsNENBQXdCOztJQUN4QixpQ0FHRTs7SUFDRix1Q0FLRTs7SUFDRixtQ0FBOEI7OztBQUUvQixNQUFNLE9BQU8scUJBQXFCLEdBQXVCO0lBQ3hELEdBQUcsRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGVBQWUsRUFBRSw2QkFBNkI7S0FDOUM7SUFDRCxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsZUFBZTtRQUN2QixJQUFJLEVBQUUsZUFBZTtRQUNyQixHQUFHLEVBQUUsNEJBQTRCO1FBQ2pDLFVBQVUsRUFBRSxpQ0FBaUM7S0FDN0M7SUFDRCxLQUFLLEVBQUUsRUFBRTtDQUNUOztBQUNELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBcUIsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi9tb2RlbHMvbW9kdWxlLWNvbmZpZy1tYXAtdHlwZXMuaW50ZXJmY2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0TW9kdWxlQ29uZmlnIHtcclxuXHRkZXZlbG9wbWVudF91cmk/OiBzdHJpbmc7XHJcblx0cHJvZHVjdGlvbl91cmk/OiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHRcdGRlbGV0ZUl0ZW06IHN0cmluZztcclxuXHR9O1xyXG5cdHR5cGVzPzogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFdpZGdldE1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCIvYXBpL3Vpd2lkZ2V0XCIsXHJcblx0XHRmaW5kOiBcIi9hcGkvdWl3aWRnZXRcIixcclxuXHRcdGdldDogXCIvYXBpL3Vpd2lkZ2V0LyR7bW9kZWwuX2lkfVwiLFxyXG5cdFx0ZGVsZXRlSXRlbTogXCIvYXBpL3Vpd2lkZ2V0LyR7bW9kZWwud2lkZ2V0SWR9XCJcclxuXHR9LFxyXG5cdHR5cGVzOiB7fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxXaWRnZXRNb2R1bGVDb25maWc+KFwiV2lkZ2V0TW9kdWxlQ29uZmlnXCIpO1xyXG4iXX0=
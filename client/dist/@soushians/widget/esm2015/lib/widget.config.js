/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function WidgetModuleConfig() { }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQi9DLGFBQWEscUJBQXFCLEdBQXVCO0lBQ3hELEdBQUcsRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGVBQWUsRUFBRSw2QkFBNkI7S0FDOUM7SUFDRCxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsZUFBZTtRQUN2QixJQUFJLEVBQUUsZUFBZTtRQUNyQixHQUFHLEVBQUUsNEJBQTRCO1FBQ2pDLFVBQVUsRUFBRSxpQ0FBaUM7S0FDN0M7SUFDRCxLQUFLLEVBQUUsRUFBRTtDQUNULENBQUM7O0FBQ0YsYUFBYSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBcUIsb0JBQW9CLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaT86IHN0cmluZztcclxuXHRwcm9kdWN0aW9uX3VyaT86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGZpbmQ6IHN0cmluZztcclxuXHRcdHVwc2VydDogc3RyaW5nO1xyXG5cdFx0ZGVsZXRlSXRlbTogc3RyaW5nO1xyXG5cdH07XHJcblx0dHlwZXM/OiBJTW9kdWxlQ29uZmlnTWFwVHlwZXM7XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogV2lkZ2V0TW9kdWxlQ29uZmlnID0ge1xyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0dXBzZXJ0OiBcIi9hcGkvdWl3aWRnZXRcIixcclxuXHRcdGZpbmQ6IFwiL2FwaS91aXdpZGdldFwiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvdWl3aWRnZXQvJHttb2RlbC5faWR9XCIsXHJcblx0XHRkZWxldGVJdGVtOiBcIi9hcGkvdWl3aWRnZXQvJHttb2RlbC53aWRnZXRJZH1cIlxyXG5cdH0sXHJcblx0dHlwZXM6IHt9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFdpZGdldE1vZHVsZUNvbmZpZz4oXCJXaWRnZXRNb2R1bGVDb25maWdcIik7XHJcbiJdfQ==
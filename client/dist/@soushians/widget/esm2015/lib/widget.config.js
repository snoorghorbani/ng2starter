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
export const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
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
export const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("WidgetModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3dpZGdldC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0IvQyxNQUFNLENBQUMsdUJBQU0scUJBQXFCLEdBQXVCO0lBQ3hELGVBQWUsRUFBRSx1QkFBdUI7SUFDeEMsY0FBYyxFQUFFLEVBQUU7SUFDbEIsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsb0NBQW9DO1FBQzVDLElBQUksRUFBRSxvQ0FBb0M7UUFDMUMsR0FBRyxFQUFFLGlEQUFpRDtLQUN0RDtJQUNELEtBQUssRUFBRSxFQUFFO0NBQ1QsQ0FBQztBQUNGLE1BQU0sQ0FBQyx1QkFBTSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBcUIsb0JBQW9CLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSU1vZHVsZUNvbmZpZ01hcFR5cGVzIH0gZnJvbSBcIi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldE1vZHVsZUNvbmZpZyB7XHJcblx0ZGV2ZWxvcG1lbnRfdXJpPzogc3RyaW5nO1xyXG5cdHByb2R1Y3Rpb25fdXJpPzogc3RyaW5nO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGZpbmQ6IHN0cmluZztcclxuXHRcdHVwc2VydDogc3RyaW5nO1xyXG5cdH07XHJcblx0dHlwZXM/OiBJTW9kdWxlQ29uZmlnTWFwVHlwZXM7XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogV2lkZ2V0TW9kdWxlQ29uZmlnID0ge1xyXG5cdGRldmVsb3BtZW50X3VyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuXHRwcm9kdWN0aW9uX3VyaTogXCJcIixcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Vpd2lkZ2V0XCIsXHJcblx0XHRmaW5kOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdWl3aWRnZXRcIixcclxuXHRcdGdldDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Vpd2lkZ2V0LyR7bW9kZWwuX2lkfVwiXHJcblx0fSxcclxuXHR0eXBlczoge31cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48V2lkZ2V0TW9kdWxlQ29uZmlnPihcIldpZGdldE1vZHVsZUNvbmZpZ1wiKTtcclxuIl19
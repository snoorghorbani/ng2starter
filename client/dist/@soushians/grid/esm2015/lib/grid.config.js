/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function IGridType() { }
function IGridType_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    IGridType.prototype.upsertComponet;
    /** @type {?|undefined} */
    IGridType.prototype.configComponent;
    /** @type {?|undefined} */
    IGridType.prototype.type;
    /** @type {?} */
    IGridType.prototype.viewComponent;
}
/**
 * @record
 */
export function GridModuleConfig() { }
function GridModuleConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    GridModuleConfig.prototype.development_uri;
    /** @type {?|undefined} */
    GridModuleConfig.prototype.production_uri;
    /** @type {?|undefined} */
    GridModuleConfig.prototype.env;
    /** @type {?|undefined} */
    GridModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    GridModuleConfig.prototype.types;
}
export const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    development_uri: "http://localhost:3000",
    production_uri: "",
    env: {
        production: false
    },
    endpoints: {
        upsert: "http://localhost:3000/api/grid",
        find: "http://localhost:3000/api/grid",
        get: "http://localhost:3000/api/grid/${model._id}"
    },
    types: {}
};
export const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("GridModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQi9DLE1BQU0sQ0FBQyx1QkFBTSxxQkFBcUIsR0FBcUI7SUFDdEQsZUFBZSxFQUFFLHVCQUF1QjtJQUN4QyxjQUFjLEVBQUUsRUFBRTtJQUNsQixHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNWLE1BQU0sRUFBRSxnQ0FBZ0M7UUFDeEMsSUFBSSxFQUFFLGdDQUFnQztRQUN0QyxHQUFHLEVBQUUsNkNBQTZDO0tBQ2xEO0lBQ0QsS0FBSyxFQUFFLEVBQUU7Q0FDVCxDQUFDO0FBQ0YsTUFBTSxDQUFDLHVCQUFNLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUFtQixrQkFBa0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkVHlwZSB7XHJcblx0dXBzZXJ0Q29tcG9uZXQ/OiBhbnk7XHJcblx0Y29uZmlnQ29tcG9uZW50PzogYW55O1xyXG5cdHR5cGU/OiBcInNpbXBsZVwiIHwgXCJjb21wbGV4XCI7XHJcblx0dmlld0NvbXBvbmVudDogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZE1vZHVsZUNvbmZpZyB7XHJcblx0ZGV2ZWxvcG1lbnRfdXJpPzogc3RyaW5nO1xyXG5cdHByb2R1Y3Rpb25fdXJpPzogc3RyaW5nO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGZpbmQ6IHN0cmluZztcclxuXHRcdHVwc2VydDogc3RyaW5nO1xyXG5cdH07XHJcblx0dHlwZXM/OiB7IFtrZXk6IHN0cmluZ106IElHcmlkVHlwZSB9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEdyaWRNb2R1bGVDb25maWcgPSB7XHJcblx0ZGV2ZWxvcG1lbnRfdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxyXG5cdHByb2R1Y3Rpb25fdXJpOiBcIlwiLFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2VcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0dXBzZXJ0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JpZFwiLFxyXG5cdFx0ZmluZDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyaWRcIixcclxuXHRcdGdldDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyaWQvJHttb2RlbC5faWR9XCJcclxuXHR9LFxyXG5cdHR5cGVzOiB7fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxHcmlkTW9kdWxlQ29uZmlnPihcIkdyaWRNb2R1bGVDb25maWdcIik7XHJcbiJdfQ==
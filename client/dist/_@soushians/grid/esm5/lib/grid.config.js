/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function IGridType() { }
if (false) {
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
if (false) {
    /** @type {?|undefined} */
    GridModuleConfig.prototype.env;
    /** @type {?|undefined} */
    GridModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    GridModuleConfig.prototype.types;
}
/** @type {?} */
export var MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: ""
    },
    endpoints: {
        upsert: "/api/grid",
        find: "/api/grid",
        get: "/api/grid/${model._id}",
        update_item: "/api/grid/item",
        update_item_access: "/api/grid/item/access"
    },
    types: {}
};
/** @type {?} */
export var MODULE_CONFIG_TOKEN = new InjectionToken("GridModuleConfig");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFDL0MsK0JBS0M7OztJQUpBLG1DQUFxQjs7SUFDckIsb0NBQXNCOztJQUN0Qix5QkFBNEI7O0lBQzVCLGtDQUFtQjs7Ozs7QUFFcEIsc0NBYUM7OztJQVpBLCtCQUdFOztJQUNGLHFDQU1FOztJQUNGLGlDQUFxQzs7O0FBR3RDLE1BQU0sS0FBTyxxQkFBcUIsR0FBcUI7SUFDdEQsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLEVBQUU7S0FDbkI7SUFDRCxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsV0FBVztRQUNuQixJQUFJLEVBQUUsV0FBVztRQUNqQixHQUFHLEVBQUUsd0JBQXdCO1FBQzdCLFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0Isa0JBQWtCLEVBQUUsdUJBQXVCO0tBQzNDO0lBQ0QsS0FBSyxFQUFFLEVBQUU7Q0FDVDs7QUFFRCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQW1CLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkVHlwZSB7XHJcblx0dXBzZXJ0Q29tcG9uZXQ/OiBhbnk7XHJcblx0Y29uZmlnQ29tcG9uZW50PzogYW55O1xyXG5cdHR5cGU/OiBcInNpbXBsZVwiIHwgXCJjb21wbGV4XCI7XHJcblx0dmlld0NvbXBvbmVudDogYW55O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZE1vZHVsZUNvbmZpZyB7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHRcdHVwZGF0ZV9pdGVtOiBzdHJpbmc7XHJcblx0XHR1cGRhdGVfaXRlbV9hY2Nlc3M6IHN0cmluZztcclxuXHR9O1xyXG5cdHR5cGVzPzogeyBba2V5OiBzdHJpbmddOiBJR3JpZFR5cGUgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogR3JpZE1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcIlwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCIvYXBpL2dyaWRcIixcclxuXHRcdGZpbmQ6IFwiL2FwaS9ncmlkXCIsXHJcblx0XHRnZXQ6IFwiL2FwaS9ncmlkLyR7bW9kZWwuX2lkfVwiLFxyXG5cdFx0dXBkYXRlX2l0ZW06IFwiL2FwaS9ncmlkL2l0ZW1cIixcclxuXHRcdHVwZGF0ZV9pdGVtX2FjY2VzczogXCIvYXBpL2dyaWQvaXRlbS9hY2Nlc3NcIlxyXG5cdH0sXHJcblx0dHlwZXM6IHt9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxHcmlkTW9kdWxlQ29uZmlnPihcIkdyaWRNb2R1bGVDb25maWdcIik7XHJcbiJdfQ==
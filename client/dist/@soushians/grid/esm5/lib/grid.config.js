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
    GridModuleConfig.prototype.env;
    /** @type {?|undefined} */
    GridModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    GridModuleConfig.prototype.types;
}
export var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: ""
    },
    endpoints: {
        upsert: "/api/grid",
        find: "/api/grid",
        get: "/api/grid/${model._id}"
    },
    types: {}
};
export var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("GridModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CL0MsTUFBTSxDQUFDLHFCQUFNLHFCQUFxQixHQUFxQjtJQUN0RCxHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUsRUFBRTtLQUNuQjtJQUNELFNBQVMsRUFBRTtRQUNWLE1BQU0sRUFBRSxXQUFXO1FBQ25CLElBQUksRUFBRSxXQUFXO1FBQ2pCLEdBQUcsRUFBRSx3QkFBd0I7S0FDN0I7SUFDRCxLQUFLLEVBQUUsRUFBRTtDQUNULENBQUM7QUFDRixNQUFNLENBQUMscUJBQU0sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQW1CLGtCQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRUeXBlIHtcclxuXHR1cHNlcnRDb21wb25ldD86IGFueTtcclxuXHRjb25maWdDb21wb25lbnQ/OiBhbnk7XHJcblx0dHlwZT86IFwic2ltcGxlXCIgfCBcImNvbXBsZXhcIjtcclxuXHR2aWV3Q29tcG9uZW50OiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHcmlkTW9kdWxlQ29uZmlnIHtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGZpbmQ6IHN0cmluZztcclxuXHRcdHVwc2VydDogc3RyaW5nO1xyXG5cdH07XHJcblx0dHlwZXM/OiB7IFtrZXk6IHN0cmluZ106IElHcmlkVHlwZSB9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEdyaWRNb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJcIlxyXG5cdH0sXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9ncmlkXCIsXHJcblx0XHRmaW5kOiBcIi9hcGkvZ3JpZFwiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvZ3JpZC8ke21vZGVsLl9pZH1cIlxyXG5cdH0sXHJcblx0dHlwZXM6IHt9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPEdyaWRNb2R1bGVDb25maWc+KFwiR3JpZE1vZHVsZUNvbmZpZ1wiKTtcclxuIl19
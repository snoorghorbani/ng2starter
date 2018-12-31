/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function IGridType() { }
/** @type {?|undefined} */
IGridType.prototype.upsertComponet;
/** @type {?|undefined} */
IGridType.prototype.configComponent;
/** @type {?|undefined} */
IGridType.prototype.type;
/** @type {?} */
IGridType.prototype.viewComponent;
/**
 * @record
 */
export function GridModuleConfig() { }
/** @type {?|undefined} */
GridModuleConfig.prototype.env;
/** @type {?|undefined} */
GridModuleConfig.prototype.endpoints;
/** @type {?|undefined} */
GridModuleConfig.prototype.types;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCL0MsV0FBYSxxQkFBcUIsR0FBcUI7SUFDdEQsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLEVBQUU7S0FDbkI7SUFDRCxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsV0FBVztRQUNuQixJQUFJLEVBQUUsV0FBVztRQUNqQixHQUFHLEVBQUUsd0JBQXdCO1FBQzdCLFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0Isa0JBQWtCLEVBQUUsdUJBQXVCO0tBQzNDO0lBQ0QsS0FBSyxFQUFFLEVBQUU7Q0FDVCxDQUFDOztBQUVGLFdBQWEsbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQW1CLGtCQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRUeXBlIHtcclxuXHR1cHNlcnRDb21wb25ldD86IGFueTtcclxuXHRjb25maWdDb21wb25lbnQ/OiBhbnk7XHJcblx0dHlwZT86IFwic2ltcGxlXCIgfCBcImNvbXBsZXhcIjtcclxuXHR2aWV3Q29tcG9uZW50OiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHcmlkTW9kdWxlQ29uZmlnIHtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGZpbmQ6IHN0cmluZztcclxuXHRcdHVwc2VydDogc3RyaW5nO1xyXG5cdFx0dXBkYXRlX2l0ZW06IHN0cmluZztcclxuXHRcdHVwZGF0ZV9pdGVtX2FjY2Vzczogc3RyaW5nO1xyXG5cdH07XHJcblx0dHlwZXM/OiB7IFtrZXk6IHN0cmluZ106IElHcmlkVHlwZSB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBHcmlkTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiXCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0dXBzZXJ0OiBcIi9hcGkvZ3JpZFwiLFxyXG5cdFx0ZmluZDogXCIvYXBpL2dyaWRcIixcclxuXHRcdGdldDogXCIvYXBpL2dyaWQvJHttb2RlbC5faWR9XCIsXHJcblx0XHR1cGRhdGVfaXRlbTogXCIvYXBpL2dyaWQvaXRlbVwiLFxyXG5cdFx0dXBkYXRlX2l0ZW1fYWNjZXNzOiBcIi9hcGkvZ3JpZC9pdGVtL2FjY2Vzc1wiXHJcblx0fSxcclxuXHR0eXBlczoge31cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPEdyaWRNb2R1bGVDb25maWc+KFwiR3JpZE1vZHVsZUNvbmZpZ1wiKTtcclxuIl19
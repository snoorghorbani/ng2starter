/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function PageModuleConfig() { }
/** @type {?|undefined} */
PageModuleConfig.prototype.env;
/** @type {?|undefined} */
PageModuleConfig.prototype.endpoints;
/** @type {?} */
export const MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: "frontend_server/did/not/set"
    },
    endpoints: {
        upsert: "/api/page",
        delete: "/api/page/${model._id}",
        find: "/api/page",
        get: "/api/page/${model.name}"
    }
};
/** @type {?} */
export const MODULE_CONFIG_TOKEN = new InjectionToken("PageModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFjL0MsYUFBYSxxQkFBcUIsR0FBcUI7SUFDdEQsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLDZCQUE2QjtLQUM5QztJQUNELFNBQVMsRUFBRTtRQUNWLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE1BQU0sRUFBRSx3QkFBd0I7UUFDaEMsSUFBSSxFQUFFLFdBQVc7UUFDakIsR0FBRyxFQUFFLHlCQUF5QjtLQUM5QjtDQUNELENBQUM7O0FBQ0YsYUFBYSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBbUIsa0JBQWtCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZU1vZHVsZUNvbmZpZyB7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRkZWxldGU6IHN0cmluZztcclxuXHRcdGZpbmQ6IHN0cmluZztcclxuXHRcdHVwc2VydDogc3RyaW5nO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogUGFnZU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCIvYXBpL3BhZ2VcIixcclxuXHRcdGRlbGV0ZTogXCIvYXBpL3BhZ2UvJHttb2RlbC5faWR9XCIsXHJcblx0XHRmaW5kOiBcIi9hcGkvcGFnZVwiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvcGFnZS8ke21vZGVsLm5hbWV9XCJcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFBhZ2VNb2R1bGVDb25maWc+KFwiUGFnZU1vZHVsZUNvbmZpZ1wiKTtcclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function RuleModuleConfig() { }
function RuleModuleConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    RuleModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    RuleModuleConfig.prototype.stepClasses;
    /** @type {?|undefined} */
    RuleModuleConfig.prototype.steps;
    /** @type {?|undefined} */
    RuleModuleConfig.prototype.env;
}
export var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        upsert: "/api/gwt/scenario",
        get: "/api/gwt/anchor/${model.anchorId}/scenarios"
    },
    stepClasses: [],
    env: {
        production: false,
        frontend_server: "http://localhost:3000"
    }
};
export var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("RuleModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3J1bGUvIiwic291cmNlcyI6WyJsaWIvcnVsZS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVEsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWVyRCxNQUFNLENBQUMscUJBQU0scUJBQXFCLEdBQXFCO0lBQ3RELFNBQVMsRUFBRTtRQUNWLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsR0FBRyxFQUFFLDZDQUE2QztLQUNsRDtJQUNELFdBQVcsRUFBRSxFQUFFO0lBQ2YsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLHVCQUF1QjtLQUN4QztDQUNELENBQUM7QUFDRixNQUFNLENBQUMscUJBQU0sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQW1CLGtCQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi9tb2RlbHMvZ3d0LXN0ZXAubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZU1vZHVsZUNvbmZpZyB7XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0dXBzZXJ0Pzogc3RyaW5nO1xyXG5cdFx0Z2V0Pzogc3RyaW5nO1xyXG5cdH07XHJcblx0c3RlcENsYXNzZXM/OiBUeXBlPEd3dFN0ZXA+W107XHJcblx0c3RlcHM/OiBHd3RTdGVwW107XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogUnVsZU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCIvYXBpL2d3dC9zY2VuYXJpb1wiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvZ3d0L2FuY2hvci8ke21vZGVsLmFuY2hvcklkfS9zY2VuYXJpb3NcIlxyXG5cdH0sXHJcblx0c3RlcENsYXNzZXM6IFtdLFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFJ1bGVNb2R1bGVDb25maWc+KFwiUnVsZU1vZHVsZUNvbmZpZ1wiKTtcclxuIl19
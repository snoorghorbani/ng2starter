/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from "../grid.config";
var GridConfigurationService = /** @class */ (function () {
    function GridConfigurationService(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        // this.store.select(getGridModuleConfig).subscribe((gridConfig) => {
        // 	if (!gridConfig) {
        // 		return;
        // 	}
        // 	this._config = Object.assign({}, this._config, gridConfig.Config);
        // 	this.config$.next(this._config);
        // });
    }
    Object.defineProperty(GridConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    GridConfigurationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GridConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    return GridConfigurationService;
}());
export { GridConfigurationService };
if (false) {
    /** @type {?} */
    GridConfigurationService.prototype._config;
    /** @type {?} */
    GridConfigurationService.prototype.config$;
    /** @type {?} */
    GridConfigurationService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQW9CLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBVTdGLGtDQUF5QyxVQUFVLEVBQVUsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFEbkYsZUFBVSxJQUFJLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7OztLQVFoQztJQWRELHNCQUFJLDRDQUFNOzs7O1FBQVY7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDcEI7OztPQUFBOztnQkFMRCxVQUFVOzs7O2dEQU9HLE1BQU0sU0FBQyxtQkFBbUI7Z0JBWi9CLEtBQUs7O21DQUZkOztTQVFhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vZ3JpZC5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogR3JpZE1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB0aGlzLnN0b3JlLnNlbGVjdChnZXRHcmlkTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoKGdyaWRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCFncmlkQ29uZmlnKSB7XHJcblx0XHQvLyBcdFx0cmV0dXJuO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgZ3JpZENvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
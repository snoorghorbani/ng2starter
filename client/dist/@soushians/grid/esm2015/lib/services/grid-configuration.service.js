/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from "../grid.config";
export class GridConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
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
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
GridConfigurationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GridConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
if (false) {
    /** @type {?} */
    GridConfigurationService.prototype._config;
    /** @type {?} */
    GridConfigurationService.prototype.config$;
    /** @type {?} */
    GridConfigurationService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQW9CLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJOUYsTUFBTTs7Ozs7SUFNTCxZQUF5QyxVQUFVLEVBQVUsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7dUJBRHpFLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDO1FBRW5ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7OztLQVFoQzs7OztJQWRELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNwQjs7O1lBTEQsVUFBVTs7Ozs0Q0FPRyxNQUFNLFNBQUMsbUJBQW1CO1lBWi9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL2dyaWQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IEdyaWRNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0R3JpZE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKChncmlkQ29uZmlnKSA9PiB7XHJcblx0XHQvLyBcdGlmICghZ3JpZENvbmZpZykge1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGdyaWRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
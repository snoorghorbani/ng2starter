/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from "../widget.config";
export class WidgetConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        // this.store.select(getWidgetModuleConfig).subscribe((widgetConfig) => {
        // 	if (!widgetConfig) {
        // 		return;
        // 	}
        // 	this._config = Object.assign({}, this._config, widgetConfig.Config);
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
WidgetConfigurationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WidgetConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
if (false) {
    /** @type {?} */
    WidgetConfigurationService.prototype._config;
    /** @type {?} */
    WidgetConfigurationService.prototype.config$;
    /** @type {?} */
    WidgetConfigurationService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQXNCLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJbEcsTUFBTTs7Ozs7SUFNTCxZQUF5QyxVQUFVLEVBQVUsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7dUJBRHpFLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDO1FBRW5ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7OztLQVFoQzs7OztJQWRELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNwQjs7O1lBTEQsVUFBVTs7Ozs0Q0FPRyxNQUFNLFNBQUMsbUJBQW1CO1lBWi9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vd2lkZ2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogV2lkZ2V0TW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldFdpZGdldE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKCh3aWRnZXRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCF3aWRnZXRDb25maWcpIHtcclxuXHRcdC8vIFx0XHRyZXR1cm47XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB3aWRnZXRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
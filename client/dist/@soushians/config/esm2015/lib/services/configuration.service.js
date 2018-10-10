/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../config.config";
import { getConfigModuleConfig } from "../reducers";
import * as i0 from "@angular/core";
import * as i1 from "../config.config";
import * as i2 from "@ngrx/store";
export class ConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getConfigModuleConfig).subscribe(configConfig => {
            if (!configConfig)
                return;
            this._config = Object.assign({}, this._config, configConfig.Config);
            this.config$.next(this._config);
        });
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
ConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.inject(i1.MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: ConfigurationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ConfigurationService.prototype._config;
    /** @type {?} */
    ConfigurationService.prototype.config$;
    /** @type {?} */
    ConfigurationService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQXNCLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBS3BELE1BQU07Ozs7O0lBT0wsWUFBeUMsVUFBOEIsRUFBVSxLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO3VCQUZ4RixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxZQUFZO2dCQUFFLE9BQU87WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEMsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFiRCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDcEI7OztZQVBELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozs0Q0FRYSxNQUFNLFNBQUMsbUJBQW1CO1lBakIvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9jb25maWcuY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldENvbmZpZ01vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBDb25maWdNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZTogQ29uZmlnTW9kdWxlQ29uZmlnLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldENvbmZpZ01vZHVsZUNvbmZpZykuc3Vic2NyaWJlKGNvbmZpZ0NvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghY29uZmlnQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgY29uZmlnQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
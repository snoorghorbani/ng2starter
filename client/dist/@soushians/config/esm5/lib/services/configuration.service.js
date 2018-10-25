/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../config.config";
import { getConfigModuleConfig } from "../reducers";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import * as i0 from "@angular/core";
import * as i1 from "../config.config";
import * as i2 from "@ngrx/store";
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getConfigModuleConfig).subscribe(function (configConfig) {
            if (!configConfig)
                return;
            _this._config = Object.assign({}, _this._config, configConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(ConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.inject(i1.MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());
export { ConfigurationService };
if (false) {
    /** @type {?} */
    ConfigurationService.prototype._config;
    /** @type {?} */
    ConfigurationService.prototype.config$;
    /** @type {?} */
    ConfigurationService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBc0IsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztJQVl0RCw4QkFBeUMsVUFBOEIsRUFBVSxLQUFpQjtRQUFsRyxpQkFRQztRQVJnRixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBRmxHLGVBQVUsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsWUFBWTtZQUM5RCxJQUFJLENBQUMsWUFBWTtnQkFBRSxPQUFPO1lBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztLQUNIO0lBYkQsc0JBQUksd0NBQU07Ozs7UUFBVjtZQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNwQjs7O09BQUE7O2dCQVBELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0RBUWEsTUFBTSxTQUFDLG1CQUFtQjtnQkFqQi9CLEtBQUs7OzsrQkFEZDs7U0FXYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vY29uZmlnLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IENvbmZpZ01vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBDb25maWdNb2R1bGVDb25maWcsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZ2V0Q29uZmlnTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoY29uZmlnQ29uZmlnID0+IHtcclxuXHRcdFx0aWYgKCFjb25maWdDb25maWcpIHJldHVybjtcclxuXHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCBjb25maWdDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
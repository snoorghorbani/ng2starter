/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { getConfigs } from "@soushians/config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../layout.config";
import { UpdateLayoutConfigAction } from "../actions";
import * as i0 from "@angular/core";
import * as i1 from "../layout.config";
import * as i2 from "@ngrx/store";
var LayoutConfigurationService = /** @class */ (function () {
    function LayoutConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store
            .select(getConfigs)
            .map(function (configs) { return configs.find(function (config) { return config.Name == "layout_config"; }); })
            .subscribe(function (config) {
            if (!config)
                return;
            _this.store.dispatch(new UpdateLayoutConfigAction(config.Config));
            _this._config = Object.assign({}, _this._config, config.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(LayoutConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    LayoutConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    LayoutConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ LayoutConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function LayoutConfigurationService_Factory() { return new LayoutConfigurationService(i0.inject(i1.MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: LayoutConfigurationService, providedIn: "root" });
    return LayoutConfigurationService;
}());
export { LayoutConfigurationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutConfigurationService.prototype._config;
    /** @type {?} */
    LayoutConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    LayoutConfigurationService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFJdEQ7SUFXQyxvQ0FBeUMsVUFBVSxFQUFVLEtBQTBCO1FBQXZGLGlCQVlDO1FBWjRELFVBQUssR0FBTCxLQUFLLENBQXFCO1FBRnZGLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBMEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR3BFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLO2FBQ1IsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUNsQixHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSxlQUFlLEVBQTlCLENBQThCLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQzthQUN0RSxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2hCLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFDcEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqRSxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQkQsc0JBQUksOENBQU07Ozs7UUFBVjtZQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7Z0JBUkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnREFTYSxNQUFNLFNBQUMsbUJBQW1CO2dCQXJCL0IsS0FBSzs7O3FDQURkO0NBbUNDLEFBeEJELElBd0JDO1NBckJZLDBCQUEwQjs7Ozs7O0lBRXRDLDZDQUF5Qzs7SUFJekMsNkNBQXFFOzs7OztJQUVoQiwyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbmltcG9ydCB7IGdldENvbmZpZ3MgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9sYXlvdXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHQvLyBwcml2YXRlIF9jb25maWc6IExheW91dENvbmZpZ01vZGVsO1xyXG5cdHByaXZhdGUgX2NvbmZpZzogTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExheW91dE1vZHVsZUNvbmZpZ01vZGVsPih0aGlzLl9jb25maWcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldENvbmZpZ3MpXHJcblx0XHRcdC5tYXAoY29uZmlncyA9PiBjb25maWdzLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwibGF5b3V0X2NvbmZpZ1wiKSlcclxuXHRcdFx0LnN1YnNjcmliZShjb25maWcgPT4ge1xyXG5cdFx0XHRcdGlmICghY29uZmlnKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uKGNvbmZpZy5Db25maWcpKTtcclxuXHRcdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
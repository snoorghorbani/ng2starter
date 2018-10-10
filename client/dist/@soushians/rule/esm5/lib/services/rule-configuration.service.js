/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject, Injector } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../rule.config";
var RuleConfigurationService = /** @class */ (function () {
    function RuleConfigurationService(configFile, store, injector) {
        var _this = this;
        this.store = store;
        this.injector = injector;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        // instantiate steps and used them
        configFile.steps = configFile.stepClasses.map(function (step) { return new step(_this.injector); });
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        // this.store.select(getRuleModuleConfig).subscribe(userConfig => {
        // 	if (!userConfig) return;
        // 	this._config = Object.assign({}, this._config, userConfig.Config);
        // 	this.config$.next(this._config);
        // });
    }
    Object.defineProperty(RuleConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    RuleConfigurationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RuleConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store },
        { type: Injector }
    ]; };
    return RuleConfigurationService;
}());
export { RuleConfigurationService };
if (false) {
    /** @type {?} */
    RuleConfigurationService.prototype._config;
    /** @type {?} */
    RuleConfigurationService.prototype.config$;
    /** @type {?} */
    RuleConfigurationService.prototype.store;
    /** @type {?} */
    RuleConfigurationService.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3J1bGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUl2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFXM0Usa0NBQzhCLFVBQTRCLEVBQ2pELE9BQ0E7UUFIVCxpQkFpQkM7UUFmUSxVQUFLLEdBQUwsS0FBSztRQUNMLGFBQVEsR0FBUixRQUFRO3VCQUxQLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDOztRQVFuRCxVQUFVLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFFL0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7OztLQU9oQztJQXRCRCxzQkFBSSw0Q0FBTTs7OztRQUFWO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3BCOzs7T0FBQTs7Z0JBTEQsVUFBVTs7OztnREFTUixNQUFNLFNBQUMsbUJBQW1CO2dCQWxCcEIsS0FBSztnQkFEZSxRQUFROzttQ0FBckM7O1NBV2Esd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgZ2V0UnVsZU1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSdWxlTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3J1bGUuY29uZmlnXCI7XHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSdWxlU3RhdGUgfSBmcm9tIFwiLi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFJ1bGVNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBSdWxlTW9kdWxlQ29uZmlnLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8UnVsZVN0YXRlPixcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXHJcblx0KSB7XHJcblx0XHQvLyBpbnN0YW50aWF0ZSBzdGVwcyBhbmQgdXNlZCB0aGVtXHJcblx0XHRjb25maWdGaWxlLnN0ZXBzID0gY29uZmlnRmlsZS5zdGVwQ2xhc3Nlcy5tYXAoc3RlcCA9PiBuZXcgc3RlcCh0aGlzLmluamVjdG9yKSk7XHJcblxyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldFJ1bGVNb2R1bGVDb25maWcpLnN1YnNjcmliZSh1c2VyQ29uZmlnID0+IHtcclxuXHRcdC8vIFx0aWYgKCF1c2VyQ29uZmlnKSByZXR1cm47XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdXNlckNvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
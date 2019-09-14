/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../frontend-authentication.config";
import * as i0 from "@angular/core";
import * as i1 from "../frontend-authentication.config";
import * as i2 from "@ngrx/store";
var FrontendAuthenticationConfigurationService = /** @class */ (function () {
    function FrontendAuthenticationConfigurationService(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        // this.store.select(getFrontendAuthenticationModuleConfig).subscribe(storeConfig => {
        // 	if (!storeConfig) return;
        // 	this._config = Object.assign({}, this._config, storeConfig.Config);
        // 	this.config$.next(this._config);
        // });
    }
    Object.defineProperty(FrontendAuthenticationConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    FrontendAuthenticationConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    FrontendAuthenticationConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ FrontendAuthenticationConfigurationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FrontendAuthenticationConfigurationService_Factory() { return new FrontendAuthenticationConfigurationService(i0.ɵɵinject(i1.MODULE_CONFIG_TOKEN), i0.ɵɵinject(i2.Store)); }, token: FrontendAuthenticationConfigurationService, providedIn: "root" });
    return FrontendAuthenticationConfigurationService;
}());
export { FrontendAuthenticationConfigurationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FrontendAuthenticationConfigurationService.prototype._config;
    /** @type {?} */
    FrontendAuthenticationConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    FrontendAuthenticationConfigurationService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQ04sbUJBQW1CLEVBRW5CLHFCQUFxQixFQUNyQixNQUFNLG1DQUFtQyxDQUFDOzs7O0FBRzNDO0lBVUMsb0RBQXlDLFVBQWUsRUFBVSxLQUF5QztRQUF6QyxVQUFLLEdBQUwsS0FBSyxDQUFvQztRQUYzRyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLHNGQUFzRjtRQUN0Riw2QkFBNkI7UUFDN0IsdUVBQXVFO1FBQ3ZFLG9DQUFvQztRQUNwQyxNQUFNO0lBQ1AsQ0FBQztJQWJELHNCQUFJLDhEQUFNOzs7O1FBQVY7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7O2dCQVBELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0RBUWEsTUFBTSxTQUFDLG1CQUFtQjtnQkFyQi9CLEtBQUs7OztxREFEZDtDQStCQyxBQW5CRCxJQW1CQztTQWhCWSwwQ0FBMEM7Ozs7OztJQUN0RCw2REFBb0Q7O0lBSXBELDZEQUE0Qzs7Ozs7SUFFYywyREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRNT0RVTEVfQ09ORklHX1RPS0VOLFxyXG5cdEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcsXHJcblx0TU9EVUxFX0RFRkFVTFRfQ09ORklHXHJcbn0gZnJvbSBcIi4uL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRnJvbnRlbmRBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZTogYW55LCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcpLnN1YnNjcmliZShzdG9yZUNvbmZpZyA9PiB7XHJcblx0XHQvLyBcdGlmICghc3RvcmVDb25maWcpIHJldHVybjtcclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCBzdG9yZUNvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
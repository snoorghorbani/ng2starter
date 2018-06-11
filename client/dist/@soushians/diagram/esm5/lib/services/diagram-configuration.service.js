/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../diagram.config";
import * as i0 from "@angular/core";
import * as i1 from "../diagram.config";
var DiagramConfigurationService = /** @class */ (function () {
    function DiagramConfigurationService(config) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
    Object.defineProperty(DiagramConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    DiagramConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    DiagramConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] }
    ]; };
    /** @nocollapse */ DiagramConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function DiagramConfigurationService_Factory() { return new DiagramConfigurationService(i0.inject(i1.MODULE_CONFIG_TOKEN)); }, token: DiagramConfigurationService, providedIn: "root" });
    return DiagramConfigurationService;
}());
export { DiagramConfigurationService };
function DiagramConfigurationService_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramConfigurationService.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxtQkFBbUIsRUFBdUIscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztJQVduRyxxQ0FBeUMsTUFBTTtRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2hFO0lBTkQsc0JBQUksK0NBQU07Ozs7UUFBVjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3BCOzs7T0FBQTs7Z0JBUEQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnREFPYSxNQUFNLFNBQUMsbUJBQW1COzs7c0NBYnhDOztTQU9hLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBEaWFncmFtTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vZGlhZ3JhbS5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IERpYWdyYW1Nb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZykge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWcpO1xyXG5cdH1cclxufVxyXG4iXX0=
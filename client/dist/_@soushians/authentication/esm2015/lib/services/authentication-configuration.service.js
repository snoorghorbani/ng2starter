/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { getAuthenticationModuleConfig } from "@soushians/config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../authentication.config";
import * as i0 from "@angular/core";
import * as i1 from "../authentication.config";
import * as i2 from "@ngrx/store";
export class AuthenticationConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getAuthenticationModuleConfig).subscribe(storeConfig => {
            if (!storeConfig)
                return;
            this._config = Object.assign({}, this._config, storeConfig.Config);
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
AuthenticationConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
AuthenticationConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(i0.inject(i1.MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: AuthenticationConfigurationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthenticationConfigurationService.prototype._config;
    /** @type {?} */
    AuthenticationConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    AuthenticationConfigurationService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQThCLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFNbEgsTUFBTSxPQUFPLGtDQUFrQzs7Ozs7SUFPOUMsWUFBeUMsVUFBZSxFQUFVLEtBQWlDO1FBQWpDLFVBQUssR0FBTCxLQUFLLENBQTRCO1FBRm5HLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEUsSUFBSSxDQUFDLFdBQVc7Z0JBQUUsT0FBTztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFiRCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7O1lBUEQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7OzRDQVFhLE1BQU0sU0FBQyxtQkFBbUI7WUFuQi9CLEtBQUs7Ozs7Ozs7O0lBYWIscURBQTRDOztJQUk1QyxxREFBNEM7Ozs7O0lBRWMsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2F1dGhlbnRpY2F0aW9uLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZTogYW55LCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBdXRoZW50aWNhdGlvblN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHN0b3JlQ29uZmlnID0+IHtcclxuXHRcdFx0aWYgKCFzdG9yZUNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHN0b3JlQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    { type: Injectable }
];
/** @nocollapse */
WidgetConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    WidgetConfigurationService.prototype._config;
    /** @type {?} */
    WidgetConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    WidgetConfigurationService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQXNCLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJbEcsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFNdEMsWUFBeUMsVUFBVSxFQUFVLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBRG5GLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLHlFQUF5RTtRQUN6RSx3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLEtBQUs7UUFDTCx3RUFBd0U7UUFDeEUsb0NBQW9DO1FBQ3BDLE1BQU07SUFDUCxDQUFDOzs7O0lBZEQsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7OztZQUxELFVBQVU7Ozs7NENBT0csTUFBTSxTQUFDLG1CQUFtQjtZQVovQixLQUFLOzs7Ozs7O0lBT2IsNkNBQW9DOztJQUlwQyw2Q0FBcUQ7Ozs7O0lBQ0EsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL3dpZGdldC5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFdpZGdldE1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB0aGlzLnN0b3JlLnNlbGVjdChnZXRXaWRnZXRNb2R1bGVDb25maWcpLnN1YnNjcmliZSgod2lkZ2V0Q29uZmlnKSA9PiB7XHJcblx0XHQvLyBcdGlmICghd2lkZ2V0Q29uZmlnKSB7XHJcblx0XHQvLyBcdFx0cmV0dXJuO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgd2lkZ2V0Q29uZmlnLkNvbmZpZyk7XHJcblx0XHQvLyBcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn1cclxuIl19
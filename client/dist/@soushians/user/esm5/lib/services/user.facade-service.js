/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getAccountInfo } from "../user.reducers";
import { UserConfigurationService } from "./user-configuration.service";
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "./user-configuration.service";
var UserFacadeService = /** @class */ (function () {
    function UserFacadeService(store, configService) {
        this.store = store;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    UserFacadeService.prototype.getDisplayName = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configService.config$
            .map(function (config) { return config.mapUserDisplayName; })
            .switchMap(function (mapper) { return _this.store.select(getAccountInfo).let(mapper); });
    };
    UserFacadeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    UserFacadeService.ctorParameters = function () { return [
        { type: Store },
        { type: UserConfigurationService }
    ]; };
    /** @nocollapse */ UserFacadeService.ngInjectableDef = i0.defineInjectable({ factory: function UserFacadeService_Factory() { return new UserFacadeService(i0.inject(i1.Store), i0.inject(i2.UserConfigurationService)); }, token: UserFacadeService, providedIn: "root" });
    return UserFacadeService;
}());
export { UserFacadeService };
function UserFacadeService_tsickle_Closure_declarations() {
    /** @type {?} */
    UserFacadeService.prototype.store;
    /** @type {?} */
    UserFacadeService.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5mYWNhZGUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyLmZhY2FkZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztJQU12RSwyQkFBb0IsS0FBc0IsRUFBVSxhQUF1QztRQUF2RSxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtLQUFJOzs7O0lBQy9GLDBDQUFjOzs7SUFBZDtRQUFBLGlCQUlDO1FBSEEsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzthQUMvQixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsa0JBQWtCLEVBQXpCLENBQXlCLENBQUM7YUFDeEMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQUM7S0FDckU7O2dCQVRELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBVFEsS0FBSztnQkFLTCx3QkFBd0I7Ozs0QkFOakM7O1NBV2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvIH0gZnJvbSBcIi4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckZhY2FkZVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcblx0Z2V0RGlzcGxheU5hbWUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQubWFwKGNvbmZpZyA9PiBjb25maWcubWFwVXNlckRpc3BsYXlOYW1lKVxyXG5cdFx0XHQuc3dpdGNoTWFwKG1hcHBlciA9PiB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbykubGV0KG1hcHBlcikpO1xyXG5cdH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return this.store.select(getAccountInfo).let(this.configService.config$.getValue().mapUserDisplayName);
        // .pipe(filter(displayName => displayName !== undefined));
    };
    /**
     * @return {?}
     */
    UserFacadeService.prototype.getInfo = /**
     * @return {?}
     */
    function () {
        return this.store.select(getAccountInfo);
    };
    UserFacadeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserFacadeService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    UserFacadeService.prototype.configService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5mYWNhZGUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyLmZhY2FkZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBR3hFO0lBSUMsMkJBQW9CLEtBQXNCLEVBQVUsYUFBdUM7UUFBdkUsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7SUFBRyxDQUFDOzs7O0lBQy9GLDBDQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdkcsMkRBQTJEO0lBQzVELENBQUM7Ozs7SUFDRCxtQ0FBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQVhELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBVFEsS0FBSztnQkFJTCx3QkFBd0I7Ozs0QkFMakM7Q0FvQkMsQUFaRCxJQVlDO1NBVFksaUJBQWlCOzs7Ozs7SUFDakIsa0NBQThCOzs7OztJQUFFLDBDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8sIEFwcFN0YXRlIH0gZnJvbSBcIi4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJGYWNhZGVTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG5cdGdldERpc3BsYXlOYW1lKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pLmxldCh0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLm1hcFVzZXJEaXNwbGF5TmFtZSk7XHJcblx0XHQvLyAucGlwZShmaWx0ZXIoZGlzcGxheU5hbWUgPT4gZGlzcGxheU5hbWUgIT09IHVuZGVmaW5lZCkpO1xyXG5cdH1cclxuXHRnZXRJbmZvKCk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pO1xyXG5cdH1cclxufVxyXG4iXX0=
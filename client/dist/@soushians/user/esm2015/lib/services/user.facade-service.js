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
export class UserFacadeService {
    /**
     * @param {?} store
     * @param {?} configService
     */
    constructor(store, configService) {
        this.store = store;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    getDisplayName() {
        return this.store.select(getAccountInfo).let(this.configService.config$.getValue().mapUserDisplayName);
        // .pipe(filter(displayName => displayName !== undefined));
    }
    /**
     * @return {?}
     */
    getInfo() {
        return this.store.select(getAccountInfo);
    }
}
UserFacadeService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
UserFacadeService.ctorParameters = () => [
    { type: Store },
    { type: UserConfigurationService }
];
/** @nocollapse */ UserFacadeService.ngInjectableDef = i0.defineInjectable({ factory: function UserFacadeService_Factory() { return new UserFacadeService(i0.inject(i1.Store), i0.inject(i2.UserConfigurationService)); }, token: UserFacadeService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5mYWNhZGUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyLmZhY2FkZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBTXhFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBQzdCLFlBQW9CLEtBQXNCLEVBQVUsYUFBdUM7UUFBdkUsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7SUFBRyxDQUFDOzs7O0lBQy9GLGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3ZHLDJEQUEyRDtJQUM1RCxDQUFDOzs7O0lBQ0QsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBWEQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVFEsS0FBSztZQUlMLHdCQUF3Qjs7Ozs7Ozs7SUFPcEIsa0NBQThCOzs7OztJQUFFLDBDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8sIEFwcFN0YXRlIH0gZnJvbSBcIi4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJGYWNhZGVTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG5cdGdldERpc3BsYXlOYW1lKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pLmxldCh0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLm1hcFVzZXJEaXNwbGF5TmFtZSk7XHJcblx0XHQvLyAucGlwZShmaWx0ZXIoZGlzcGxheU5hbWUgPT4gZGlzcGxheU5hbWUgIT09IHVuZGVmaW5lZCkpO1xyXG5cdH1cclxuXHRnZXRJbmZvKCk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pO1xyXG5cdH1cclxufVxyXG4iXX0=
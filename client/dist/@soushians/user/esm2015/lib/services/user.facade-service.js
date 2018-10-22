/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            },] },
];
/** @nocollapse */
UserFacadeService.ctorParameters = () => [
    { type: Store },
    { type: UserConfigurationService }
];
/** @nocollapse */ UserFacadeService.ngInjectableDef = i0.defineInjectable({ factory: function UserFacadeService_Factory() { return new UserFacadeService(i0.inject(i1.Store), i0.inject(i2.UserConfigurationService)); }, token: UserFacadeService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UserFacadeService.prototype.store;
    /** @type {?} */
    UserFacadeService.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5mYWNhZGUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyLmZhY2FkZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBTXhFLE1BQU07Ozs7O0lBQ0wsWUFBb0IsS0FBc0IsRUFBVSxhQUF1QztRQUF2RSxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtLQUFJOzs7O0lBQy9GLGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOztLQUV2Rzs7OztJQUNELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3pDOzs7WUFYRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFUUSxLQUFLO1lBSUwsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbywgQXBwU3RhdGUgfSBmcm9tIFwiLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckZhY2FkZVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcblx0Z2V0RGlzcGxheU5hbWUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbykubGV0KHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLmdldFZhbHVlKCkubWFwVXNlckRpc3BsYXlOYW1lKTtcclxuXHRcdC8vIC5waXBlKGZpbHRlcihkaXNwbGF5TmFtZSA9PiBkaXNwbGF5TmFtZSAhPT0gdW5kZWZpbmVkKSk7XHJcblx0fVxyXG5cdGdldEluZm8oKTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0fVxyXG59XHJcbiJdfQ==
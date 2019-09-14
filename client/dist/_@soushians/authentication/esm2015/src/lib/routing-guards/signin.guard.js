/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getLoggedIn } from "../reducers";
export class SigninGuard {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.store.select(getLoggedIn).take(1).map(authed => !authed);
    }
}
SigninGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SigninGuard.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SigninGuard.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9saWIvcm91dGluZy1ndWFyZHMvc2lnbmluLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFnQixXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHeEQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdkIsWUFBb0IsS0FBMEI7UUFBMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7SUFBRyxDQUFDOzs7Ozs7SUFFbEQsV0FBVyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDcEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUFORCxVQUFVOzs7O1lBTEYsS0FBSzs7Ozs7OztJQU9ELDRCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0TG9nZ2VkSW4gfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGdldExvZ2dlZEluKS50YWtlKDEpLm1hcChhdXRoZWQgPT4gIWF1dGhlZCk7XHJcblx0fVxyXG59XHJcbiJdfQ==
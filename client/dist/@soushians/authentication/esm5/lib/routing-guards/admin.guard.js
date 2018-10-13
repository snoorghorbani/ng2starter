/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getUser } from "../reducers";
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var AdminGuard = /** @class */ (function () {
    function AdminGuard(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AdminGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return this.store.select(getUser).take(1).map(function (user) {
            var /** @type {?} */ res = (/** @type {?} */ (user.Roles)).includes("Admin");
            // !res && this.store.dispatch(new SigninRedirect());
            return res;
        });
    };
    AdminGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    AdminGuard.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ AdminGuard.ngInjectableDef = i0.defineInjectable({ factory: function AdminGuard_Factory() { return new AdminGuard(i0.inject(i1.Store)); }, token: AdminGuard, providedIn: "root" });
    return AdminGuard;
}());
export { AdminGuard };
function AdminGuard_tsickle_Closure_declarations() {
    /** @type {?} */
    AdminGuard.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3JvdXRpbmctZ3VhcmRzL2FkbWluLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFnQixPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7SUFNbkQsb0JBQW9CLEtBQTBCO1FBQTFCLFVBQUssR0FBTCxLQUFLLENBQXFCO0tBQUk7Ozs7OztJQUVsRCxnQ0FBVzs7Ozs7SUFBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ2pELHFCQUFJLEdBQUcsR0FBRyxtQkFBQyxJQUFJLENBQUMsS0FBWSxFQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUVoRCxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsQ0FBQyxDQUFDO0tBQ0g7O2dCQVpELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBUFEsS0FBSzs7O3FCQUZkOztTQVVhLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldFVzZXIgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRVc2VyKS50YWtlKDEpLm1hcCh1c2VyID0+IHtcclxuXHRcdFx0dmFyIHJlcyA9ICh1c2VyLlJvbGVzIGFzIGFueSkuaW5jbHVkZXMoXCJBZG1pblwiKTtcclxuXHRcdFx0Ly8gIXJlcyAmJiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaWduaW5SZWRpcmVjdCgpKTtcclxuXHRcdFx0cmV0dXJuIHJlcztcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
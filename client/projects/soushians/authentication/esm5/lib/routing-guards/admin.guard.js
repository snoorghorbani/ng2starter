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
    /**
     * @param {?} store
     */
    function AdminGuard(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AdminGuard.prototype.canActivate = function (route, state) {
        return this.store.select(getUser).take(1).map(function (user) {
            var /** @type {?} */ res = ((user.Roles)).includes("Admin");
            // !res && this.store.dispatch(new SigninRedirect());
            return res;
        });
    };
    return AdminGuard;
}());
export { AdminGuard };
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
function AdminGuard_tsickle_Closure_declarations() {
    /** @type {?} */
    AdminGuard.prototype.store;
}
//# sourceMappingURL=admin.guard.js.map

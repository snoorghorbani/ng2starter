/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getUser } from "../reducers";
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var UserGuard = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function UserGuard(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    UserGuard.prototype.canActivate = function (route, state) {
        return this.store.select(getUser).take(1).map(function (user) { return ((user.Roles)).includes("User"); });
    };
    return UserGuard;
}());
export { UserGuard };
UserGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
UserGuard.ctorParameters = function () { return [
    { type: Store }
]; };
/** @nocollapse */ UserGuard.ngInjectableDef = i0.defineInjectable({ factory: function UserGuard_Factory() { return new UserGuard(i0.inject(i1.Store)); }, token: UserGuard, providedIn: "root" });
function UserGuard_tsickle_Closure_declarations() {
    /** @type {?} */
    UserGuard.prototype.store;
}
//# sourceMappingURL=user.guard.js.map

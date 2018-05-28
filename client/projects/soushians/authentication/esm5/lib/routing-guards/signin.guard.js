/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getLoggedIn } from "../reducers";
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var SigninGuard = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function SigninGuard(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    SigninGuard.prototype.canActivate = function (route, state) {
        return this.store.select(getLoggedIn).take(1).map(function (authed) { return !authed; });
    };
    return SigninGuard;
}());
export { SigninGuard };
SigninGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SigninGuard.ctorParameters = function () { return [
    { type: Store }
]; };
/** @nocollapse */ SigninGuard.ngInjectableDef = i0.defineInjectable({ factory: function SigninGuard_Factory() { return new SigninGuard(i0.inject(i1.Store)); }, token: SigninGuard, providedIn: "root" });
function SigninGuard_tsickle_Closure_declarations() {
    /** @type {?} */
    SigninGuard.prototype.store;
}
//# sourceMappingURL=signin.guard.js.map

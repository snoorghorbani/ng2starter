/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getUser } from "../reducers";
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var AgentGuard = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function AgentGuard(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AgentGuard.prototype.canActivate = function (route, state) {
        return this.store.select(getUser).take(1).map(function (user) {
            var /** @type {?} */ res = ((user.Roles)).includes("Agent");
            // !res && this.store.dispatch(new SigninRedirect());
            return res;
        });
    };
    return AgentGuard;
}());
export { AgentGuard };
AgentGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
AgentGuard.ctorParameters = function () { return [
    { type: Store }
]; };
/** @nocollapse */ AgentGuard.ngInjectableDef = i0.defineInjectable({ factory: function AgentGuard_Factory() { return new AgentGuard(i0.inject(i1.Store)); }, token: AgentGuard, providedIn: "root" });
function AgentGuard_tsickle_Closure_declarations() {
    /** @type {?} */
    AgentGuard.prototype.store;
}
//# sourceMappingURL=agent.guard.js.map

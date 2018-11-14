/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getUser } from "../reducers";
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class AgentGuard {
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
        return this.store.select(getUser).take(1).map(user => {
            /** @type {?} */
            var res = (/** @type {?} */ (user.Roles)).includes("Agent");
            // !res && this.store.dispatch(new SigninRedirect());
            return res;
        });
    }
}
AgentGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
AgentGuard.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ AgentGuard.ngInjectableDef = i0.defineInjectable({ factory: function AgentGuard_Factory() { return new AgentGuard(i0.inject(i1.Store)); }, token: AgentGuard, providedIn: "root" });
if (false) {
    /** @type {?} */
    AgentGuard.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbnQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3JvdXRpbmctZ3VhcmRzL2FnZW50Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFnQixPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQUtwRCxNQUFNOzs7O0lBQ0wsWUFBb0IsS0FBMEI7UUFBMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7S0FBSTs7Ozs7O0lBRWxELFdBQVcsQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTs7WUFDcEQsSUFBSSxHQUFHLEdBQUcsbUJBQUMsSUFBSSxDQUFDLEtBQVksRUFBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFFaEQsT0FBTyxHQUFHLENBQUM7U0FDWCxDQUFDLENBQUM7S0FDSDs7O1lBWkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBTlEsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRVc2VyIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFnZW50R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge31cclxuXHJcblx0Y2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0VXNlcikudGFrZSgxKS5tYXAodXNlciA9PiB7XHJcblx0XHRcdHZhciByZXMgPSAodXNlci5Sb2xlcyBhcyBhbnkpLmluY2x1ZGVzKFwiQWdlbnRcIik7XHJcblx0XHRcdC8vICFyZXMgJiYgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbmluUmVkaXJlY3QoKSk7XHJcblx0XHRcdHJldHVybiByZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
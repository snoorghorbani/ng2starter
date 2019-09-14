/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getUser } from "../reducers";
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var AgentGuard = /** @class */ (function () {
    function AgentGuard(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AgentGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return this.store.select(getUser).take(1).map(function (user) {
            /** @type {?} */
            var res = ((/** @type {?} */ (user.Roles))).includes("Agent");
            // !res && this.store.dispatch(new SigninRedirect());
            return res;
        });
    };
    AgentGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    AgentGuard.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ AgentGuard.ngInjectableDef = i0.defineInjectable({ factory: function AgentGuard_Factory() { return new AgentGuard(i0.inject(i1.Store)); }, token: AgentGuard, providedIn: "root" });
    return AgentGuard;
}());
export { AgentGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AgentGuard.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbnQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsic3JjL2xpYi9yb3V0aW5nLWd1YXJkcy9hZ2VudC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBZ0IsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFFcEQ7SUFJQyxvQkFBb0IsS0FBMEI7UUFBMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7SUFBRyxDQUFDOzs7Ozs7SUFFbEQsZ0NBQVc7Ozs7O0lBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7O2dCQUM3QyxHQUFHLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQy9DLHFEQUFxRDtZQUNyRCxPQUFPLEdBQUcsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBWkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFOUSxLQUFLOzs7cUJBRmQ7Q0FtQkMsQUFiRCxJQWFDO1NBVlksVUFBVTs7Ozs7O0lBQ1YsMkJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldFVzZXIgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWdlbnRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRVc2VyKS50YWtlKDEpLm1hcCh1c2VyID0+IHtcclxuXHRcdFx0dmFyIHJlcyA9ICh1c2VyLlJvbGVzIGFzIGFueSkuaW5jbHVkZXMoXCJBZ2VudFwiKTtcclxuXHRcdFx0Ly8gIXJlcyAmJiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaWduaW5SZWRpcmVjdCgpKTtcclxuXHRcdFx0cmV0dXJuIHJlcztcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
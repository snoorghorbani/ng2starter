/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /** @type {?} */
    SigninGuard.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9yb3V0aW5nLWd1YXJkcy9zaWduaW4uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwQyxPQUFPLEVBQWdCLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd4RCxNQUFNLE9BQU8sV0FBVzs7OztJQUN2QixZQUFvQixLQUEwQjtRQUExQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtLQUFJOzs7Ozs7SUFFbEQsV0FBVyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDcEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyRTs7O1lBTkQsVUFBVTs7OztZQUxGLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldExvZ2dlZEluIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRMb2dnZWRJbikudGFrZSgxKS5tYXAoYXV0aGVkID0+ICFhdXRoZWQpO1xyXG5cdH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import "rxjs/add/operator/do";
import { Observable } from "rxjs/Observable";
import { HttpResponse } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { SignoutAction } from "../actions";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
var UnauthorizedInterceptor = /** @class */ (function () {
    /**
     * @param {?} router
     * @param {?} store
     */
    function UnauthorizedInterceptor(router, store // private signinService: SigninService
    ) {
        this.router = router;
        this.store = store;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    UnauthorizedInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next
            .handle(request)
            .map(function (event) {
            if (event instanceof HttpResponse)
                return event;
        })
            .catch(function (err) {
            if (!(err instanceof HttpErrorResponse))
                return;
            if (err.status != 401)
                return;
            if (err.url.includes("logout"))
                return;
            _this.store.dispatch(new SignoutAction());
            return Observable.throw("Unauthorized");
        });
    };
    return UnauthorizedInterceptor;
}());
export { UnauthorizedInterceptor };
UnauthorizedInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UnauthorizedInterceptor.ctorParameters = function () { return [
    { type: Router },
    { type: Store }
]; };
function UnauthorizedInterceptor_tsickle_Closure_declarations() {
    /** @type {?} */
    UnauthorizedInterceptor.prototype.router;
    /** @type {?} */
    UnauthorizedInterceptor.prototype.store;
}
//# sourceMappingURL=unauthorized.interceptor.js.map

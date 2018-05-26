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
export class UnauthorizedInterceptor {
    /**
     * @param {?} router
     * @param {?} store
     */
    constructor(router, store // private signinService: SigninService
    ) {
        this.router = router;
        this.store = store;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return next
            .handle(request)
            .map((event) => {
            if (event instanceof HttpResponse)
                return event;
        })
            .catch((err) => {
            if (!(err instanceof HttpErrorResponse))
                return;
            if (err.status != 401)
                return;
            if (err.url.includes("logout"))
                return;
            this.store.dispatch(new SignoutAction());
            return Observable.throw("Unauthorized");
        });
    }
}
UnauthorizedInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UnauthorizedInterceptor.ctorParameters = () => [
    { type: Router },
    { type: Store }
];
function UnauthorizedInterceptor_tsickle_Closure_declarations() {
    /** @type {?} */
    UnauthorizedInterceptor.prototype.router;
    /** @type {?} */
    UnauthorizedInterceptor.prototype.store;
}
//# sourceMappingURL=unauthorized.interceptor.js.map

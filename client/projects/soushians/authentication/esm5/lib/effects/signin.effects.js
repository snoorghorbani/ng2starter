/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";
import { Actions, Effect } from "@ngrx/effects";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { SignInActionTypes, SigninSecceed, SigninFailed } from "../actions/signin.actions";
import { SigninService } from "../services/signin.service";
import { NewCaptcha } from "../actions";
var SigninEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} signinService
     */
    function SigninEffects(actions$, router, signinService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.signinService = signinService;
        this.preSignUpStart$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(switchMap(function (action) { return _this.signinService.signin(action.payload); }), map(function (user) { return new SigninSecceed(user); }), catchError(function (error) { return Observable.of(new SigninFailed(error)); }));
        this.SigninSucceed$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_SUCCEED)
            .pipe(tap(function (data) { return _this.router.navigate(["/"]); }));
        this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(function () { return new NewCaptcha(); });
        this.redirectToLoginPage$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_REDIRECT, SignInActionTypes.SIGNOUT)
            .pipe(tap(function (authed) { return _this.router.navigate(["auth/signin"]); }));
    }
    return SigninEffects;
}());
export { SigninEffects };
SigninEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SigninEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router },
    { type: SigninService }
]; };
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], SigninEffects.prototype, "preSignUpStart$", void 0);
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], SigninEffects.prototype, "SigninSucceed$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], SigninEffects.prototype, "AfterSigninFiled$", void 0);
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], SigninEffects.prototype, "redirectToLoginPage$", void 0);
function SigninEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    SigninEffects.prototype.preSignUpStart$;
    /** @type {?} */
    SigninEffects.prototype.SigninSucceed$;
    /** @type {?} */
    SigninEffects.prototype.AfterSigninFiled$;
    /** @type {?} */
    SigninEffects.prototype.redirectToLoginPage$;
    /** @type {?} */
    SigninEffects.prototype.actions$;
    /** @type {?} */
    SigninEffects.prototype.router;
    /** @type {?} */
    SigninEffects.prototype.signinService;
}
//# sourceMappingURL=signin.effects.js.map

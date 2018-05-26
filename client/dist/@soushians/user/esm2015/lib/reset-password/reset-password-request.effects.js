/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { switchMap, map, takeUntil, delay, catchError } from "rxjs/operators";
import { ResetPasswordRequestActionTypes, DisableGetLink, EnableGetLink, ResetPasswordLinkRequestStart, ResetPasswordLinkRequestSucceed, ResetPasswordLinkRequestFailed } from "./reset-password-request.actions";
import { PasswordService } from "../services/password.service";
export class ResetPasswordRequestEffects {
    /**
     * @param {?} actions$
     * @param {?} passwordService
     */
    constructor(actions$, passwordService) {
        this.actions$ = actions$;
        this.passwordService = passwordService;
        this.ResetPasswordRequest$ = this.actions$.ofType(ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK).pipe(map(action => action.payload), 
        // switchMap((data: ResetPasswordRequestModel.Request) => this.passwordService.isValidResetPasswordRequest()),
        // map((isValid: boolean) => isValid ? new ResetPasswordLinkRequestStart(data) : new MaximumTryHappend())
        map(data => new ResetPasswordLinkRequestStart(data)));
        this.MaximumTryHappend$ = this.actions$
            .ofType(ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND, ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START)
            .pipe(map(() => new DisableGetLink()));
        this.enableAfterTime$ = this.actions$
            .ofType(ResetPasswordRequestActionTypes.DISABLE_GET_LINK)
            .pipe(takeUntil(this.actions$.ofType(ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND)), delay(3 * 1000), map(() => new EnableGetLink()));
        this.RequestResetPasswordLink$ = this.actions$
            .ofType(ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START)
            .pipe(map(action => action.payload), switchMap((data) => this.passwordService.requestResetPasswordLink(data)), map(() => new ResetPasswordLinkRequestSucceed()), catchError(() => Observable.of(new ResetPasswordLinkRequestFailed())));
    }
}
ResetPasswordRequestEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ResetPasswordRequestEffects.ctorParameters = () => [
    { type: Actions },
    { type: PasswordService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ResetPasswordRequestEffects.prototype, "ResetPasswordRequest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ResetPasswordRequestEffects.prototype, "MaximumTryHappend$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ResetPasswordRequestEffects.prototype, "enableAfterTime$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ResetPasswordRequestEffects.prototype, "RequestResetPasswordLink$", void 0);
function ResetPasswordRequestEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.ResetPasswordRequest$;
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.MaximumTryHappend$;
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.enableAfterTime$;
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.RequestResetPasswordLink$;
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.actions$;
    /** @type {?} */
    ResetPasswordRequestEffects.prototype.passwordService;
}
//# sourceMappingURL=reset-password-request.effects.js.map

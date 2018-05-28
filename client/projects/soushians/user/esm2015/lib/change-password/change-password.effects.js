/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { PasswordService } from "../services/password.service";
import { ChangePasswordActionTypes, ChangePasswordStart, ChangePasswordSucceed, ChangePasswordFailed } from "./change-password.actions";
export class ChangePasswordEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} passwordService
     */
    constructor(actions$, router, passwordService) {
        this.actions$ = actions$;
        this.router = router;
        this.passwordService = passwordService;
        this.ChangePasswordRequest$ = this.actions$
            .ofType(ChangePasswordActionTypes.CHANGE_PASSWORD)
            .pipe(map(action => action.payload), map(data => new ChangePasswordStart(data)));
        this.RequestChangePasswordLink$ = this.actions$.ofType(ChangePasswordActionTypes.PASSWORD_CHANGED_START).pipe(map(action => action.payload), switchMap((data) => {
            return this.passwordService
                .changePassword(data)
                .map(res => new ChangePasswordSucceed(res))
                .catch(() => Observable.of(new ChangePasswordFailed()));
        }));
    }
}
ChangePasswordEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChangePasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: PasswordService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ChangePasswordEffects.prototype, "ChangePasswordRequest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ChangePasswordEffects.prototype, "RequestChangePasswordLink$", void 0);
function ChangePasswordEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangePasswordEffects.prototype.ChangePasswordRequest$;
    /** @type {?} */
    ChangePasswordEffects.prototype.RequestChangePasswordLink$;
    /** @type {?} */
    ChangePasswordEffects.prototype.actions$;
    /** @type {?} */
    ChangePasswordEffects.prototype.router;
    /** @type {?} */
    ChangePasswordEffects.prototype.passwordService;
}
//# sourceMappingURL=change-password.effects.js.map

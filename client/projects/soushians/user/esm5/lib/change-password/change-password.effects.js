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
var ChangePasswordEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} passwordService
     */
    function ChangePasswordEffects(actions$, router, passwordService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.passwordService = passwordService;
        this.ChangePasswordRequest$ = this.actions$
            .ofType(ChangePasswordActionTypes.CHANGE_PASSWORD)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new ChangePasswordStart(data); }));
        this.RequestChangePasswordLink$ = this.actions$.ofType(ChangePasswordActionTypes.PASSWORD_CHANGED_START).pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.passwordService
                .changePassword(data)
                .map(function (res) { return new ChangePasswordSucceed(res); })
                .catch(function () { return Observable.of(new ChangePasswordFailed()); });
        }));
    }
    return ChangePasswordEffects;
}());
export { ChangePasswordEffects };
ChangePasswordEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChangePasswordEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router },
    { type: PasswordService }
]; };
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

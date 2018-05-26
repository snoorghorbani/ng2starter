/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { SignInActionTypes } from "@soushians/authentication";
import { UserService } from "../services/user.service";
import { GetProfile } from "../profile-view/profile-view.actions";
export class UserEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.getProfileInformation$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(map(() => {
            return new GetProfile();
        }));
    }
}
UserEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UserEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: UserService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], UserEffects.prototype, "getProfileInformation$", void 0);
function UserEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    UserEffects.prototype.getProfileInformation$;
    /** @type {?} */
    UserEffects.prototype.actions$;
    /** @type {?} */
    UserEffects.prototype.router;
    /** @type {?} */
    UserEffects.prototype.service;
}
//# sourceMappingURL=feature.effects.js.map

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { UserService } from "../services/user.service";
import { ProfileViewActionTypes, GetProfileStart, GetProfileSucceed, GetProfileFailed } from "./profile-view.actions";
import { RefreshUserInfoAction } from "../dashboard/user.actions";
export class ProfileViewEffects {
    /**
     * @param {?} actions$
     * @param {?} userService
     */
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.ProfileRequest$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE)
            .pipe(map(action => action.payload), map(data => new GetProfileStart()));
        this.getProfile$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_START)
            .pipe(map(action => action.payload), switchMap((data) => this.userService.getProfileInformation()), map(res => new GetProfileSucceed(res)), catchError(() => Observable.of(new GetProfileFailed())));
        this.refreshUserInfo$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED)
            .pipe(map(action => action.payload), map(data => new RefreshUserInfoAction(data)));
    }
}
ProfileViewEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ProfileViewEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProfileViewEffects.prototype, "ProfileRequest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProfileViewEffects.prototype, "getProfile$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProfileViewEffects.prototype, "refreshUserInfo$", void 0);
function ProfileViewEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    ProfileViewEffects.prototype.ProfileRequest$;
    /** @type {?} */
    ProfileViewEffects.prototype.getProfile$;
    /** @type {?} */
    ProfileViewEffects.prototype.refreshUserInfo$;
    /** @type {?} */
    ProfileViewEffects.prototype.actions$;
    /** @type {?} */
    ProfileViewEffects.prototype.userService;
}
//# sourceMappingURL=profile-view.effects.js.map

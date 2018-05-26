/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, catchError, switchMap } from "rxjs/operators";
import { UserService } from "../services/user.service";
import { EditProfileActionTypes, EditProfileStart, EditProfileSucceed, EditProfileFailed } from "./edit-profile.actions";
import { GetProfile } from "../profile-view/profile-view.actions";
var EditProfileEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    function EditProfileEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$
            .ofType(EditProfileActionTypes.EDIT_PROFILE)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new EditProfileStart(data); }));
        this.RequestEditProfileLink$ = this.actions$
            .ofType(EditProfileActionTypes.EDIT_PROFILE_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.editProfile(data); }), map(function (res) { return new EditProfileSucceed(res); }), catchError(function () { return of(new EditProfileFailed()); }));
        // .switchMap((data: EditProfile_ApiModel.Request) => {
        // 	return this.service
        // 		.editProfile(data)
        // 		.map((res) => new EditProfileSucceed(res))
        // 		.catch(() => Observable.of(new EditProfileFailed()));
        // });
        this.goToView$ = this.actions$.ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED).pipe(map(function () {
            _this.router.navigate(["/user/profile"]);
            return new GetProfile();
        }));
    }
    return EditProfileEffects;
}());
export { EditProfileEffects };
EditProfileEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EditProfileEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router },
    { type: UserService }
]; };
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], EditProfileEffects.prototype, "EditProfileRequest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], EditProfileEffects.prototype, "RequestEditProfileLink$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], EditProfileEffects.prototype, "goToView$", void 0);
function EditProfileEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    EditProfileEffects.prototype.EditProfileRequest$;
    /** @type {?} */
    EditProfileEffects.prototype.RequestEditProfileLink$;
    /** @type {?} */
    EditProfileEffects.prototype.goToView$;
    /** @type {?} */
    EditProfileEffects.prototype.actions$;
    /** @type {?} */
    EditProfileEffects.prototype.router;
    /** @type {?} */
    EditProfileEffects.prototype.service;
}
//# sourceMappingURL=edit-profile.effects.js.map

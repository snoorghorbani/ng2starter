/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { SignInActionTypes } from "@soushians/authentication";
import { UserService } from "../services/user.service";
import { GetProfile } from "../profile-view/profile-view.actions";
import { RefreshUserInfoAction } from "../dashboard";
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
        // @Effect()
        // updateProfileInformation$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(
        // 	map(action => action.payload),
        // 	map(user => {
        // 		return new GetProfileSucceed(user);
        // 	})
        // );
        this.getAccountInfo$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(map(() => {
            return new GetProfile();
        }));
        this.signout$ = this.actions$
            .ofType(SignInActionTypes.SIGNOUT)
            .pipe(map(() => new RefreshUserInfoAction(/** @type {?} */ ({}))));
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
], UserEffects.prototype, "getAccountInfo$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], UserEffects.prototype, "signout$", void 0);
if (false) {
    /** @type {?} */
    UserEffects.prototype.getAccountInfo$;
    /** @type {?} */
    UserEffects.prototype.signout$;
    /** @type {?} */
    UserEffects.prototype.actions$;
    /** @type {?} */
    UserEffects.prototype.router;
    /** @type {?} */
    UserEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNDQUFzQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUlyRCxNQUFNOzs7Ozs7SUFDTCxZQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxPQUFvQjtRQUE1RSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7Ozs7Ozs7OytCQVU5RSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQzVFLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLElBQUksVUFBVSxFQUFFLENBQUM7U0FDeEIsQ0FBQyxDQUNGO3dCQUVVLElBQUksQ0FBQyxRQUFRO2FBQ3RCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7YUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixtQkFBQyxFQUFlLEVBQUMsQ0FBQyxDQUFDO0tBbEJ1Qzs7O1lBRnBHLFVBQVU7Ozs7WUFWRixPQUFPO1lBSlAsTUFBTTtZQVNOLFdBQVc7OztJQWdCbEIsTUFBTSxFQUFFOzs7O0lBTVIsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25JbkFjdGlvblR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlLCBHZXRQcm9maWxlU3VjY2VlZCB9IGZyb20gXCIuLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIH0gZnJvbSBcIi4uL2Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyB1cGRhdGVQcm9maWxlSW5mb3JtYXRpb24kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0Ly8gXHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHQvLyBcdG1hcCh1c2VyID0+IHtcclxuXHQvLyBcdFx0cmV0dXJuIG5ldyBHZXRQcm9maWxlU3VjY2VlZCh1c2VyKTtcclxuXHQvLyBcdH0pXHJcblx0Ly8gKTtcclxuXHRARWZmZWN0KClcclxuXHRnZXRBY2NvdW50SW5mbyQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cdEBFZmZlY3QoKVxyXG5cdHNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBSZWZyZXNoVXNlckluZm9BY3Rpb24oe30gYXMgVXNlck1vZGVsKSkpO1xyXG59XHJcbiJdfQ==
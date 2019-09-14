/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { SignInActionTypes, ProgressingStarted, ProgressingFinished } from "../actions";
import { map } from "rxjs/operators";
export class AuthenticationEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.dispachProgressingStarted$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), map(() => new ProgressingStarted()));
        this.dispachProgressingFinished$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED), map(() => new ProgressingFinished()));
    }
}
AuthenticationEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthenticationEffects.ctorParameters = () => [
    { type: Actions }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], AuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], AuthenticationEffects.prototype, "dispachProgressingFinished$", void 0);
if (false) {
    /** @type {?} */
    AuthenticationEffects.prototype.dispachProgressingStarted$;
    /** @type {?} */
    AuthenticationEffects.prototype.dispachProgressingFinished$;
    /**
     * @type {?}
     * @private
     */
    AuthenticationEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4RyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUNqQyxZQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBRzFDLCtCQUEwQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM5QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQ2hDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUMsQ0FDbkMsQ0FBQztRQUdGLGdDQUEyQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMvQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxFQUMxRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQ3BDLENBQUM7SUFaMkMsQ0FBQzs7O1lBRjlDLFVBQVU7Ozs7WUFMRixPQUFPOztBQVVmO0lBREMsTUFBTSxFQUFFOzt5RUFJUDtBQUdGO0lBREMsTUFBTSxFQUFFOzswRUFJUDs7O0lBVkYsMkRBSUU7O0lBRUYsNERBSUU7Ozs7O0lBWlUseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25JbkFjdGlvblR5cGVzLCBGYWlsZWRIYXBwZW5lZCwgUHJvZ3Jlc3NpbmdTdGFydGVkLCBQcm9ncmVzc2luZ0ZpbmlzaGVkIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55Pikge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZGlzcGFjaFByb2dyZXNzaW5nU3RhcnRlZCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOKSxcclxuXHRcdG1hcCgoKSA9PiBuZXcgUHJvZ3Jlc3NpbmdTdGFydGVkKCkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZGlzcGFjaFByb2dyZXNzaW5nRmluaXNoZWQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9GQUlMVVJFLCBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCksXHJcblx0XHRtYXAoKCkgPT4gbmV3IFByb2dyZXNzaW5nRmluaXNoZWQoKSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
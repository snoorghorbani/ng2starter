/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.dispachProgressingStarted$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), map((/**
         * @return {?}
         */
        () => new ProgressingStarted())));
        this.dispachProgressingFinished$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED), map((/**
         * @return {?}
         */
        () => new ProgressingFinished())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4RyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUNqQyxZQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBRzFDLCtCQUEwQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM5QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQ2hDLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksa0JBQWtCLEVBQUUsRUFBQyxDQUNuQyxDQUFDO1FBR0YsZ0NBQTJCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9DLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxDQUFDLEVBQzFFLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksbUJBQW1CLEVBQUUsRUFBQyxDQUNwQyxDQUFDO0lBWjJDLENBQUM7OztZQUY5QyxVQUFVOzs7O1lBTEYsT0FBTzs7QUFVZjtJQURDLE1BQU0sRUFBRTs7eUVBSVA7QUFHRjtJQURDLE1BQU0sRUFBRTs7MEVBSVA7OztJQVZGLDJEQUlFOztJQUVGLDREQUlFOzs7OztJQVpVLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduSW5BY3Rpb25UeXBlcywgRmFpbGVkSGFwcGVuZWQsIFByb2dyZXNzaW5nU3RhcnRlZCwgUHJvZ3Jlc3NpbmdGaW5pc2hlZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ1N0YXJ0ZWQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTiksXHJcblx0XHRtYXAoKCkgPT4gbmV3IFByb2dyZXNzaW5nU3RhcnRlZCgpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ0ZpbmlzaGVkJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRSwgU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLFxyXG5cdFx0bWFwKCgpID0+IG5ldyBQcm9ncmVzc2luZ0ZpbmlzaGVkKCkpXHJcblx0KTtcclxufVxyXG4iXX0=
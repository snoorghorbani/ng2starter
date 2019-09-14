/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { SignInActionTypes, ProgressingStarted, ProgressingFinished } from "../actions";
import { map } from "rxjs/operators";
var AuthenticationEffects = /** @class */ (function () {
    function AuthenticationEffects(actions$) {
        this.actions$ = actions$;
        this.dispachProgressingStarted$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), map((/**
         * @return {?}
         */
        function () { return new ProgressingStarted(); })));
        this.dispachProgressingFinished$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED), map((/**
         * @return {?}
         */
        function () { return new ProgressingFinished(); })));
    }
    AuthenticationEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthenticationEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AuthenticationEffects.prototype, "dispachProgressingFinished$", void 0);
    return AuthenticationEffects;
}());
export { AuthenticationEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4RyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckM7SUFFQywrQkFBb0IsUUFBc0I7UUFBdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUcxQywrQkFBMEIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDOUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUNoQyxHQUFHOzs7UUFBQyxjQUFNLE9BQUEsSUFBSSxrQkFBa0IsRUFBRSxFQUF4QixDQUF3QixFQUFDLENBQ25DLENBQUM7UUFHRixnQ0FBMkIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsRUFDMUUsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLElBQUksbUJBQW1CLEVBQUUsRUFBekIsQ0FBeUIsRUFBQyxDQUNwQyxDQUFDO0lBWjJDLENBQUM7O2dCQUY5QyxVQUFVOzs7O2dCQUxGLE9BQU87O0lBVWY7UUFEQyxNQUFNLEVBQUU7OzZFQUlQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7OzhFQUlQO0lBQ0gsNEJBQUM7Q0FBQSxBQWZELElBZUM7U0FkWSxxQkFBcUI7OztJQUdqQywyREFJRTs7SUFFRiw0REFJRTs7Ozs7SUFaVSx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgU2lnbkluQWN0aW9uVHlwZXMsIEZhaWxlZEhhcHBlbmVkLCBQcm9ncmVzc2luZ1N0YXJ0ZWQsIFByb2dyZXNzaW5nRmluaXNoZWQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRkaXNwYWNoUHJvZ3Jlc3NpbmdTdGFydGVkJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU4pLFxyXG5cdFx0bWFwKCgpID0+IG5ldyBQcm9ncmVzc2luZ1N0YXJ0ZWQoKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRkaXNwYWNoUHJvZ3Jlc3NpbmdGaW5pc2hlZCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkUsIFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKSxcclxuXHRcdG1hcCgoKSA9PiBuZXcgUHJvZ3Jlc3NpbmdGaW5pc2hlZCgpKVxyXG5cdCk7XHJcbn1cclxuIl19
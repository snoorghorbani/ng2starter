/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { CaptchaActionTypes, GetCaptchaSucceedAction, GetCaptchaFailedAction, GetCaptchaStartAction } from "./captcha.actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { FormCaptchaService } from "../services/form-captcha.service";
export class CaptchaEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.GetCaptcha$ = this.actions$.pipe(ofType(CaptchaActionTypes.GET_CAPTCHA), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new GetCaptchaStartAction(data))));
        this.AddFormStart$ = this.actions$.pipe(ofType(CaptchaActionTypes.GET_CAPTCHA_START), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.service.getCaptcha())), map((/**
         * @param {?} res
         * @return {?}
         */
        res => new GetCaptchaSucceedAction())), catchError((/**
         * @return {?}
         */
        () => of(new GetCaptchaFailedAction()))));
    }
}
CaptchaEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CaptchaEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FormCaptchaService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CaptchaEffects.prototype, "GetCaptcha$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], CaptchaEffects.prototype, "AddFormStart$", void 0);
if (false) {
    /** @type {?} */
    CaptchaEffects.prototype.GetCaptcha$;
    /** @type {?} */
    CaptchaEffects.prototype.AddFormStart$;
    /**
     * @type {?}
     * @private
     */
    CaptchaEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CaptchaEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CaptchaEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2FkZC9jYXB0Y2hhLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyw2QkFBNkIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3hDLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUd0RSxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBQzFCLFlBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLE9BQTJCO1FBQW5GLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFHdkcsZ0JBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0IsTUFBTSxDQUFNLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUMzQyxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzdCLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FDNUMsQ0FBQztRQUdGLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pDLE1BQU0sQ0FBTSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNqRCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzdCLFNBQVM7Ozs7UUFBQyxDQUFDLElBQTZCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUMsRUFDdkUsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSx1QkFBdUIsRUFBRSxFQUFDLEVBQ3pDLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixFQUFFLENBQUMsRUFBQyxDQUNsRCxDQUFDO0lBaEJ3RyxDQUFDOzs7WUFGM0csVUFBVTs7OztZQWZGLE9BQU87WUFIUCxNQUFNO1lBZ0JOLGtCQUFrQjs7QUFPMUI7SUFEQyxNQUFNLEVBQUU7O21EQUtQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7O3FEQU9QOzs7SUFkRixxQ0FLRTs7SUFFRix1Q0FPRTs7Ozs7SUFoQlUsa0NBQThCOzs7OztJQUFFLGdDQUFzQjs7Ozs7SUFBRSxpQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7XHJcblx0Q2FwdGNoYUFjdGlvblR5cGVzLFxyXG5cdEdldENhcHRjaGFTdWNjZWVkQWN0aW9uLFxyXG5cdEdldENhcHRjaGFGYWlsZWRBY3Rpb24sXHJcblx0R2V0Q2FwdGNoYVN0YXJ0QWN0aW9uXHJcbn0gZnJvbSBcIi4vY2FwdGNoYS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEZvcm1DYXB0Y2hhU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLWNhcHRjaGEuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBGb3JtQ2FwdGNoYVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEdldENhcHRjaGEkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBKSxcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0bWFwKGRhdGEgPT4gbmV3IEdldENhcHRjaGFTdGFydEFjdGlvbihkYXRhKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRBZGRGb3JtU3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBX1NUQVJUKSxcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLmdldENhcHRjaGEoKSksXHJcblx0XHRtYXAocmVzID0+IG5ldyBHZXRDYXB0Y2hhU3VjY2VlZEFjdGlvbigpKSxcclxuXHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEdldENhcHRjaGFGYWlsZWRBY3Rpb24oKSkpXHJcblx0KTtcclxufVxyXG4iXX0=
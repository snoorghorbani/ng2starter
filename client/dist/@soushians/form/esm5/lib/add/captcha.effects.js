/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { CaptchaActionTypes, GetCaptchaSucceedAction, GetCaptchaFailedAction, GetCaptchaStartAction } from "./captcha.actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { FormCaptchaService } from "../services/form-captcha.service";
var CaptchaEffects = /** @class */ (function () {
    function CaptchaEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.GetCaptcha$ = this.actions$
            .ofType(CaptchaActionTypes.GET_CAPTCHA)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new GetCaptchaStartAction(data); }));
        this.AddFormStart$ = this.actions$
            .ofType(CaptchaActionTypes.GET_CAPTCHA_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.getCaptcha(); }), map(function (res) { return new GetCaptchaSucceedAction(); }), catchError(function () { return of(new GetCaptchaFailedAction()); }));
    }
    CaptchaEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CaptchaEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: FormCaptchaService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], CaptchaEffects.prototype, "GetCaptcha$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], CaptchaEffects.prototype, "AddFormStart$", void 0);
    return CaptchaEffects;
}());
export { CaptchaEffects };
if (false) {
    /** @type {?} */
    CaptchaEffects.prototype.GetCaptcha$;
    /** @type {?} */
    CaptchaEffects.prototype.AddFormStart$;
    /** @type {?} */
    CaptchaEffects.prototype.actions$;
    /** @type {?} */
    CaptchaEffects.prototype.router;
    /** @type {?} */
    CaptchaEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2FkZC9jYXB0Y2hhLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyw2QkFBNkIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLeEMsT0FBTyxFQUNOLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLHFCQUFxQixFQUNyQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztJQUlyRSx3QkFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsT0FBMkI7UUFBdkcsaUJBQTJHO1FBQXZGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7MkJBR3pGLElBQUksQ0FBQyxRQUFRO2FBQ3pCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7YUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQUUsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDOzZCQUduRSxJQUFJLENBQUMsUUFBUTthQUMzQixNQUFNLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUM7YUFDNUMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxVQUFDLElBQTZCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUF6QixDQUF5QixDQUFDLEVBQ3ZFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksdUJBQXVCLEVBQUUsRUFBN0IsQ0FBNkIsQ0FBQyxFQUN6QyxVQUFVLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixFQUFFLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUNsRDtLQWZ5Rzs7Z0JBRjNHLFVBQVU7Ozs7Z0JBZkYsT0FBTztnQkFIUCxNQUFNO2dCQWdCTixrQkFBa0I7OztRQU16QixNQUFNLEVBQUU7Ozs7UUFLUixNQUFNLEVBQUU7Ozt5QkFoQ1Y7O1NBd0JhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdENhcHRjaGFBY3Rpb25UeXBlcyxcclxuXHRHZXRDYXB0Y2hhU3VjY2VlZEFjdGlvbixcclxuXHRHZXRDYXB0Y2hhRmFpbGVkQWN0aW9uLFxyXG5cdEdldENhcHRjaGFTdGFydEFjdGlvblxyXG59IGZyb20gXCIuL2NhcHRjaGEuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ2FwdGNoYVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS1jYXB0Y2hhLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhcHRjaGFFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogRm9ybUNhcHRjaGFTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRHZXRDYXB0Y2hhJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBHZXRDYXB0Y2hhU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0QWRkRm9ybVN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuZ2V0Q2FwdGNoYSgpKSxcclxuXHRcdFx0bWFwKHJlcyA9PiBuZXcgR2V0Q2FwdGNoYVN1Y2NlZWRBY3Rpb24oKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEdldENhcHRjaGFGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var CaptchaEffects = /** @class */ (function () {
    function CaptchaEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.GetCaptcha$ = this.actions$.pipe(ofType(CaptchaActionTypes.GET_CAPTCHA), map(function (action) { return action.payload; }), map(function (data) { return new GetCaptchaStartAction(data); }));
        this.AddFormStart$ = this.actions$.pipe(ofType(CaptchaActionTypes.GET_CAPTCHA_START), map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.getCaptcha(); }), map(function (res) { return new GetCaptchaSucceedAction(); }), catchError(function () { return of(new GetCaptchaFailedAction()); }));
    }
    CaptchaEffects.decorators = [
        { type: Injectable }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2FkZC9jYXB0Y2hhLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyw2QkFBNkIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3hDLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV0RTtJQUVDLHdCQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxPQUEyQjtRQUF2RyxpQkFBMkc7UUFBdkYsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUd2RyxnQkFBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMvQixNQUFNLENBQU0sa0JBQWtCLENBQUMsV0FBVyxDQUFDLEVBQzNDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzdCLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FDNUMsQ0FBQztRQUdGLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pDLE1BQU0sQ0FBTSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNqRCxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUM3QixTQUFTLENBQUMsVUFBQyxJQUE2QixJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQyxFQUN2RSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLHVCQUF1QixFQUFFLEVBQTdCLENBQTZCLENBQUMsRUFDekMsVUFBVSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FDbEQsQ0FBQztJQWhCd0csQ0FBQzs7Z0JBRjNHLFVBQVU7Ozs7Z0JBZkYsT0FBTztnQkFIUCxNQUFNO2dCQWdCTixrQkFBa0I7O0lBTzFCO1FBREMsTUFBTSxFQUFFOzt1REFLUDtJQUdGO1FBREMsTUFBTSxFQUFFOzt5REFPUDtJQUNILHFCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksY0FBYzs7O0lBRzFCLHFDQUtFOztJQUVGLHVDQU9FOzs7OztJQWhCVSxrQ0FBOEI7Ozs7O0lBQUUsZ0NBQXNCOzs7OztJQUFFLGlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtcclxuXHRDYXB0Y2hhQWN0aW9uVHlwZXMsXHJcblx0R2V0Q2FwdGNoYVN1Y2NlZWRBY3Rpb24sXHJcblx0R2V0Q2FwdGNoYUZhaWxlZEFjdGlvbixcclxuXHRHZXRDYXB0Y2hhU3RhcnRBY3Rpb25cclxufSBmcm9tIFwiLi9jYXB0Y2hhLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgRm9ybUNhcHRjaGFTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0tY2FwdGNoYS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1DYXB0Y2hhU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0R2V0Q2FwdGNoYSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8YW55PihDYXB0Y2hhQWN0aW9uVHlwZXMuR0VUX0NBUFRDSEEpLFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRtYXAoZGF0YSA9PiBuZXcgR2V0Q2FwdGNoYVN0YXJ0QWN0aW9uKGRhdGEpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEFkZEZvcm1TdGFydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8YW55PihDYXB0Y2hhQWN0aW9uVHlwZXMuR0VUX0NBUFRDSEFfU1RBUlQpLFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuZ2V0Q2FwdGNoYSgpKSxcclxuXHRcdG1hcChyZXMgPT4gbmV3IEdldENhcHRjaGFTdWNjZWVkQWN0aW9uKCkpLFxyXG5cdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgR2V0Q2FwdGNoYUZhaWxlZEFjdGlvbigpKSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { WidgetService } from "../../widget.service";
import { DeleteWidgetSucceedAction, DeleteWidgetFailedAction } from "./delete-widget.actions";
var DeleteWidgetApiEffects = /** @class */ (function () {
    function DeleteWidgetApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[DELETE_WIDGET][API][DeleteWidget] start" /* START */)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.service
                .delete(payload)
                .pipe(map(function (res) { return new DeleteWidgetSucceedAction(res); }), catchError(function (err) { return of(new DeleteWidgetFailedAction(err)); }));
        }));
    }
    DeleteWidgetApiEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DeleteWidgetApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: WidgetService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DeleteWidgetApiEffects.prototype, "start$", void 0);
    return DeleteWidgetApiEffects;
}());
export { DeleteWidgetApiEffects };
if (false) {
    /** @type {?} */
    DeleteWidgetApiEffects.prototype.start$;
    /** @type {?} */
    DeleteWidgetApiEffects.prototype.actions$;
    /** @type {?} */
    DeleteWidgetApiEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpZGdldC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXQvZGVsZXRlLXdpZGdldC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBR04seUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4QixNQUFNLHlCQUF5QixDQUFDOztJQUtoQyxnQ0FBb0IsUUFBc0MsRUFBVSxPQUFzQjtRQUExRixpQkFBK0Y7UUFBM0UsYUFBUSxHQUFSLFFBQVEsQ0FBOEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO3NCQUdqRixJQUFJLENBQUMsUUFBUTthQUNwQixNQUFNLHdEQUFrQzthQUN4QyxJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDL0IsU0FBUyxDQUFDLFVBQUMsT0FBTztZQUNqQixPQUFBLEtBQUksQ0FBQyxPQUFPO2lCQUNWLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQ2YsSUFBSSxDQUNKLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLElBQUkseUJBQXlCLENBQUMsR0FBRyxDQUFDLEVBQWxDLENBQWtDLENBQUMsRUFDaEQsVUFBVSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsRUFBRSxDQUFDLElBQUksd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUMxRDtRQUxGLENBS0UsQ0FDRixDQUNEO0tBZjZGOztnQkFGL0YsVUFBVTs7OztnQkFiRixPQUFPO2dCQUlQLGFBQWE7OztRQWFwQixNQUFNLEVBQUU7OztpQ0FuQlY7O1NBZ0JhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0REVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0RGVsZXRlV2lkZ2V0QWN0aW9ucyxcclxuXHREZWxldGVXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdERlbGV0ZVdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2RlbGV0ZS13aWRnZXQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPERlbGV0ZVdpZGdldEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHsgfVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5kZWxldGUocGF5bG9hZClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IERlbGV0ZVdpZGdldFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IERlbGV0ZVdpZGdldEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iXX0=
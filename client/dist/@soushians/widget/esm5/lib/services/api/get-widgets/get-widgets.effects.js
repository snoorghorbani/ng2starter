/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { WidgetService } from "../../widget.service";
import { GetWidgetsSucceedAction, GetWidgetsFailedAction } from "./get-widgets.actions";
var GetWidgetsApiEffects = /** @class */ (function () {
    function GetWidgetsApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[GET_WIDGETS][API][GetWidgets] start" /* START */), switchMap(function () {
            return _this.service
                .getWidgets()
                .pipe(map(function (res) { return new GetWidgetsSucceedAction(res); }), catchError(function (err) { return of(new GetWidgetsFailedAction(err)); }));
        }));
    }
    GetWidgetsApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GetWidgetsApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: WidgetService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], GetWidgetsApiEffects.prototype, "start$", void 0);
    return GetWidgetsApiEffects;
}());
export { GetWidgetsApiEffects };
if (false) {
    /** @type {?} */
    GetWidgetsApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    GetWidgetsApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetWidgetsApiEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXdpZGdldHMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUdOLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQjtJQUVDLDhCQUFvQixRQUFvQyxFQUFVLE9BQXNCO1FBQXhGLGlCQUE0RjtRQUF4RSxhQUFRLEdBQVIsUUFBUSxDQUE0QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFHeEYsV0FBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxQixNQUFNLG9EQUFnQyxFQUN0QyxTQUFTLENBQUM7WUFDVCxPQUFBLEtBQUksQ0FBQyxPQUFPO2lCQUNWLFVBQVUsRUFBRTtpQkFDWixJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxFQUM1QyxVQUFVLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQ3REO1FBTEYsQ0FLRSxDQUNGLENBQ0QsQ0FBQztJQWJ5RixDQUFDOztnQkFGNUYsVUFBVTs7OztnQkFaRixPQUFPO2dCQUlQLGFBQWE7O0lBYXJCO1FBREMsTUFBTSxFQUFFOzt3REFXUDtJQUNILDJCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSxvQkFBb0I7OztJQUdoQyxzQ0FXRTs7Ozs7SUFiVSx3Q0FBNEM7Ozs7O0lBQUUsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUyxcclxuXHRHZXRXaWRnZXRzQWN0aW9ucyxcclxuXHRHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbixcclxuXHRHZXRXaWRnZXRzRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LXdpZGdldHMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c0FwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0V2lkZ2V0c0FjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuU1RBUlQpLFxyXG5cdFx0c3dpdGNoTWFwKCgpID0+XHJcblx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdC5nZXRXaWRnZXRzKClcclxuXHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdG1hcChyZXMgPT4gbmV3IEdldFdpZGdldHNTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4gb2YobmV3IEdldFdpZGdldHNGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHRcdFx0KVxyXG5cdFx0KVxyXG5cdCk7XHJcbn1cclxuIl19
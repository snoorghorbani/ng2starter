/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { of } from "rxjs";
import { WidgetService } from "../../widget.service";
import { DeleteWidgetSucceedAction, DeleteWidgetFailedAction } from "./delete-widget.actions";
export class DeleteWidgetApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[DELETE_WIDGET][API][DeleteWidget] start" /* START */), pluck("payload"), switchMap((payload) => this.service
            .delete(payload)
            .pipe(map(res => new DeleteWidgetSucceedAction(res)), catchError(err => of(new DeleteWidgetFailedAction(err))))));
    }
}
DeleteWidgetApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DeleteWidgetApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: WidgetService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DeleteWidgetApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    DeleteWidgetApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    DeleteWidgetApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DeleteWidgetApiEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpZGdldC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXQvZGVsZXRlLXdpZGdldC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFHTix5QkFBeUIsRUFDekIsd0JBQXdCLEVBQ3hCLE1BQU0seUJBQXlCLENBQUM7QUFJakMsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFDbEMsWUFBb0IsUUFBc0MsRUFBVSxPQUFzQjtRQUF0RSxhQUFRLEdBQVIsUUFBUSxDQUE4QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFHMUYsV0FBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxQixNQUFNLHdEQUFrQyxFQUN4QyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLFNBQVMsQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFLENBQzFCLElBQUksQ0FBQyxPQUFPO2FBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNmLElBQUksQ0FDSixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzlDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDeEQsQ0FDRixDQUNELENBQUM7SUFkMkYsQ0FBQzs7O1lBRjlGLFVBQVU7Ozs7WUFiRixPQUFPO1lBSVAsYUFBYTs7QUFjckI7SUFEQyxNQUFNLEVBQUU7O3NEQVlQOzs7SUFaRix3Q0FZRTs7Ozs7SUFkVSwwQ0FBOEM7Ozs7O0lBQUUseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUyxcclxuXHREZWxldGVXaWRnZXRBY3Rpb25zLFxyXG5cdERlbGV0ZVdpZGdldFN1Y2NlZWRBY3Rpb24sXHJcblx0RGVsZXRlV2lkZ2V0RmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZGVsZXRlLXdpZGdldC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlbGV0ZVdpZGdldEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8RGVsZXRlV2lkZ2V0QWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdHN3aXRjaE1hcCgocGF5bG9hZDogYW55KSA9PlxyXG5cdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHQuZGVsZXRlKHBheWxvYWQpXHJcblx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRtYXAocmVzID0+IG5ldyBEZWxldGVXaWRnZXRTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4gb2YobmV3IERlbGV0ZVdpZGdldEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdFx0XHQpXHJcblx0XHQpXHJcblx0KTtcclxufVxyXG4iXX0=
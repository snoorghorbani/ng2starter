/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { of } from "rxjs";
import { WidgetService } from "../../widget.service";
import { DeleteWidgetSucceedAction, DeleteWidgetFailedAction } from "./delete-widget.actions";
var DeleteWidgetApiEffects = /** @class */ (function () {
    function DeleteWidgetApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[DELETE_WIDGET][API][DeleteWidget] start" /* START */), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.service
                .delete(payload)
                .pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new DeleteWidgetSucceedAction(res); })), catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return of(new DeleteWidgetFailedAction(err)); })));
        })));
    }
    DeleteWidgetApiEffects.decorators = [
        { type: Injectable }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpZGdldC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXQvZGVsZXRlLXdpZGdldC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFHTix5QkFBeUIsRUFDekIsd0JBQXdCLEVBQ3hCLE1BQU0seUJBQXlCLENBQUM7QUFHakM7SUFFQyxnQ0FBb0IsUUFBc0MsRUFBVSxPQUFzQjtRQUExRixpQkFBOEY7UUFBMUUsYUFBUSxHQUFSLFFBQVEsQ0FBOEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBRzFGLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUIsTUFBTSx3REFBa0MsRUFDeEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixTQUFTOzs7O1FBQUMsVUFBQyxPQUFZO1lBQ3RCLE9BQUEsS0FBSSxDQUFDLE9BQU87aUJBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQztpQkFDZixJQUFJLENBQ0osR0FBRzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsRUFBbEMsQ0FBa0MsRUFBQyxFQUM5QyxVQUFVOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFyQyxDQUFxQyxFQUFDLENBQ3hEO1FBTEYsQ0FLRSxFQUNGLENBQ0QsQ0FBQztJQWQyRixDQUFDOztnQkFGOUYsVUFBVTs7OztnQkFiRixPQUFPO2dCQUlQLGFBQWE7O0lBY3JCO1FBREMsTUFBTSxFQUFFOzswREFZUDtJQUNILDZCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FoQlksc0JBQXNCOzs7SUFHbEMsd0NBWUU7Ozs7O0lBZFUsMENBQThDOzs7OztJQUFFLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0REVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0RGVsZXRlV2lkZ2V0QWN0aW9ucyxcclxuXHREZWxldGVXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdERlbGV0ZVdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2RlbGV0ZS13aWRnZXQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPERlbGV0ZVdpZGdldEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAoKHBheWxvYWQ6IGFueSkgPT5cclxuXHRcdFx0dGhpcy5zZXJ2aWNlXHJcblx0XHRcdFx0LmRlbGV0ZShwYXlsb2FkKVxyXG5cdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0bWFwKHJlcyA9PiBuZXcgRGVsZXRlV2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0XHRcdGNhdGNoRXJyb3IoZXJyID0+IG9mKG5ldyBEZWxldGVXaWRnZXRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHRcdFx0KVxyXG5cdFx0KVxyXG5cdCk7XHJcbn1cclxuIl19
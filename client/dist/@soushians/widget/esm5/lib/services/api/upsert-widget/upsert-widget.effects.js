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
import { UpsertWidgetSucceedAction, UpsertWidgetFailedAction } from "./upsert-widget.actions";
var UpsertWidgetApiEffects = /** @class */ (function () {
    function UpsertWidgetApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[UPSERT_WIDGET][API][UpsertWidget] start" /* START */), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) { return _this.service.upsert(payload); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return new UpsertWidgetSucceedAction(res); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return of(new UpsertWidgetFailedAction(err)); })));
    }
    UpsertWidgetApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UpsertWidgetApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: WidgetService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], UpsertWidgetApiEffects.prototype, "start$", void 0);
    return UpsertWidgetApiEffects;
}());
export { UpsertWidgetApiEffects };
if (false) {
    /** @type {?} */
    UpsertWidgetApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    UpsertWidgetApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpsertWidgetApiEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXdpZGdldC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFHTix5QkFBeUIsRUFDekIsd0JBQXdCLEVBQ3hCLE1BQU0seUJBQXlCLENBQUM7QUFFakM7SUFFQyxnQ0FBb0IsUUFBc0MsRUFBVSxPQUFzQjtRQUExRixpQkFBOEY7UUFBMUUsYUFBUSxHQUFSLFFBQVEsQ0FBOEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBRzFGLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUIsTUFBTSx3REFBa0MsRUFDeEMsS0FBSyxDQUFXLFNBQVMsQ0FBQyxFQUMxQixTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxFQUNsRCxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxFQUFsQyxDQUFrQyxFQUFDLEVBQzlDLFVBQVU7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXJDLENBQXFDLEVBQUMsQ0FDeEQsQ0FBQztJQVQyRixDQUFDOztnQkFGOUYsVUFBVTs7OztnQkFaRixPQUFPO2dCQUlQLGFBQWE7O0lBYXJCO1FBREMsTUFBTSxFQUFFOzswREFPUDtJQUNILDZCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksc0JBQXNCOzs7SUFHbEMsd0NBT0U7Ozs7O0lBVFUsMENBQThDOzs7OztJQUFFLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0VVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0VXBzZXJ0V2lkZ2V0QWN0aW9ucyxcclxuXHRVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdFVwc2VydFdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL3Vwc2VydC13aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0QXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxVcHNlcnRXaWRnZXRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1RBUlQpLFxyXG5cdFx0cGx1Y2s8YW55LCBhbnk+KFwicGF5bG9hZFwiKSxcclxuXHRcdHN3aXRjaE1hcChwYXlsb2FkID0+IHRoaXMuc2VydmljZS51cHNlcnQocGF5bG9hZCkpLFxyXG5cdFx0bWFwKHJlcyA9PiBuZXcgVXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdGNhdGNoRXJyb3IoZXJyID0+IG9mKG5ldyBVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0KTtcclxufVxyXG4iXX0=
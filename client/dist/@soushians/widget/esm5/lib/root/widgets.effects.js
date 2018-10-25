/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { UpsertWidgetAction, DeleteWidgetAction } from "./widget.actions";
var WidgetDbEffects = /** @class */ (function () {
    function WidgetDbEffects(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$
            .ofType("[WIDGET][API][GetWidget] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (widget) { return new UpsertWidgetAction([widget]); }));
        this.UpsertMany$ = this.actions$
            .ofType("[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (widgets) { return new UpsertWidgetAction(widgets); }));
        this.Delete$ = this.actions$
            .ofType("[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (widget) { return new DeleteWidgetAction(widget); }));
    }
    WidgetDbEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WidgetDbEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], WidgetDbEffects.prototype, "Upsert$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], WidgetDbEffects.prototype, "UpsertMany$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], WidgetDbEffects.prototype, "Delete$", void 0);
    return WidgetDbEffects;
}());
export { WidgetDbEffects };
if (false) {
    /** @type {?} */
    WidgetDbEffects.prototype.Upsert$;
    /** @type {?} */
    WidgetDbEffects.prototype.UpsertMany$;
    /** @type {?} */
    WidgetDbEffects.prototype.Delete$;
    /** @type {?} */
    WidgetDbEffects.prototype.actions$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvcm9vdC93aWRnZXRzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFJdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFzQixrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQUs3Rix5QkFBb0IsUUFBc0I7UUFBdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYzt1QkFHaEMsSUFBSSxDQUFDLFFBQVE7YUFDckIsTUFBTSxrREFBaUM7YUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBQyxNQUF3QixJQUFLLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxDQUFFLE1BQU0sQ0FBRSxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQzsyQkFHakYsSUFBSSxDQUFDLFFBQVE7YUFDekIsTUFBTSx3REFBa0M7YUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBQyxPQUEyQixJQUFLLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO3VCQUdyRixJQUFJLENBQUMsUUFBUTthQUNyQixNQUFNLDREQUFvQzthQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxVQUFDLE1BQXdCLElBQUssT0FBQSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7S0FmN0M7O2dCQUY5QyxVQUFVOzs7O2dCQVRGLE9BQU87OztRQWFkLE1BQU0sRUFBRTs7OztRQUtSLE1BQU0sRUFBRTs7OztRQUtSLE1BQU0sRUFBRTs7OzBCQXhCVjs7U0FXYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIHBsdWNrLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLCBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QWN0aW9uLCBXaWRnZXRzQWN0aW9uVHlwZXMsIERlbGV0ZVdpZGdldEFjdGlvbiB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXREYkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55Pikge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKCh3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT4pID0+IG5ldyBVcHNlcnRXaWRnZXRBY3Rpb24oWyB3aWRnZXQgXSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0TWFueSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldHM6IFdpZGdldE1vZGVsPGFueT5bXSkgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbih3aWRnZXRzKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREZWxldGUkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IERlbGV0ZVdpZGdldEFjdGlvbih3aWRnZXQpKSk7XHJcbn1cclxuIl19
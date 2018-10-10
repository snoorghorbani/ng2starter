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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvcm9vdC93aWRnZXRzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFJdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFzQixrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQUs3Rix5QkFBb0IsUUFBc0I7UUFBdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYzt1QkFHaEMsSUFBSSxDQUFDLFFBQVE7YUFDckIsTUFBTSxrREFBaUM7YUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBQyxNQUF3QixJQUFLLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQzsyQkFHL0UsSUFBSSxDQUFDLFFBQVE7YUFDekIsTUFBTSx3REFBa0M7YUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBQyxPQUEyQixJQUFLLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO3VCQUdyRixJQUFJLENBQUMsUUFBUTthQUNyQixNQUFNLDREQUFvQzthQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxVQUFDLE1BQXdCLElBQUssT0FBQSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQ3hGO0tBaEI2Qzs7Z0JBRi9DLFVBQVU7Ozs7Z0JBUkYsT0FBTzs7O1FBWWQsTUFBTSxFQUFFOzs7O1FBS1IsTUFBTSxFQUFFOzs7O1FBS1IsTUFBTSxFQUFFOzs7MEJBdkJWOztTQVVhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBwbHVjaywgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfV0lER0VUX0FDVElPTl9UWVBFUywgR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydFdpZGdldEFjdGlvbiwgV2lkZ2V0c0FjdGlvblR5cGVzLCBEZWxldGVXaWRnZXRBY3Rpb24gfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXdpZGdldFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0RGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHsgfVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbihbd2lkZ2V0XSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0TWFueSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldHM6IFdpZGdldE1vZGVsPGFueT5bXSkgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbih3aWRnZXRzKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREZWxldGUkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IERlbGV0ZVdpZGdldEFjdGlvbih3aWRnZXQpKVxyXG5cdFx0KTtcclxufVxyXG4iXX0=
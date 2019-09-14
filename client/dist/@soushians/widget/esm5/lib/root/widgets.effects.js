/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { UpsertWidgetAction, DeleteWidgetAction } from "./widget.actions";
var WidgetDbEffects = /** @class */ (function () {
    function WidgetDbEffects(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$.pipe(ofType("[WIDGET][API][GetWidget] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} widget
         * @return {?}
         */
        function (widget) { return new UpsertWidgetAction([widget]); })));
        this.UpsertMany$ = this.actions$.pipe(ofType("[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} widgets
         * @return {?}
         */
        function (widgets) { return new UpsertWidgetAction(widgets); })));
        this.Delete$ = this.actions$.pipe(ofType("[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} widget
         * @return {?}
         */
        function (widget) { return new DeleteWidgetAction(widget); })));
    }
    WidgetDbEffects.decorators = [
        { type: Injectable }
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
    /**
     * @type {?}
     * @private
     */
    WidgetDbEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvcm9vdC93aWRnZXRzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBSXZELE9BQU8sRUFBRSxrQkFBa0IsRUFBc0Isa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc5RjtJQUVDLHlCQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBRzFDLFlBQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0IsTUFBTSxrREFBaUMsRUFDdkMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHOzs7O1FBQUMsVUFBQyxNQUF3QixJQUFLLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxDQUFFLE1BQU0sQ0FBRSxDQUFDLEVBQWxDLENBQWtDLEVBQUMsQ0FDckUsQ0FBQztRQUdGLGdCQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9CLE1BQU0sd0RBQWtDLEVBQ3hDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUMsT0FBMkIsSUFBSyxPQUFBLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQS9CLENBQStCLEVBQUMsQ0FDckUsQ0FBQztRQUdGLFlBQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0IsTUFBTSw0REFBb0MsRUFDMUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHOzs7O1FBQUMsVUFBQyxNQUF3QixJQUFLLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxDQUNqRSxDQUFDO0lBckIyQyxDQUFDOztnQkFGOUMsVUFBVTs7OztnQkFURixPQUFPOztJQWNmO1FBREMsTUFBTSxFQUFFOztvREFLUDtJQUdGO1FBREMsTUFBTSxFQUFFOzt3REFLUDtJQUdGO1FBREMsTUFBTSxFQUFFOztvREFLUDtJQUNILHNCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksZUFBZTs7O0lBRzNCLGtDQUtFOztJQUVGLHNDQUtFOztJQUVGLGtDQUtFOzs7OztJQXJCVSxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBwbHVjaywgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfV0lER0VUX0FDVElPTl9UWVBFUywgR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydFdpZGdldEFjdGlvbiwgV2lkZ2V0c0FjdGlvblR5cGVzLCBEZWxldGVXaWRnZXRBY3Rpb24gfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXdpZGdldFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0RGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbihbIHdpZGdldCBdKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuU1VDQ0VFRCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoKHdpZGdldHM6IFdpZGdldE1vZGVsPGFueT5bXSkgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbih3aWRnZXRzKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREZWxldGUkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKCh3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT4pID0+IG5ldyBEZWxldGVXaWRnZXRBY3Rpb24od2lkZ2V0KSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
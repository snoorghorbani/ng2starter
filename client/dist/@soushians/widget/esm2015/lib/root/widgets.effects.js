/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { UpsertWidgetAction, DeleteWidgetAction } from "./widget.actions";
export class WidgetDbEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$.pipe(ofType("[WIDGET][API][GetWidget] succeed" /* SUCCEED */), pluck("payload"), map((widget) => new UpsertWidgetAction([widget])));
        this.UpsertMany$ = this.actions$.pipe(ofType("[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */), pluck("payload"), map((widgets) => new UpsertWidgetAction(widgets)));
        this.Delete$ = this.actions$.pipe(ofType("[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */), pluck("payload"), map((widget) => new DeleteWidgetAction(widget)));
    }
}
WidgetDbEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetDbEffects.ctorParameters = () => [
    { type: Actions }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvcm9vdC93aWRnZXRzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBSXZELE9BQU8sRUFBRSxrQkFBa0IsRUFBc0Isa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUk5RixNQUFNLE9BQU8sZUFBZTs7OztJQUMzQixZQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBRzFDLFlBQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0IsTUFBTSxrREFBaUMsRUFDdkMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHLENBQUMsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLENBQUUsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUNyRSxDQUFDO1FBR0YsZ0JBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0IsTUFBTSx3REFBa0MsRUFDeEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHLENBQUMsQ0FBQyxPQUEyQixFQUFFLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ3JFLENBQUM7UUFHRixZQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNCLE1BQU0sNERBQW9DLEVBQzFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsR0FBRyxDQUFDLENBQUMsTUFBd0IsRUFBRSxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNqRSxDQUFDO0lBckIyQyxDQUFDOzs7WUFGOUMsVUFBVTs7OztZQVRGLE9BQU87O0FBY2Y7SUFEQyxNQUFNLEVBQUU7O2dEQUtQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7O29EQUtQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7O2dEQUtQOzs7SUFuQkYsa0NBS0U7O0lBRUYsc0NBS0U7O0lBRUYsa0NBS0U7Ozs7O0lBckJVLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIHBsdWNrLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLCBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QWN0aW9uLCBXaWRnZXRzQWN0aW9uVHlwZXMsIERlbGV0ZVdpZGdldEFjdGlvbiB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXREYkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55Pikge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcCgod2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+KSA9PiBuZXcgVXBzZXJ0V2lkZ2V0QWN0aW9uKFsgd2lkZ2V0IF0pKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydE1hbnkkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVUNDRUVEKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcCgod2lkZ2V0czogV2lkZ2V0TW9kZWw8YW55PltdKSA9PiBuZXcgVXBzZXJ0V2lkZ2V0QWN0aW9uKHdpZGdldHMpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERlbGV0ZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IERlbGV0ZVdpZGdldEFjdGlvbih3aWRnZXQpKVxyXG5cdCk7XHJcbn1cclxuIl19
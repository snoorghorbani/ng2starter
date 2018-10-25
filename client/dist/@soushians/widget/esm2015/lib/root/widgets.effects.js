/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { UpsertWidgetAction, DeleteWidgetAction } from "./widget.actions";
export class WidgetDbEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$
            .ofType("[WIDGET][API][GetWidget] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map((widget) => new UpsertWidgetAction([widget])));
        this.UpsertMany$ = this.actions$
            .ofType("[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map((widgets) => new UpsertWidgetAction(widgets)));
        this.Delete$ = this.actions$
            .ofType("[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map((widget) => new DeleteWidgetAction(widget)));
    }
}
WidgetDbEffects.decorators = [
    { type: Injectable },
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
    /** @type {?} */
    WidgetDbEffects.prototype.actions$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvcm9vdC93aWRnZXRzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFJdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFzQixrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSTlGLE1BQU07Ozs7SUFDTCxZQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO3VCQUdoQyxJQUFJLENBQUMsUUFBUTthQUNyQixNQUFNLGtEQUFpQzthQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUMsQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUM7MkJBR2pGLElBQUksQ0FBQyxRQUFRO2FBQ3pCLE1BQU0sd0RBQWtDO2FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBMkIsRUFBRSxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3VCQUdyRixJQUFJLENBQUMsUUFBUTthQUNyQixNQUFNLDREQUFvQzthQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQWY3Qzs7O1lBRjlDLFVBQVU7Ozs7WUFURixPQUFPOzs7SUFhZCxNQUFNLEVBQUU7Ozs7SUFLUixNQUFNLEVBQUU7Ozs7SUFLUixNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2ssIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMsIEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBY3Rpb24sIFdpZGdldHNBY3Rpb25UeXBlcywgRGVsZXRlV2lkZ2V0QWN0aW9uIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXRcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldERiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbihbIHdpZGdldCBdKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgod2lkZ2V0czogV2lkZ2V0TW9kZWw8YW55PltdKSA9PiBuZXcgVXBzZXJ0V2lkZ2V0QWN0aW9uKHdpZGdldHMpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERlbGV0ZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgod2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+KSA9PiBuZXcgRGVsZXRlV2lkZ2V0QWN0aW9uKHdpZGdldCkpKTtcclxufVxyXG4iXX0=
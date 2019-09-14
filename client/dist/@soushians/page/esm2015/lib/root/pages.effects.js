/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { UpsertPageAction, DeletePageAction } from "./pages.actions";
export class PageDbEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$.pipe(ofType("[PAGE][API][GetPage] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} page
         * @return {?}
         */
        (page) => new UpsertPageAction([page]))));
        this.UpsertMany$ = this.actions$.pipe(ofType("[GET_PAGES][API][GetPages] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} pages
         * @return {?}
         */
        (pages) => new UpsertPageAction(pages))));
        this.delete$ = this.actions$.pipe(ofType("[PAGE][API][DELETE] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} page
         * @return {?}
         */
        (page) => new DeletePageAction(page))));
    }
}
PageDbEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageDbEffects.ctorParameters = () => [
    { type: Actions }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], PageDbEffects.prototype, "Upsert$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], PageDbEffects.prototype, "UpsertMany$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], PageDbEffects.prototype, "delete$", void 0);
if (false) {
    /** @type {?} */
    PageDbEffects.prototype.Upsert$;
    /** @type {?} */
    PageDbEffects.prototype.UpsertMany$;
    /** @type {?} */
    PageDbEffects.prototype.delete$;
    /**
     * @type {?}
     * @private
     */
    PageDbEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9yb290L3BhZ2VzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3JFLE1BQU0sT0FBTyxhQUFhOzs7O0lBQ3pCLFlBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFHMUMsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzQixNQUFNLDhDQUErQixFQUNyQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLEdBQUc7Ozs7UUFBQyxDQUFDLElBQWUsRUFBRSxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDLEVBQUMsQ0FDeEQsQ0FBQztRQUdGLGdCQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9CLE1BQU0sb0RBQWdDLEVBQ3RDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsR0FBRzs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUN4RCxDQUFDO1FBR0YsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzQixNQUFNLDZDQUFrQyxFQUN4QyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLEdBQUc7Ozs7UUFBQyxDQUFDLElBQWUsRUFBRSxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUNwRCxDQUFDO0lBckIyQyxDQUFDOzs7WUFGOUMsVUFBVTs7OztZQVJGLE9BQU87O0FBYWY7SUFEQyxNQUFNLEVBQUU7OzhDQUtQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7O2tEQUtQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7OzhDQUtQOzs7SUFuQkYsZ0NBS0U7O0lBRUYsb0NBS0U7O0lBRUYsZ0NBS0U7Ozs7O0lBckJVLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9QQUdFX0FDVElPTl9UWVBFUywgR0VUX1BBR0VTX0FDVElPTl9UWVBFUywgREVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0UGFnZUFjdGlvbiwgRGVsZXRlUGFnZUFjdGlvbiB9IGZyb20gXCIuL3BhZ2VzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhZ2VEYkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55Pikge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4gbmV3IFVwc2VydFBhZ2VBY3Rpb24oWyBwYWdlIF0pKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydE1hbnkkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuU1VDQ0VFRCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoKHBhZ2VzOiBQYWdlTW9kZWxbXSkgPT4gbmV3IFVwc2VydFBhZ2VBY3Rpb24ocGFnZXMpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRlbGV0ZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoREVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKChwYWdlOiBQYWdlTW9kZWwpID0+IG5ldyBEZWxldGVQYWdlQWN0aW9uKHBhZ2UpKVxyXG5cdCk7XHJcbn1cclxuIl19
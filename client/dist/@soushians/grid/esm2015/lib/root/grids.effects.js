/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { UpsertGridAction } from "./widget.actions";
export class GridDbEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$.pipe(ofType("[GRID][API][GetGrid] succeed" /* SUCCEED */, "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} grid
         * @return {?}
         */
        (grid) => new UpsertGridAction([grid]))));
        this.UpsertMany$ = this.actions$.pipe(ofType("[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} grids
         * @return {?}
         */
        (grids) => new UpsertGridAction(grids))));
    }
}
GridDbEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GridDbEffects.ctorParameters = () => [
    { type: Actions }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], GridDbEffects.prototype, "Upsert$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], GridDbEffects.prototype, "UpsertMany$", void 0);
if (false) {
    /** @type {?} */
    GridDbEffects.prototype.Upsert$;
    /** @type {?} */
    GridDbEffects.prototype.UpsertMany$;
    /**
     * @type {?}
     * @private
     */
    GridDbEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9yb290L2dyaWRzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTXBELE1BQU0sT0FBTyxhQUFhOzs7O0lBQ3pCLFlBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFHMUMsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzQixNQUFNLHNHQUFpRSxFQUN2RSxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLEdBQUc7Ozs7UUFBQyxDQUFDLElBQWUsRUFBRSxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDLEVBQUMsQ0FDeEQsQ0FBQztRQUdGLGdCQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9CLE1BQU0sb0RBQWdDLEVBQ3RDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsR0FBRzs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUN4RCxDQUFDO0lBZDJDLENBQUM7OztZQUY5QyxVQUFVOzs7O1lBVkYsT0FBTzs7QUFlZjtJQURDLE1BQU0sRUFBRTs7OENBS1A7QUFHRjtJQURDLE1BQU0sRUFBRTs7a0RBS1A7OztJQVpGLGdDQUtFOztJQUVGLG9DQUtFOzs7OztJQWRVLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFjdGlvbiB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQsIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcCgoZ3JpZDogR3JpZE1vZGVsKSA9PiBuZXcgVXBzZXJ0R3JpZEFjdGlvbihbIGdyaWQgXSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0TWFueSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVUNDRUVEKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcCgoZ3JpZHM6IEdyaWRNb2RlbFtdKSA9PiBuZXcgVXBzZXJ0R3JpZEFjdGlvbihncmlkcykpXHJcblx0KTtcclxufVxyXG4iXX0=
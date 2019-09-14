/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { Router } from "@angular/router";
import { SourceActionTypes, SourceSubmitSucceed, SourceSubmitFailed } from "../actions";
import { SourceService } from "../services/source.service";
export class SourceEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} sourceService
     */
    constructor(actions$, router, sourceService) {
        this.actions$ = actions$;
        this.router = router;
        this.sourceService = sourceService;
        this.afterSubmitSource$ = this.actions$.pipe(ofType(SourceActionTypes.SOURCE_SUBMIT), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            return this.sourceService
                .upsertSource(data)
                .pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            res => new SourceSubmitSucceed())), catchError((/**
             * @return {?}
             */
            () => of(new SourceSubmitFailed()))));
        })));
        this.SigninSucceed$ = this.actions$.pipe(ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED), switchMap((/**
         * @return {?}
         */
        () => {
            this.router.navigate(["source"]);
            return Observable.empty();
        })));
    }
}
SourceEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: SourceService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], SourceEffects.prototype, "afterSubmitSource$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], SourceEffects.prototype, "SigninSucceed$", void 0);
if (false) {
    /** @type {?} */
    SourceEffects.prototype.afterSubmitSource$;
    /** @type {?} */
    SourceEffects.prototype.SigninSucceed$;
    /**
     * @type {?}
     * @private
     */
    SourceEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    SourceEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    SourceEffects.prototype.sourceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL3NvdXJjZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBZ0IsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRzNELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFDekIsWUFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsYUFBNEI7UUFBcEYsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUd4Ryx1QkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUN2QyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLFNBQVM7Ozs7UUFBQyxDQUFDLElBQWtDLEVBQUUsRUFBRTtZQUNoRCxPQUFPLElBQUksQ0FBQyxhQUFhO2lCQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUNsQixJQUFJLENBQUMsR0FBRzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxFQUFDLEVBQUUsVUFBVTs7O1lBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMvRixDQUFDLEVBQUMsQ0FDRixDQUFDO1FBR0YsbUJBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbEMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEVBQy9DLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUUsUUFBUSxDQUFFLENBQUMsQ0FBQztZQUNuQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBcEJ5RyxDQUFDOzs7WUFGNUcsVUFBVTs7OztZQVZGLE9BQU87WUFJUCxNQUFNO1lBSU4sYUFBYTs7QUFPckI7SUFEQyxNQUFNLEVBQUU7O3lEQVNQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7O3FEQU9QOzs7SUFsQkYsMkNBU0U7O0lBRUYsdUNBT0U7Ozs7O0lBcEJVLGlDQUE4Qjs7Ozs7SUFBRSwrQkFBc0I7Ozs7O0lBQUUsc0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU291cmNlQWN0aW9uVHlwZXMsIFNvdXJjZVN1Ym1pdCwgU291cmNlU3VibWl0U3VjY2VlZCwgU291cmNlU3VibWl0RmFpbGVkIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwsIFVwc2VydFNvdXJjZUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NvdXJjZS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc291cmNlU2VydmljZTogU291cmNlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWZ0ZXJTdWJtaXRTb3VyY2UkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVNlcnZpY2VcclxuXHRcdFx0XHQudXBzZXJ0U291cmNlKGRhdGEpXHJcblx0XHRcdFx0LnBpcGUobWFwKHJlcyA9PiBuZXcgU291cmNlU3VibWl0U3VjY2VlZCgpKSwgY2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgU291cmNlU3VibWl0RmFpbGVkKCkpKSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNpZ25pblN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfU1VDQ0VFRCksXHJcblx0XHRzd2l0Y2hNYXAoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwic291cmNlXCIgXSk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIl19
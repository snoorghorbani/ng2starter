/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";
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
        this.afterSubmitSource$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT).pipe(map(action => action.payload), switchMap((data) => {
            return this.sourceService
                .upsertSource(data)
                .pipe(map(res => new SourceSubmitSucceed()), catchError(() => of(new SourceSubmitFailed())));
        }));
        this.SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).pipe(switchMap(() => {
            this.router.navigate(["source"]);
            return Observable.empty();
        }));
    }
}
SourceEffects.decorators = [
    { type: Injectable },
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
    /** @type {?} */
    SourceEffects.prototype.actions$;
    /** @type {?} */
    SourceEffects.prototype.router;
    /** @type {?} */
    SourceEffects.prototype.sourceService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL3NvdXJjZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQWdCLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXRHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUczRCxNQUFNOzs7Ozs7SUFDTCxZQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxhQUE0QjtRQUFwRixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO2tDQUduRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQzlFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDN0IsU0FBUyxDQUFDLENBQUMsSUFBa0MsRUFBRSxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDLGFBQWE7aUJBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUM7aUJBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RixDQUFDLENBQ0Y7OEJBR2dCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUNsRixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBRSxRQUFRLENBQUUsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFCLENBQUMsQ0FDRjtLQWxCMkc7OztZQUY1RyxVQUFVOzs7O1lBVkYsT0FBTztZQUlQLE1BQU07WUFJTixhQUFhOzs7SUFNcEIsTUFBTSxFQUFFOzs7O0lBVVIsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU291cmNlQWN0aW9uVHlwZXMsIFNvdXJjZVN1Ym1pdCwgU291cmNlU3VibWl0U3VjY2VlZCwgU291cmNlU3VibWl0RmFpbGVkIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwsIFVwc2VydFNvdXJjZUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NvdXJjZS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc291cmNlU2VydmljZTogU291cmNlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWZ0ZXJTdWJtaXRTb3VyY2UkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVCkucGlwZShcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVNlcnZpY2VcclxuXHRcdFx0XHQudXBzZXJ0U291cmNlKGRhdGEpXHJcblx0XHRcdFx0LnBpcGUobWFwKHJlcyA9PiBuZXcgU291cmNlU3VibWl0U3VjY2VlZCgpKSwgY2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgU291cmNlU3VibWl0RmFpbGVkKCkpKSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNpZ25pblN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9TVUNDRUVEKS5waXBlKFxyXG5cdFx0c3dpdGNoTWFwKCgpID0+IHtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcInNvdXJjZVwiIF0pO1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
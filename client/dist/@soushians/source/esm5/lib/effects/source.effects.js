/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { SourceActionTypes, SourceSubmitSucceed, SourceSubmitFailed } from "../actions";
import { SourceService } from "../services/source.service";
var SourceEffects = /** @class */ (function () {
    function SourceEffects(actions$, router, sourceService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.sourceService = sourceService;
        this.afterSubmitSource$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT).pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.sourceService
                .upsertSource(data)
                .pipe(map(function (res) { return new SourceSubmitSucceed(); }), catchError(function () { return Observable.of(new SourceSubmitFailed()); }));
        }));
        this.SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).pipe(switchMap(function () {
            _this.router.navigate(["source"]);
            return Observable.empty();
        }));
    }
    SourceEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SourceEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: SourceService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], SourceEffects.prototype, "afterSubmitSource$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], SourceEffects.prototype, "SigninSucceed$", void 0);
    return SourceEffects;
}());
export { SourceEffects };
function SourceEffects_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL3NvdXJjZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBZ0IsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQUkxRCx1QkFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsYUFBNEI7UUFBeEcsaUJBQTRHO1FBQXhGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7a0NBR25GLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDOUUsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0IsU0FBUyxDQUFDLFVBQUMsSUFBa0M7WUFDNUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhO2lCQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxtQkFBbUIsRUFBRSxFQUF6QixDQUF5QixDQUFDLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUMsQ0FBQztTQUN6RyxDQUFDLENBQ0Y7OEJBR2dCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUNsRixTQUFTLENBQUM7WUFDVCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFFLFFBQVEsQ0FBRSxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQixDQUFDLENBQ0Y7S0FsQjJHOztnQkFGNUcsVUFBVTs7OztnQkFWRixPQUFPO2dCQUlQLE1BQU07Z0JBSU4sYUFBYTs7O1FBTXBCLE1BQU0sRUFBRTs7OztRQVVSLE1BQU0sRUFBRTs7O3dCQTNCVjs7U0FjYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU291cmNlQWN0aW9uVHlwZXMsIFNvdXJjZVN1Ym1pdCwgU291cmNlU3VibWl0U3VjY2VlZCwgU291cmNlU3VibWl0RmFpbGVkIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwsIFVwc2VydFNvdXJjZUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NvdXJjZS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc291cmNlU2VydmljZTogU291cmNlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWZ0ZXJTdWJtaXRTb3VyY2UkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVCkucGlwZShcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVNlcnZpY2VcclxuXHRcdFx0XHQudXBzZXJ0U291cmNlKGRhdGEpXHJcblx0XHRcdFx0LnBpcGUobWFwKHJlcyA9PiBuZXcgU291cmNlU3VibWl0U3VjY2VlZCgpKSwgY2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBTb3VyY2VTdWJtaXRGYWlsZWQoKSkpKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U2lnbmluU3VjY2VlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRzd2l0Y2hNYXAoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwic291cmNlXCIgXSk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIl19
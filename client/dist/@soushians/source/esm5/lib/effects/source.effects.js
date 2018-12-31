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
var SourceEffects = /** @class */ (function () {
    function SourceEffects(actions$, router, sourceService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.sourceService = sourceService;
        this.afterSubmitSource$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT).pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.sourceService
                .upsertSource(data)
                .pipe(map(function (res) { return new SourceSubmitSucceed(); }), catchError(function () { return of(new SourceSubmitFailed()); }));
        }));
        this.SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).pipe(switchMap(function () {
            _this.router.navigate(["source"]);
            return Observable.empty();
        }));
    }
    SourceEffects.decorators = [
        { type: Injectable }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL3NvdXJjZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQWdCLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXRHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7SUFJMUQsdUJBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLGFBQTRCO1FBQXhHLGlCQUE0RztRQUF4RixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRXhHLDBCQUNxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQzlFLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxVQUFDLElBQWtDO1lBQzVDLE9BQU8sS0FBSSxDQUFDLGFBQWE7aUJBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUM7aUJBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLG1CQUFtQixFQUFFLEVBQXpCLENBQXlCLENBQUMsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDLENBQUM7U0FDOUYsQ0FBQyxDQUNGLENBQUM7UUFFRixzQkFDaUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQ2xGLFNBQVMsQ0FBQztZQUNULEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUUsUUFBUSxDQUFFLENBQUMsQ0FBQztZQUNuQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQixDQUFDLENBQ0YsQ0FBQztLQWxCMEc7O2dCQUY1RyxVQUFVOzs7O2dCQVZGLE9BQU87Z0JBSVAsTUFBTTtnQkFJTixhQUFhOzs7UUFNcEIsTUFBTSxFQUFFOzs7O1FBVVIsTUFBTSxFQUFFOzs7d0JBM0JWOztTQWNhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTb3VyY2VBY3Rpb25UeXBlcywgU291cmNlU3VibWl0LCBTb3VyY2VTdWJtaXRTdWNjZWVkLCBTb3VyY2VTdWJtaXRGYWlsZWQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCwgVXBzZXJ0U291cmNlQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc291cmNlLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzb3VyY2VTZXJ2aWNlOiBTb3VyY2VTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRhZnRlclN1Ym1pdFNvdXJjZSQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QpID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc291cmNlU2VydmljZVxyXG5cdFx0XHRcdC51cHNlcnRTb3VyY2UoZGF0YSlcclxuXHRcdFx0XHQucGlwZShtYXAocmVzID0+IG5ldyBTb3VyY2VTdWJtaXRTdWNjZWVkKCkpLCBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBTb3VyY2VTdWJtaXRGYWlsZWQoKSkpKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U2lnbmluU3VjY2VlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRzd2l0Y2hNYXAoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwic291cmNlXCIgXSk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIl19
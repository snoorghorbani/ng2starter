/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { PageService } from "../../page.service";
import { GetPagesSucceedAction, GetPagesFailedAction } from "./get-pages.actions";
var GetPagesApiEffects = /** @class */ (function () {
    function GetPagesApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GET_PAGES][API][GetPages] start" /* START */)
            .pipe(switchMap(function () {
            return _this.service
                .getPages()
                .pipe(map(function (res) { return new GetPagesSucceedAction(res); }), catchError(function (err) { return of(new GetPagesFailedAction(err)); }));
        }));
    }
    GetPagesApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GetPagesApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: PageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], GetPagesApiEffects.prototype, "start$", void 0);
    return GetPagesApiEffects;
}());
export { GetPagesApiEffects };
if (false) {
    /** @type {?} */
    GetPagesApiEffects.prototype.start$;
    /** @type {?} */
    GetPagesApiEffects.prototype.actions$;
    /** @type {?} */
    GetPagesApiEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2VzLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUdOLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsTUFBTSxxQkFBcUIsQ0FBQzs7SUFJNUIsNEJBQW9CLFFBQWtDLEVBQVUsT0FBb0I7UUFBcEYsaUJBQXdGO1FBQXBFLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUVwRixjQUNTLElBQUksQ0FBQyxRQUFRO2FBQ3BCLE1BQU0sZ0RBQThCO2FBQ3BDLElBQUksQ0FDSixTQUFTLENBQUM7WUFDVCxPQUFBLEtBQUksQ0FBQyxPQUFPO2lCQUNWLFFBQVEsRUFBRTtpQkFDVixJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsSUFBSSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxFQUM1QyxVQUFVLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxFQUFFLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQ3REO1FBTEYsQ0FLRSxDQUNGLENBQ0QsQ0FBQztLQWRxRjs7Z0JBRnhGLFVBQVU7Ozs7Z0JBWkYsT0FBTztnQkFJUCxXQUFXOzs7UUFZbEIsTUFBTSxFQUFFOzs7NkJBbEJWOztTQWVhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9wYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLFxyXG5cdEdldFBhZ2VzQWN0aW9ucyxcclxuXHRHZXRQYWdlc1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0UGFnZXNGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9nZXQtcGFnZXMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFBhZ2VzQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1BBR0VTX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRQYWdlcygpXHJcblx0XHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRQYWdlc1N1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IEdldFBhZ2VzRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiJdfQ==
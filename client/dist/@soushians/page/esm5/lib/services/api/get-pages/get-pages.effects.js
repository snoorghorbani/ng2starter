/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { PageService } from "../../page.service";
import { GetPagesSucceedAction, GetPagesFailedAction } from "./get-pages.actions";
var GetPagesApiEffects = /** @class */ (function () {
    function GetPagesApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[GET_PAGES][API][GetPages] start" /* START */), switchMap((/**
         * @return {?}
         */
        function () {
            return _this.service
                .getPages()
                .pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new GetPagesSucceedAction(res); })), catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return of(new GetPagesFailedAction(err)); })));
        })));
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
    /**
     * @type {?}
     * @private
     */
    GetPagesApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetPagesApiEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2VzLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFHTixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLE1BQU0scUJBQXFCLENBQUM7QUFFN0I7SUFFQyw0QkFBb0IsUUFBa0MsRUFBVSxPQUFvQjtRQUFwRixpQkFBd0Y7UUFBcEUsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBR3BGLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUIsTUFBTSxnREFBOEIsRUFDcEMsU0FBUzs7O1FBQUM7WUFDVCxPQUFBLEtBQUksQ0FBQyxPQUFPO2lCQUNWLFFBQVEsRUFBRTtpQkFDVixJQUFJLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxFQUFFLFVBQVU7Ozs7WUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWpDLENBQWlDLEVBQUMsQ0FBQztRQUZ4RyxDQUV3RyxFQUN4RyxDQUNELENBQUM7SUFWcUYsQ0FBQzs7Z0JBRnhGLFVBQVU7Ozs7Z0JBWkYsT0FBTztnQkFJUCxXQUFXOztJQWFuQjtRQURDLE1BQU0sRUFBRTs7c0RBUVA7SUFDSCx5QkFBQztDQUFBLEFBYkQsSUFhQztTQVpZLGtCQUFrQjs7O0lBRzlCLG9DQVFFOzs7OztJQVZVLHNDQUEwQzs7Ozs7SUFBRSxxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9wYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLFxyXG5cdEdldFBhZ2VzQWN0aW9ucyxcclxuXHRHZXRQYWdlc1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0UGFnZXNGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9nZXQtcGFnZXMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFBhZ2VzQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLlNUQVJUKSxcclxuXHRcdHN3aXRjaE1hcCgoKSA9PlxyXG5cdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHQuZ2V0UGFnZXMoKVxyXG5cdFx0XHRcdC5waXBlKG1hcChyZXMgPT4gbmV3IEdldFBhZ2VzU3VjY2VlZEFjdGlvbihyZXMpKSwgY2F0Y2hFcnJvcihlcnIgPT4gb2YobmV3IEdldFBhZ2VzRmFpbGVkQWN0aW9uKGVycikpKSlcclxuXHRcdClcclxuXHQpO1xyXG59XHJcbiJdfQ==
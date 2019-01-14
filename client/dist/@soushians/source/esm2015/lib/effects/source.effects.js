/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.afterSubmitSource$ = this.actions$.pipe(ofType(SourceActionTypes.SOURCE_SUBMIT), pluck("payload"), switchMap((data) => {
            return this.sourceService
                .upsertSource(data)
                .pipe(map(res => new SourceSubmitSucceed()), catchError(() => of(new SourceSubmitFailed())));
        }));
        this.SigninSucceed$ = this.actions$.pipe(ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED), switchMap(() => {
            this.router.navigate(["source"]);
            return Observable.empty();
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL3NvdXJjZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBZ0IsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRzNELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFDekIsWUFBb0IsUUFBc0IsRUFBVSxNQUFjLEVBQVUsYUFBNEI7UUFBcEYsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUd4Ryx1QkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUN2QyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLFNBQVMsQ0FBQyxDQUFDLElBQWtDLEVBQUUsRUFBRTtZQUNoRCxPQUFPLElBQUksQ0FBQyxhQUFhO2lCQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsQ0FBQyxDQUFDLENBQ0YsQ0FBQztRQUdGLG1CQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxFQUMvQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBRSxRQUFRLENBQUUsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFwQnlHLENBQUM7OztZQUY1RyxVQUFVOzs7O1lBVkYsT0FBTztZQUlQLE1BQU07WUFJTixhQUFhOztBQU9yQjtJQURDLE1BQU0sRUFBRTs7eURBU1A7QUFHRjtJQURDLE1BQU0sRUFBRTs7cURBT1A7OztJQWxCRiwyQ0FTRTs7SUFFRix1Q0FPRTs7Ozs7SUFwQlUsaUNBQThCOzs7OztJQUFFLCtCQUFzQjs7Ozs7SUFBRSxzQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTb3VyY2VBY3Rpb25UeXBlcywgU291cmNlU3VibWl0LCBTb3VyY2VTdWJtaXRTdWNjZWVkLCBTb3VyY2VTdWJtaXRGYWlsZWQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCwgVXBzZXJ0U291cmNlQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc291cmNlLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzb3VyY2VTZXJ2aWNlOiBTb3VyY2VTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRhZnRlclN1Ym1pdFNvdXJjZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QpID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc291cmNlU2VydmljZVxyXG5cdFx0XHRcdC51cHNlcnRTb3VyY2UoZGF0YSlcclxuXHRcdFx0XHQucGlwZShtYXAocmVzID0+IG5ldyBTb3VyY2VTdWJtaXRTdWNjZWVkKCkpLCBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBTb3VyY2VTdWJtaXRGYWlsZWQoKSkpKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U2lnbmluU3VjY2VlZCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9TVUNDRUVEKSxcclxuXHRcdHN3aXRjaE1hcCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCJzb3VyY2VcIiBdKTtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iXX0=
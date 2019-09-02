/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { PageService } from "../../page.service";
import { GetPageSucceedAction, GetPageFailedAction } from "./get-page.actions";
var GetPageApiEffects = /** @class */ (function () {
    function GetPageApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[PAGE][API][GetPage] start" /* START */), map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.get(payload); }), map(function (res) { return new GetPageSucceedAction(res); }), catchError(function (err) { return of(new GetPageFailedAction(err)); }));
    }
    GetPageApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GetPageApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: PageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], GetPageApiEffects.prototype, "start$", void 0);
    return GetPageApiEffects;
}());
export { GetPageApiEffects };
if (false) {
    /** @type {?} */
    GetPageApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    GetPageApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetPageApiEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2UuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBeUMsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0SDtJQUVDLDJCQUFvQixRQUFpQyxFQUFVLE9BQW9CO1FBQW5GLGlCQUF1RjtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUF5QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFHbkYsV0FBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxQixNQUFNLDBDQUFrQyxFQUN4QyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxFQUMvQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxFQUE3QixDQUE2QixDQUFDLEVBQ3pDLFVBQVUsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FDbkQsQ0FBQztJQVRvRixDQUFDOztnQkFGdkYsVUFBVTs7OztnQkFQRixPQUFPO2dCQUlQLFdBQVc7O0lBUW5CO1FBREMsTUFBTSxFQUFFOztxREFPUDtJQUNILHdCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksaUJBQWlCOzs7SUFHN0IsbUNBT0U7Ozs7O0lBVFUscUNBQXlDOzs7OztJQUFFLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHRVRfUEFHRV9BQ1RJT05fVFlQRVMsIEdldFBhZ2VBY3Rpb25zLCBHZXRQYWdlU3VjY2VlZEFjdGlvbiwgR2V0UGFnZUZhaWxlZEFjdGlvbiB9IGZyb20gXCIuL2dldC1wYWdlLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFBhZ2VBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oR0VUX1BBR0VfQUNUSU9OX1RZUEVTLlNUQVJUKSxcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKHBheWxvYWQgPT4gdGhpcy5zZXJ2aWNlLmdldChwYXlsb2FkKSksXHJcblx0XHRtYXAocmVzID0+IG5ldyBHZXRQYWdlU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdGNhdGNoRXJyb3IoZXJyID0+IG9mKG5ldyBHZXRQYWdlRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdCk7XHJcbn1cclxuIl19
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
var SourceEffects = /** @class */ (function () {
    function SourceEffects(actions$, router, sourceService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.sourceService = sourceService;
        this.afterSubmitSource$ = this.actions$.pipe(ofType(SourceActionTypes.SOURCE_SUBMIT), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return _this.sourceService
                .upsertSource(data)
                .pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new SourceSubmitSucceed(); })), catchError((/**
             * @return {?}
             */
            function () { return of(new SourceSubmitFailed()); })));
        })));
        this.SigninSucceed$ = this.actions$.pipe(ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED), switchMap((/**
         * @return {?}
         */
        function () {
            _this.router.navigate(["source"]);
            return Observable.empty();
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9lZmZlY3RzL3NvdXJjZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBZ0IsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNEO0lBRUMsdUJBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLGFBQTRCO1FBQXhHLGlCQUE0RztRQUF4RixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBR3hHLHVCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEVBQ3ZDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsU0FBUzs7OztRQUFDLFVBQUMsSUFBa0M7WUFDNUMsT0FBTyxLQUFJLENBQUMsYUFBYTtpQkFDdkIsWUFBWSxDQUFDLElBQUksQ0FBQztpQkFDbEIsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksbUJBQW1CLEVBQUUsRUFBekIsQ0FBeUIsRUFBQyxFQUFFLFVBQVU7OztZQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQyxDQUFDO1FBQy9GLENBQUMsRUFBQyxDQUNGLENBQUM7UUFHRixtQkFBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsQyxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsRUFDL0MsU0FBUzs7O1FBQUM7WUFDVCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFFLFFBQVEsQ0FBRSxDQUFDLENBQUM7WUFDbkMsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQXBCeUcsQ0FBQzs7Z0JBRjVHLFVBQVU7Ozs7Z0JBVkYsT0FBTztnQkFJUCxNQUFNO2dCQUlOLGFBQWE7O0lBT3JCO1FBREMsTUFBTSxFQUFFOzs2REFTUDtJQUdGO1FBREMsTUFBTSxFQUFFOzt5REFPUDtJQUNILG9CQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0QlksYUFBYTs7O0lBR3pCLDJDQVNFOztJQUVGLHVDQU9FOzs7OztJQXBCVSxpQ0FBOEI7Ozs7O0lBQUUsK0JBQXNCOzs7OztJQUFFLHNDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNvdXJjZUFjdGlvblR5cGVzLCBTb3VyY2VTdWJtaXQsIFNvdXJjZVN1Ym1pdFN1Y2NlZWQsIFNvdXJjZVN1Ym1pdEZhaWxlZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsLCBVcHNlcnRTb3VyY2VBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU291cmNlRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNvdXJjZVNlcnZpY2U6IFNvdXJjZVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGFmdGVyU3VibWl0U291cmNlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTZXJ2aWNlXHJcblx0XHRcdFx0LnVwc2VydFNvdXJjZShkYXRhKVxyXG5cdFx0XHRcdC5waXBlKG1hcChyZXMgPT4gbmV3IFNvdXJjZVN1Ym1pdFN1Y2NlZWQoKSksIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFNvdXJjZVN1Ym1pdEZhaWxlZCgpKSkpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTaWduaW5TdWNjZWVkJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX1NVQ0NFRUQpLFxyXG5cdFx0c3dpdGNoTWFwKCgpID0+IHtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcInNvdXJjZVwiIF0pO1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { UpsertPageAction, DeletePageAction } from "./pages.actions";
var PageDbEffects = /** @class */ (function () {
    function PageDbEffects(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$.pipe(ofType("[PAGE][API][GetPage] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return new UpsertPageAction([page]); })));
        this.UpsertMany$ = this.actions$.pipe(ofType("[GET_PAGES][API][GetPages] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} pages
         * @return {?}
         */
        function (pages) { return new UpsertPageAction(pages); })));
        this.delete$ = this.actions$.pipe(ofType("[PAGE][API][DELETE] succeed" /* SUCCEED */), pluck("payload"), map((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return new DeletePageAction(page); })));
    }
    PageDbEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PageDbEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], PageDbEffects.prototype, "Upsert$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], PageDbEffects.prototype, "UpsertMany$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], PageDbEffects.prototype, "delete$", void 0);
    return PageDbEffects;
}());
export { PageDbEffects };
if (false) {
    /** @type {?} */
    PageDbEffects.prototype.Upsert$;
    /** @type {?} */
    PageDbEffects.prototype.UpsertMany$;
    /** @type {?} */
    PageDbEffects.prototype.delete$;
    /**
     * @type {?}
     * @private
     */
    PageDbEffects.prototype.actions$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9yb290L3BhZ2VzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJFO0lBRUMsdUJBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFHMUMsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzQixNQUFNLDhDQUErQixFQUNyQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLEdBQUc7Ozs7UUFBQyxVQUFDLElBQWUsSUFBSyxPQUFBLElBQUksZ0JBQWdCLENBQUMsQ0FBRSxJQUFJLENBQUUsQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQ3hELENBQUM7UUFHRixnQkFBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMvQixNQUFNLG9EQUFnQyxFQUN0QyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLEdBQUc7Ozs7UUFBQyxVQUFDLEtBQWtCLElBQUssT0FBQSxJQUFJLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixFQUFDLENBQ3hELENBQUM7UUFHRixZQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNCLE1BQU0sNkNBQWtDLEVBQ3hDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsR0FBRzs7OztRQUFDLFVBQUMsSUFBZSxJQUFLLE9BQUEsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUNwRCxDQUFDO0lBckIyQyxDQUFDOztnQkFGOUMsVUFBVTs7OztnQkFSRixPQUFPOztJQWFmO1FBREMsTUFBTSxFQUFFOztrREFLUDtJQUdGO1FBREMsTUFBTSxFQUFFOztzREFLUDtJQUdGO1FBREMsTUFBTSxFQUFFOztrREFLUDtJQUNILG9CQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlksYUFBYTs7O0lBR3pCLGdDQUtFOztJQUVGLG9DQUtFOztJQUVGLGdDQUtFOzs7OztJQXJCVSxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfUEFHRV9BQ1RJT05fVFlQRVMsIEdFVF9QQUdFU19BQ1RJT05fVFlQRVMsIERFTEVURV9QQUdFX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydFBhZ2VBY3Rpb24sIERlbGV0ZVBhZ2VBY3Rpb24gfSBmcm9tIFwiLi9wYWdlcy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYWdlRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoR0VUX1BBR0VfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKChwYWdlOiBQYWdlTW9kZWwpID0+IG5ldyBVcHNlcnRQYWdlQWN0aW9uKFsgcGFnZSBdKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKChwYWdlczogUGFnZU1vZGVsW10pID0+IG5ldyBVcHNlcnRQYWdlQWN0aW9uKHBhZ2VzKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRkZWxldGUkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKERFTEVURV9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcCgocGFnZTogUGFnZU1vZGVsKSA9PiBuZXcgRGVsZXRlUGFnZUFjdGlvbihwYWdlKSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
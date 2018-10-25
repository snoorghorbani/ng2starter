/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { UpsertGridAction } from "./widget.actions";
var GridDbEffects = /** @class */ (function () {
    function GridDbEffects(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$
            .ofType("[GRID][API][GetGrid] succeed" /* SUCCEED */, "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (grid) { return new UpsertGridAction([grid]); }));
        this.UpsertMany$ = this.actions$
            .ofType("[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (grids) { return new UpsertGridAction(grids); }));
    }
    GridDbEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GridDbEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], GridDbEffects.prototype, "Upsert$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], GridDbEffects.prototype, "UpsertMany$", void 0);
    return GridDbEffects;
}());
export { GridDbEffects };
if (false) {
    /** @type {?} */
    GridDbEffects.prototype.Upsert$;
    /** @type {?} */
    GridDbEffects.prototype.UpsertMany$;
    /** @type {?} */
    GridDbEffects.prototype.actions$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9yb290L2dyaWRzLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBT25ELHVCQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBRTFDLGVBQ1UsSUFBSSxDQUFDLFFBQVE7YUFDckIsTUFBTSxzR0FBaUU7YUFDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBQyxJQUFlLElBQUssT0FBQSxJQUFJLGdCQUFnQixDQUFDLENBQUUsSUFBSSxDQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDLENBQUM7UUFFbkYsbUJBQ2MsSUFBSSxDQUFDLFFBQVE7YUFDekIsTUFBTSxvREFBZ0M7YUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBQyxLQUFrQixJQUFLLE9BQUEsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDLENBQUM7S0FWckM7O2dCQUY5QyxVQUFVOzs7O2dCQVZGLE9BQU87OztRQWNkLE1BQU0sRUFBRTs7OztRQUtSLE1BQU0sRUFBRTs7O3dCQXBCVjs7U0FZYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFjdGlvbiB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVELCBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKChncmlkOiBHcmlkTW9kZWwpID0+IG5ldyBVcHNlcnRHcmlkQWN0aW9uKFsgZ3JpZCBdKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKGdyaWRzOiBHcmlkTW9kZWxbXSkgPT4gbmV3IFVwc2VydEdyaWRBY3Rpb24oZ3JpZHMpKSk7XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { GridService } from "../../grid.service";
import { UpsertGridSucceedAction, UpsertGridFailedAction } from "./upsert-grid.actions";
import { of } from "rxjs";
export class UpsertGridApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[UPSERT_GRID][API][UpsertGrid] start" /* START */), pluck("payload"), switchMap((payload) => this.service.upsert(payload)), map(res => new UpsertGridSucceedAction(res)), catchError(err => of(new UpsertGridFailedAction(err))));
    }
}
UpsertGridApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UpsertGridApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: GridService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], UpsertGridApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    UpsertGridApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    UpsertGridApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpsertGridApiEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LWdyaWQuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUdOLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzFCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBQ2hDLFlBQW9CLFFBQW9DLEVBQVUsT0FBb0I7UUFBbEUsYUFBUSxHQUFSLFFBQVEsQ0FBNEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBR3RGLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUIsTUFBTSxvREFBZ0MsRUFDdEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixTQUFTLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ3pELEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDNUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUN0RCxDQUFDO0lBVHVGLENBQUM7OztZQUYxRixVQUFVOzs7O1lBWkYsT0FBTztZQUdQLFdBQVc7O0FBY25CO0lBREMsTUFBTSxFQUFFOztvREFPUDs7O0lBUEYsc0NBT0U7Ozs7O0lBVFUsd0NBQTRDOzs7OztJQUFFLHVDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0VVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLFxyXG5cdFVwc2VydEdyaWRBY3Rpb25zLFxyXG5cdFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uLFxyXG5cdFVwc2VydEdyaWRGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPFVwc2VydEdyaWRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAoKHBheWxvYWQ6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRtYXAocmVzID0+IG5ldyBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdGNhdGNoRXJyb3IoZXJyID0+IG9mKG5ldyBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdCk7XHJcbn1cclxuIl19
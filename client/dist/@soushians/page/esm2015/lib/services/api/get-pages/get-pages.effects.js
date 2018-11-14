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
export class GetPagesApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GET_PAGES][API][GetPages] start" /* START */)
            .pipe(switchMap(() => this.service
            .getPages()
            .pipe(map((res) => new GetPagesSucceedAction(res)), catchError((err) => of(new GetPagesFailedAction(err))))));
    }
}
GetPagesApiEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GetPagesApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: PageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], GetPagesApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    GetPagesApiEffects.prototype.start$;
    /** @type {?} */
    GetPagesApiEffects.prototype.actions$;
    /** @type {?} */
    GetPagesApiEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2VzLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUdOLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsTUFBTSxxQkFBcUIsQ0FBQztBQUc3QixNQUFNOzs7OztJQUNMLFlBQW9CLFFBQWtDLEVBQVUsT0FBb0I7UUFBaEUsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO3NCQUczRSxJQUFJLENBQUMsUUFBUTthQUNwQixNQUFNLGdEQUE4QjthQUNwQyxJQUFJLENBQ0osU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUNkLElBQUksQ0FBQyxPQUFPO2FBQ1YsUUFBUSxFQUFFO2FBQ1YsSUFBSSxDQUNKLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUM1QyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDdEQsQ0FDRixDQUNEO0tBZHNGOzs7WUFGeEYsVUFBVTs7OztZQVpGLE9BQU87WUFJUCxXQUFXOzs7SUFZbEIsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdEdFVF9QQUdFU19BQ1RJT05fVFlQRVMsXHJcblx0R2V0UGFnZXNBY3Rpb25zLFxyXG5cdEdldFBhZ2VzU3VjY2VlZEFjdGlvbixcclxuXHRHZXRQYWdlc0ZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC1wYWdlcy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlc0FwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0UGFnZXNBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoKSA9PlxyXG5cdFx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdFx0LmdldFBhZ2VzKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldFBhZ2VzU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0UGFnZXNGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIl19
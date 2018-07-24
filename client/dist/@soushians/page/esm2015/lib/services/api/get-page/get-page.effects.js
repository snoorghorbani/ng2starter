/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { PageService } from "../../page.service";
import { GetPageSucceedAction, GetPageFailedAction } from "./get-page.actions";
export class GetPageApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[PAGE][API][GetPage] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service.get(payload)), map((res) => new GetPageSucceedAction(res)), catchError((err) => of(new GetPageFailedAction(err))));
    }
}
GetPageApiEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GetPageApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: PageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], GetPageApiEffects.prototype, "start$", void 0);
function GetPageApiEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    GetPageApiEffects.prototype.start$;
    /** @type {?} */
    GetPageApiEffects.prototype.actions$;
    /** @type {?} */
    GetPageApiEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2UuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUF5QyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RILE1BQU07Ozs7O0lBQ0wsWUFBb0IsUUFBaUMsRUFBVSxPQUFvQjtRQUEvRCxhQUFRLEdBQVIsUUFBUSxDQUF5QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7c0JBRzFFLElBQUksQ0FBQyxRQUFRO2FBQ3BCLE1BQU0sMENBQTZCO2FBQ25DLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDL0IsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNqRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDM0MsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ3JEO0tBVnFGOzs7WUFGdkYsVUFBVTs7OztZQVBGLE9BQU87WUFJUCxXQUFXOzs7SUFPbEIsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3BhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHRVRfUEFHRV9BQ1RJT05fVFlQRVMsIEdldFBhZ2VBY3Rpb25zLCBHZXRQYWdlU3VjY2VlZEFjdGlvbiwgR2V0UGFnZUZhaWxlZEFjdGlvbiB9IGZyb20gXCIuL2dldC1wYWdlLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFBhZ2VBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRQYWdlU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0UGFnZUZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIl19
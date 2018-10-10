/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { GridService } from "../../grid.service";
import { GetGridSucceedAction, GetGridFailedAction } from "./get-grid.actions";
export class GetGridApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GRID][API][GetGrid] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service.get(payload)), map((res) => new GetGridSucceedAction(res)), catchError((err) => of(new GetGridFailedAction(err))));
    }
}
GetGridApiEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GetGridApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: GridService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], GetGridApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    GetGridApiEffects.prototype.start$;
    /** @type {?} */
    GetGridApiEffects.prototype.actions$;
    /** @type {?} */
    GetGridApiEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWdyaWQuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUF5QyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3RILE1BQU07Ozs7O0lBQ0wsWUFBb0IsUUFBaUMsRUFBVSxPQUFvQjtRQUEvRCxhQUFRLEdBQVIsUUFBUSxDQUF5QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7c0JBRzFFLElBQUksQ0FBQyxRQUFRO2FBQ3BCLE1BQU0sMENBQTZCO2FBQ25DLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDL0IsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNqRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDM0MsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ3JEO0tBVnFGOzs7WUFGdkYsVUFBVTs7OztZQVBGLE9BQU87WUFJUCxXQUFXOzs7SUFPbEIsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRF9BQ1RJT05fVFlQRVMsIEdldEdyaWRBY3Rpb25zLCBHZXRHcmlkU3VjY2VlZEFjdGlvbiwgR2V0R3JpZEZhaWxlZEFjdGlvbiB9IGZyb20gXCIuL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldEdyaWRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldEdyaWRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRHcmlkU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0R3JpZEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIl19
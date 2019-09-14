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
import { GetPageSucceedAction, GetPageFailedAction } from "./get-page.actions";
export class GetPageApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[PAGE][API][GetPage] start" /* START */), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.service.get(payload))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => new GetPageSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new GetPageFailedAction(err)))));
    }
}
GetPageApiEffects.decorators = [
    { type: Injectable }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2UuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBeUMsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd0SCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUM3QixZQUFvQixRQUFpQyxFQUFVLE9BQW9CO1FBQS9ELGFBQVEsR0FBUixRQUFRLENBQXlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUduRixXQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzFCLE1BQU0sMENBQWtDLEVBQ3hDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDN0IsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDL0MsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUN6QyxVQUFVOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQ25ELENBQUM7SUFUb0YsQ0FBQzs7O1lBRnZGLFVBQVU7Ozs7WUFQRixPQUFPO1lBSVAsV0FBVzs7QUFRbkI7SUFEQyxNQUFNLEVBQUU7O2lEQU9QOzs7SUFQRixtQ0FPRTs7Ozs7SUFUVSxxQ0FBeUM7Ozs7O0lBQUUsb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdFVF9QQUdFX0FDVElPTl9UWVBFUywgR2V0UGFnZUFjdGlvbnMsIEdldFBhZ2VTdWNjZWVkQWN0aW9uLCBHZXRQYWdlRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4vZ2V0LXBhZ2UuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZUFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0UGFnZUFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8YW55PihHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQpLFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAocGF5bG9hZCA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdG1hcChyZXMgPT4gbmV3IEdldFBhZ2VTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0Y2F0Y2hFcnJvcihlcnIgPT4gb2YobmV3IEdldFBhZ2VGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0KTtcclxufVxyXG4iXX0=
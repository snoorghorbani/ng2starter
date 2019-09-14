/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { WidgetService } from "../../widget.service";
import { GetWidgetsSucceedAction, GetWidgetsFailedAction } from "./get-widgets.actions";
export class GetWidgetsApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[GET_WIDGETS][API][GetWidgets] start" /* START */), switchMap((/**
         * @return {?}
         */
        () => this.service
            .getWidgets()
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => new GetWidgetsSucceedAction(res))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new GetWidgetsFailedAction(err))))))));
    }
}
GetWidgetsApiEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GetWidgetsApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: WidgetService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], GetWidgetsApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    GetWidgetsApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    GetWidgetsApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetWidgetsApiEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXdpZGdldHMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUdOLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsTUFBTSx1QkFBdUIsQ0FBQztBQUcvQixNQUFNLE9BQU8sb0JBQW9COzs7OztJQUNoQyxZQUFvQixRQUFvQyxFQUFVLE9BQXNCO1FBQXBFLGFBQVEsR0FBUixRQUFRLENBQTRCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUd4RixXQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzFCLE1BQU0sb0RBQWdDLEVBQ3RDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUNkLElBQUksQ0FBQyxPQUFPO2FBQ1YsVUFBVSxFQUFFO2FBQ1osSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksdUJBQXVCLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFDNUMsVUFBVTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUN0RCxFQUNGLENBQ0QsQ0FBQztJQWJ5RixDQUFDOzs7WUFGNUYsVUFBVTs7OztZQVpGLE9BQU87WUFJUCxhQUFhOztBQWFyQjtJQURDLE1BQU0sRUFBRTs7b0RBV1A7OztJQVhGLHNDQVdFOzs7OztJQWJVLHdDQUE0Qzs7Ozs7SUFBRSx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLFxyXG5cdEdldFdpZGdldHNBY3Rpb25zLFxyXG5cdEdldFdpZGdldHNTdWNjZWVkQWN0aW9uLFxyXG5cdEdldFdpZGdldHNGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9nZXQtd2lkZ2V0cy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRzQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRXaWRnZXRzQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVEFSVCksXHJcblx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0dGhpcy5zZXJ2aWNlXHJcblx0XHRcdFx0LmdldFdpZGdldHMoKVxyXG5cdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0bWFwKHJlcyA9PiBuZXcgR2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRjYXRjaEVycm9yKGVyciA9PiBvZihuZXcgR2V0V2lkZ2V0c0ZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdFx0XHQpXHJcblx0XHQpXHJcblx0KTtcclxufVxyXG4iXX0=
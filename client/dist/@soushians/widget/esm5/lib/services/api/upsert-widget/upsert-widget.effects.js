/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { WidgetService } from "../../widget.service";
import { UpsertWidgetSucceedAction, UpsertWidgetFailedAction } from "./upsert-widget.actions";
var UpsertWidgetApiEffects = /** @class */ (function () {
    function UpsertWidgetApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[UPSERT_WIDGET][API][UpsertWidget] start" /* START */)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.upsert(payload); }), map(function (res) { return new UpsertWidgetSucceedAction(res); }), catchError(function (err) { return of(new UpsertWidgetFailedAction(err)); }));
    }
    UpsertWidgetApiEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UpsertWidgetApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: WidgetService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], UpsertWidgetApiEffects.prototype, "start$", void 0);
    return UpsertWidgetApiEffects;
}());
export { UpsertWidgetApiEffects };
function UpsertWidgetApiEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    UpsertWidgetApiEffects.prototype.start$;
    /** @type {?} */
    UpsertWidgetApiEffects.prototype.actions$;
    /** @type {?} */
    UpsertWidgetApiEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXdpZGdldC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBR04seUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4QixNQUFNLHlCQUF5QixDQUFDOztJQUloQyxnQ0FBb0IsUUFBc0MsRUFBVSxPQUFzQjtRQUExRixpQkFBOEY7UUFBMUUsYUFBUSxHQUFSLFFBQVEsQ0FBOEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO3NCQUdqRixJQUFJLENBQUMsUUFBUTthQUNwQixNQUFNLHdEQUFrQzthQUN4QyxJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDL0IsU0FBUyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQTVCLENBQTRCLENBQUMsRUFDcEQsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsSUFBSSx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxFQUNoRCxVQUFVLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxFQUFFLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQzFEO0tBVjRGOztnQkFGOUYsVUFBVTs7OztnQkFaRixPQUFPO2dCQUlQLGFBQWE7OztRQVlwQixNQUFNLEVBQUU7OztpQ0FsQlY7O1NBZWEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUyxcclxuXHRVcHNlcnRXaWRnZXRBY3Rpb25zLFxyXG5cdFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24sXHJcblx0VXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vdXBzZXJ0LXdpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPFVwc2VydFdpZGdldEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UudXBzZXJ0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiJdfQ==
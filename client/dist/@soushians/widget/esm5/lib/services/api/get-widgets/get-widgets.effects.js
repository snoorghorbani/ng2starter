/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { WidgetService } from "../../widget.service";
import { GetWidgetsSucceedAction, GetWidgetsFailedAction } from "./get-widgets.actions";
var GetWidgetsApiEffects = /** @class */ (function () {
    function GetWidgetsApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GET_WIDGETS][API][GetWidgets] start" /* START */)
            .pipe(switchMap(function () {
            return _this.service
                .getWidgets()
                .pipe(map(function (res) { return new GetWidgetsSucceedAction(res); }), catchError(function (err) { return of(new GetWidgetsFailedAction(err)); }));
        }));
    }
    GetWidgetsApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GetWidgetsApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: WidgetService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], GetWidgetsApiEffects.prototype, "start$", void 0);
    return GetWidgetsApiEffects;
}());
export { GetWidgetsApiEffects };
if (false) {
    /** @type {?} */
    GetWidgetsApiEffects.prototype.start$;
    /** @type {?} */
    GetWidgetsApiEffects.prototype.actions$;
    /** @type {?} */
    GetWidgetsApiEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXdpZGdldHMuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBR04sdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixNQUFNLHVCQUF1QixDQUFDOztJQUk5Qiw4QkFBb0IsUUFBb0MsRUFBVSxPQUFzQjtRQUF4RixpQkFBNEY7UUFBeEUsYUFBUSxHQUFSLFFBQVEsQ0FBNEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBRXhGLGNBQ1MsSUFBSSxDQUFDLFFBQVE7YUFDcEIsTUFBTSxvREFBZ0M7YUFDdEMsSUFBSSxDQUNKLFNBQVMsQ0FBQztZQUNULE9BQUEsS0FBSSxDQUFDLE9BQU87aUJBQ1YsVUFBVSxFQUFFO2lCQUNaLElBQUksQ0FDSixHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxJQUFJLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLEVBQzlDLFVBQVUsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FDeEQ7UUFMRixDQUtFLENBQ0YsQ0FDRCxDQUFDO0tBZHlGOztnQkFGNUYsVUFBVTs7OztnQkFaRixPQUFPO2dCQUlQLGFBQWE7OztRQVlwQixNQUFNLEVBQUU7OzsrQkFsQlY7O1NBZWEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMsXHJcblx0R2V0V2lkZ2V0c0FjdGlvbnMsXHJcblx0R2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0V2lkZ2V0c0ZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFdpZGdldHNBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRXaWRnZXRzKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldFdpZGdldHNTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRXaWRnZXRzRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiJdfQ==
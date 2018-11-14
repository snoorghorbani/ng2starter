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
import { DeleteWidgetSucceedAction, DeleteWidgetFailedAction } from "./delete-widget.actions";
export class DeleteWidgetApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[DELETE_WIDGET][API][DeleteWidget] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service
            .delete(payload)
            .pipe(map((res) => new DeleteWidgetSucceedAction(res)), catchError((err) => of(new DeleteWidgetFailedAction(err))))));
    }
}
DeleteWidgetApiEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DeleteWidgetApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: WidgetService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], DeleteWidgetApiEffects.prototype, "start$", void 0);
if (false) {
    /** @type {?} */
    DeleteWidgetApiEffects.prototype.start$;
    /** @type {?} */
    DeleteWidgetApiEffects.prototype.actions$;
    /** @type {?} */
    DeleteWidgetApiEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpZGdldC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXQvZGVsZXRlLXdpZGdldC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBR04seUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4QixNQUFNLHlCQUF5QixDQUFDO0FBSWpDLE1BQU07Ozs7O0lBQ0wsWUFBb0IsUUFBc0MsRUFBVSxPQUFzQjtRQUF0RSxhQUFRLEdBQVIsUUFBUSxDQUE4QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7c0JBR2pGLElBQUksQ0FBQyxRQUFRO2FBQ3BCLE1BQU0sd0RBQWtDO2FBQ3hDLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDL0IsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDckIsSUFBSSxDQUFDLE9BQU87YUFDVixNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2YsSUFBSSxDQUNKLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNoRCxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDMUQsQ0FDRixDQUNEO0tBZjZGOzs7WUFGL0YsVUFBVTs7OztZQWJGLE9BQU87WUFJUCxhQUFhOzs7SUFhcEIsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUyxcclxuXHREZWxldGVXaWRnZXRBY3Rpb25zLFxyXG5cdERlbGV0ZVdpZGdldFN1Y2NlZWRBY3Rpb24sXHJcblx0RGVsZXRlV2lkZ2V0RmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZGVsZXRlLXdpZGdldC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlbGV0ZVdpZGdldEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8RGVsZXRlV2lkZ2V0QWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSkgeyB9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PlxyXG5cdFx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdFx0LmRlbGV0ZShwYXlsb2FkKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzKSA9PiBuZXcgRGVsZXRlV2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgRGVsZXRlV2lkZ2V0RmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiJdfQ==
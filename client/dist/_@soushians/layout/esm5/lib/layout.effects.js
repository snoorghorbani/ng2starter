/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";
import { Store } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, withLatestFrom } from "rxjs/operators";
import { DoSignoutAction } from "@soushians/authentication";
import { LayoutActionTypes, InvisibleToolbarAction, VisibleToolbarAction, ExitFullscreenAction, FullscreenAction } from "./actions";
import { getFullscreenMode } from "./reducers";
var LayoutEffects = /** @class */ (function () {
    function LayoutEffects(actions$, router, store) {
        this.actions$ = actions$;
        this.router = router;
        this.store = store;
        this.DoSignout$ = this.actions$.pipe(ofType(LayoutActionTypes.DO_SIGNOUT), map(function () { return new DoSignoutAction(); }));
        this.fullscreen$ = this.actions$.pipe(ofType(LayoutActionTypes.FULLSCREEN), map(function () { return new InvisibleToolbarAction(); }));
        this.exit_fullscreen$ = this.actions$.pipe(ofType(LayoutActionTypes.EXIT_FULLSCREEN), map(function () { return new VisibleToolbarAction(); }));
        this.fullscren_toolbar$ = this.actions$.pipe(ofType(LayoutActionTypes.TOGGLE_FULLSCREEN), withLatestFrom(this.store.select(getFullscreenMode)), map(function (_a) {
            var _b = tslib_1.__read(_a, 2), action = _b[0], toolbarMode = _b[1];
            if (toolbarMode)
                return new ExitFullscreenAction();
            else
                return new FullscreenAction();
        }));
    }
    LayoutEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LayoutEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: Store }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], LayoutEffects.prototype, "DoSignout$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], LayoutEffects.prototype, "fullscreen$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], LayoutEffects.prototype, "exit_fullscreen$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], LayoutEffects.prototype, "fullscren_toolbar$", void 0);
    return LayoutEffects;
}());
export { LayoutEffects };
if (false) {
    /** @type {?} */
    LayoutEffects.prototype.DoSignout$;
    /** @type {?} */
    LayoutEffects.prototype.fullscreen$;
    /** @type {?} */
    LayoutEffects.prototype.exit_fullscreen$;
    /** @type {?} */
    LayoutEffects.prototype.fullscren_toolbar$;
    /**
     * @type {?}
     * @private
     */
    LayoutEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    LayoutEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LayoutEffects.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8seUJBQXlCLENBQUM7QUFDakMsT0FBTywyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQWEsR0FBRyxFQUFtQixjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUNOLGlCQUFpQixFQUNqQixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFnQixpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUU3RDtJQUVDLHVCQUFvQixRQUFpQixFQUFVLE1BQWMsRUFBVSxLQUEwQjtRQUE3RSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBRXZGLGVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLGVBQWUsRUFBRSxFQUFyQixDQUFxQixDQUFDLENBQUMsQ0FBQztRQUdsSCxnQkFBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksc0JBQXNCLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDLENBQUM7UUFHaEgscUJBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsRUFDekMsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLG9CQUFvQixFQUFFLEVBQTFCLENBQTBCLENBQUMsQ0FDckMsQ0FBQztRQUdGLHVCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsRUFDM0MsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFDcEQsR0FBRyxDQUFDLFVBQUMsRUFBdUI7Z0JBQXZCLDBCQUF1QixFQUFyQixjQUFNLEVBQUUsbUJBQVc7WUFDekIsSUFBSSxXQUFXO2dCQUFFLE9BQU8sSUFBSSxvQkFBb0IsRUFBRSxDQUFDOztnQkFDOUMsT0FBTyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQXJCa0csQ0FBQzs7Z0JBRnJHLFVBQVU7Ozs7Z0JBZkYsT0FBTztnQkFSUCxNQUFNO2dCQU9FLEtBQUs7O0lBb0JYO1FBQVQsTUFBTSxFQUFFOztxREFBeUc7SUFHbEg7UUFEQyxNQUFNLEVBQUU7O3NEQUN1RztJQUdoSDtRQURDLE1BQU0sRUFBRTs7MkRBSVA7SUFHRjtRQURDLE1BQU0sRUFBRTs7NkRBUVA7SUFDSCxvQkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLGFBQWE7OztJQUd6QixtQ0FBa0g7O0lBRWxILG9DQUNnSDs7SUFFaEgseUNBSUU7O0lBRUYsMkNBUUU7Ozs7O0lBckJVLGlDQUF5Qjs7Ozs7SUFBRSwrQkFBc0I7Ozs7O0lBQUUsOEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29ic2VydmFibGUvZW1wdHlcIjtcclxuaW1wb3J0IHsgQWN0aW9uLCBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiB9IGZyb20gXCJAbmdyeC9yb3V0ZXItc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IERvU2lnbm91dEFjdGlvbiB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdExheW91dEFjdGlvblR5cGVzLFxyXG5cdEludmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0VmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0RXhpdEZ1bGxzY3JlZW5BY3Rpb24sXHJcblx0RnVsbHNjcmVlbkFjdGlvblxyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRGdWxsc2NyZWVuTW9kZSB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRARWZmZWN0KCkgRG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShvZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRE9fU0lHTk9VVCksIG1hcCgoKSA9PiBuZXcgRG9TaWdub3V0QWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZnVsbHNjcmVlbiQgPSB0aGlzLmFjdGlvbnMkLnBpcGUob2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU4pLCBtYXAoKCkgPT4gbmV3IEludmlzaWJsZVRvb2xiYXJBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRleGl0X2Z1bGxzY3JlZW4kID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkVYSVRfRlVMTFNDUkVFTiksXHJcblx0XHRtYXAoKCkgPT4gbmV3IFZpc2libGVUb29sYmFyQWN0aW9uKCkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZnVsbHNjcmVuX3Rvb2xiYXIkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKExheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOKSxcclxuXHRcdHdpdGhMYXRlc3RGcm9tKHRoaXMuc3RvcmUuc2VsZWN0KGdldEZ1bGxzY3JlZW5Nb2RlKSksXHJcblx0XHRtYXAoKFsgYWN0aW9uLCB0b29sYmFyTW9kZSBdKSA9PiB7XHJcblx0XHRcdGlmICh0b29sYmFyTW9kZSkgcmV0dXJuIG5ldyBFeGl0RnVsbHNjcmVlbkFjdGlvbigpO1xyXG5cdFx0XHRlbHNlIHJldHVybiBuZXcgRnVsbHNjcmVlbkFjdGlvbigpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
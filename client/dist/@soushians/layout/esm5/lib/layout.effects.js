/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
import { Actions, Effect } from "@ngrx/effects";
import { map, withLatestFrom } from "rxjs/operators";
import { DoSignoutAction } from "@soushians/authentication";
import { LayoutActionTypes, InvisibleToolbarAction, VisibleToolbarAction, ExitFullscreenAction, FullscreenAction } from "./actions";
import { getFullscreenMode } from "./reducers";
var LayoutEffects = /** @class */ (function () {
    function LayoutEffects(actions$, router, store) {
        this.actions$ = actions$;
        this.router = router;
        this.store = store;
        this.DoSignout$ = this.actions$.ofType(LayoutActionTypes.DO_SIGNOUT).pipe(map(function () { return new DoSignoutAction(); }));
        this.fullscreen$ = this.actions$.ofType(LayoutActionTypes.FULLSCREEN).pipe(map(function () { return new InvisibleToolbarAction(); }));
        this.exit_fullscreen$ = this.actions$
            .ofType(LayoutActionTypes.EXIT_FULLSCREEN)
            .pipe(map(function () { return new VisibleToolbarAction(); }));
        this.fullscren_toolbar$ = this.actions$.ofType(LayoutActionTypes.TOGGLE_FULLSCREEN).pipe(withLatestFrom(this.store.select(getFullscreenMode)), map(function (_a) {
            var _b = tslib_1.__read(_a, 2), action = _b[0], toolbarMode = _b[1];
            if (toolbarMode)
                return new ExitFullscreenAction();
            else
                return new FullscreenAction();
        }));
    }
    LayoutEffects.decorators = [
        { type: Injectable },
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
function LayoutEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    LayoutEffects.prototype.DoSignout$;
    /** @type {?} */
    LayoutEffects.prototype.fullscreen$;
    /** @type {?} */
    LayoutEffects.prototype.exit_fullscreen$;
    /** @type {?} */
    LayoutEffects.prototype.fullscren_toolbar$;
    /** @type {?} */
    LayoutEffects.prototype.actions$;
    /** @type {?} */
    LayoutEffects.prototype.router;
    /** @type {?} */
    LayoutEffects.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8seUJBQXlCLENBQUM7QUFDakMsT0FBTywyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBYSxHQUFHLEVBQW1CLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQ04saUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQWdCLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDOztJQUk1RCx1QkFBb0IsUUFBaUIsRUFBVSxNQUFjLEVBQVUsS0FBMEI7UUFBN0UsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFxQjswQkFFMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxlQUFlLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDOzJCQUdsRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLHNCQUFzQixFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQztnQ0FHM0YsSUFBSSxDQUFDLFFBQVE7YUFDOUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQzthQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLG9CQUFvQixFQUFFLEVBQTFCLENBQTBCLENBQUMsQ0FBQztrQ0FHeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQ2xGLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQ3BELEdBQUcsQ0FBQyxVQUFDLEVBQXVCO2dCQUF2QiwwQkFBdUIsRUFBckIsY0FBTSxFQUFFLG1CQUFXO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1lBQ25ELElBQUk7Z0JBQUMsTUFBTSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUNuQyxDQUFDLENBQ0Y7S0FuQm9HOztnQkFGckcsVUFBVTs7OztnQkFmRixPQUFPO2dCQVJQLE1BQU07Z0JBT0UsS0FBSzs7O1FBb0JwQixNQUFNLEVBQUU7Ozs7UUFFUixNQUFNLEVBQUU7Ozs7UUFHUixNQUFNLEVBQUU7Ozs7UUFLUixNQUFNLEVBQUU7Ozt3QkF0Q1Y7O1NBeUJhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiB9IGZyb20gXCJAbmdyeC9yb3V0ZXItc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IERvU2lnbm91dEFjdGlvbiB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdExheW91dEFjdGlvblR5cGVzLFxyXG5cdEludmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0VmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0RXhpdEZ1bGxzY3JlZW5BY3Rpb24sXHJcblx0RnVsbHNjcmVlbkFjdGlvblxyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRGdWxsc2NyZWVuTW9kZSB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRARWZmZWN0KCkgRG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUobWFwKCgpID0+IG5ldyBEb1NpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRmdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU4pLnBpcGUobWFwKCgpID0+IG5ldyBJbnZpc2libGVUb29sYmFyQWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZXhpdF9mdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBWaXNpYmxlVG9vbGJhckFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGZ1bGxzY3Jlbl90b29sYmFyJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOKS5waXBlKFxyXG5cdFx0d2l0aExhdGVzdEZyb20odGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnVsbHNjcmVlbk1vZGUpKSxcclxuXHRcdG1hcCgoWyBhY3Rpb24sIHRvb2xiYXJNb2RlIF0pID0+IHtcclxuXHRcdFx0aWYgKHRvb2xiYXJNb2RlKSByZXR1cm4gbmV3IEV4aXRGdWxsc2NyZWVuQWN0aW9uKCk7XHJcblx0XHRcdGVsc2UgcmV0dXJuIG5ldyBGdWxsc2NyZWVuQWN0aW9uKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIl19
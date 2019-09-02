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
export class LayoutEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} store
     */
    constructor(actions$, router, store) {
        this.actions$ = actions$;
        this.router = router;
        this.store = store;
        this.DoSignout$ = this.actions$.pipe(ofType(LayoutActionTypes.DO_SIGNOUT), map(() => new DoSignoutAction()));
        this.fullscreen$ = this.actions$.pipe(ofType(LayoutActionTypes.FULLSCREEN), map(() => new InvisibleToolbarAction()));
        this.exit_fullscreen$ = this.actions$.pipe(ofType(LayoutActionTypes.EXIT_FULLSCREEN), map(() => new VisibleToolbarAction()));
        this.fullscren_toolbar$ = this.actions$.pipe(ofType(LayoutActionTypes.TOGGLE_FULLSCREEN), withLatestFrom(this.store.select(getFullscreenMode)), map(([action, toolbarMode]) => {
            if (toolbarMode)
                return new ExitFullscreenAction();
            else
                return new FullscreenAction();
        }));
    }
}
LayoutEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LayoutEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: Store }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8seUJBQXlCLENBQUM7QUFDakMsT0FBTywyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQWEsR0FBRyxFQUFtQixjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUNOLGlCQUFpQixFQUNqQixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFnQixpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUc3RCxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBQ3pCLFlBQW9CLFFBQWlCLEVBQVUsTUFBYyxFQUFVLEtBQTBCO1FBQTdFLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFFdkYsZUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHbEgsZ0JBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHaEgscUJBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsRUFDekMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksb0JBQW9CLEVBQUUsQ0FBQyxDQUNyQyxDQUFDO1FBR0YsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUMzQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUNwRCxHQUFHLENBQUMsQ0FBQyxDQUFFLE1BQU0sRUFBRSxXQUFXLENBQUUsRUFBRSxFQUFFO1lBQy9CLElBQUksV0FBVztnQkFBRSxPQUFPLElBQUksb0JBQW9CLEVBQUUsQ0FBQzs7Z0JBQzlDLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFyQmtHLENBQUM7OztZQUZyRyxVQUFVOzs7O1lBZkYsT0FBTztZQVJQLE1BQU07WUFPRSxLQUFLOztBQW9CWDtJQUFULE1BQU0sRUFBRTs7aURBQXlHO0FBR2xIO0lBREMsTUFBTSxFQUFFOztrREFDdUc7QUFHaEg7SUFEQyxNQUFNLEVBQUU7O3VEQUlQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7O3lEQVFQOzs7SUFuQkYsbUNBQWtIOztJQUVsSCxvQ0FDZ0g7O0lBRWhILHlDQUlFOztJQUVGLDJDQVFFOzs7OztJQXJCVSxpQ0FBeUI7Ozs7O0lBQUUsK0JBQXNCOzs7OztJQUFFLDhCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5XCI7XHJcbmltcG9ydCB7IEFjdGlvbiwgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJBY3Rpb24gfSBmcm9tIFwiQG5ncngvcm91dGVyLXN0b3JlXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEb1NpZ25vdXRBY3Rpb24gfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRMYXlvdXRBY3Rpb25UeXBlcyxcclxuXHRJbnZpc2libGVUb29sYmFyQWN0aW9uLFxyXG5cdFZpc2libGVUb29sYmFyQWN0aW9uLFxyXG5cdEV4aXRGdWxsc2NyZWVuQWN0aW9uLFxyXG5cdEZ1bGxzY3JlZW5BY3Rpb25cclxufSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0RnVsbHNjcmVlbk1vZGUgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge31cclxuXHJcblx0QEVmZmVjdCgpIERvU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUob2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQpLCBtYXAoKCkgPT4gbmV3IERvU2lnbm91dEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGZ1bGxzY3JlZW4kID0gdGhpcy5hY3Rpb25zJC5waXBlKG9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5GVUxMU0NSRUVOKSwgbWFwKCgpID0+IG5ldyBJbnZpc2libGVUb29sYmFyQWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZXhpdF9mdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5FWElUX0ZVTExTQ1JFRU4pLFxyXG5cdFx0bWFwKCgpID0+IG5ldyBWaXNpYmxlVG9vbGJhckFjdGlvbigpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGZ1bGxzY3Jlbl90b29sYmFyJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5UT0dHTEVfRlVMTFNDUkVFTiksXHJcblx0XHR3aXRoTGF0ZXN0RnJvbSh0aGlzLnN0b3JlLnNlbGVjdChnZXRGdWxsc2NyZWVuTW9kZSkpLFxyXG5cdFx0bWFwKChbIGFjdGlvbiwgdG9vbGJhck1vZGUgXSkgPT4ge1xyXG5cdFx0XHRpZiAodG9vbGJhck1vZGUpIHJldHVybiBuZXcgRXhpdEZ1bGxzY3JlZW5BY3Rpb24oKTtcclxuXHRcdFx0ZWxzZSByZXR1cm4gbmV3IEZ1bGxzY3JlZW5BY3Rpb24oKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iXX0=
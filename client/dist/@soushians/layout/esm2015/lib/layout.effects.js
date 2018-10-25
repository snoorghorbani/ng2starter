/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.DoSignout$ = this.actions$.ofType(LayoutActionTypes.DO_SIGNOUT).pipe(map(() => new DoSignoutAction()));
        this.fullscreen$ = this.actions$.ofType(LayoutActionTypes.FULLSCREEN).pipe(map(() => new InvisibleToolbarAction()));
        this.exit_fullscreen$ = this.actions$
            .ofType(LayoutActionTypes.EXIT_FULLSCREEN)
            .pipe(map(() => new VisibleToolbarAction()));
        this.fullscren_toolbar$ = this.actions$.ofType(LayoutActionTypes.TOGGLE_FULLSCREEN).pipe(withLatestFrom(this.store.select(getFullscreenMode)), map(([action, toolbarMode]) => {
            if (toolbarMode)
                return new ExitFullscreenAction();
            else
                return new FullscreenAction();
        }));
    }
}
LayoutEffects.decorators = [
    { type: Injectable },
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
    /** @type {?} */
    LayoutEffects.prototype.actions$;
    /** @type {?} */
    LayoutEffects.prototype.router;
    /** @type {?} */
    LayoutEffects.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8seUJBQXlCLENBQUM7QUFDakMsT0FBTywyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBYSxHQUFHLEVBQW1CLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQ04saUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQWdCLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRzdELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFDekIsWUFBb0IsUUFBaUIsRUFBVSxNQUFjLEVBQVUsS0FBMEI7UUFBN0UsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUVqRyxrQkFBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVqSCxtQkFDYyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFL0csd0JBQ21CLElBQUksQ0FBQyxRQUFRO2FBQzlCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUM7YUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTlDLDBCQUNxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FDbEYsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFDcEQsR0FBRyxDQUFDLENBQUMsQ0FBRSxNQUFNLEVBQUUsV0FBVyxDQUFFLEVBQUUsRUFBRTtZQUMvQixJQUFJLFdBQVc7Z0JBQUUsT0FBTyxJQUFJLG9CQUFvQixFQUFFLENBQUM7O2dCQUM5QyxPQUFPLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUNuQyxDQUFDLENBQ0YsQ0FBQztLQW5CbUc7OztZQUZyRyxVQUFVOzs7O1lBZkYsT0FBTztZQVJQLE1BQU07WUFPRSxLQUFLOzs7SUFvQnBCLE1BQU0sRUFBRTs7OztJQUVSLE1BQU0sRUFBRTs7OztJQUdSLE1BQU0sRUFBRTs7OztJQUtSLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5XCI7XHJcbmltcG9ydCB7IEFjdGlvbiwgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRG9TaWdub3V0QWN0aW9uIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7XHJcblx0TGF5b3V0QWN0aW9uVHlwZXMsXHJcblx0SW52aXNpYmxlVG9vbGJhckFjdGlvbixcclxuXHRWaXNpYmxlVG9vbGJhckFjdGlvbixcclxuXHRFeGl0RnVsbHNjcmVlbkFjdGlvbixcclxuXHRGdWxsc2NyZWVuQWN0aW9uXHJcbn0gZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldEZ1bGxzY3JlZW5Nb2RlIH0gZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExheW91dEVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKSBEb1NpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShtYXAoKCkgPT4gbmV3IERvU2lnbm91dEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGZ1bGxzY3JlZW4kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRlVMTFNDUkVFTikucGlwZShtYXAoKCkgPT4gbmV3IEludmlzaWJsZVRvb2xiYXJBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRleGl0X2Z1bGxzY3JlZW4kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5FWElUX0ZVTExTQ1JFRU4pXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFZpc2libGVUb29sYmFyQWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZnVsbHNjcmVuX3Rvb2xiYXIkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU4pLnBpcGUoXHJcblx0XHR3aXRoTGF0ZXN0RnJvbSh0aGlzLnN0b3JlLnNlbGVjdChnZXRGdWxsc2NyZWVuTW9kZSkpLFxyXG5cdFx0bWFwKChbIGFjdGlvbiwgdG9vbGJhck1vZGUgXSkgPT4ge1xyXG5cdFx0XHRpZiAodG9vbGJhck1vZGUpIHJldHVybiBuZXcgRXhpdEZ1bGxzY3JlZW5BY3Rpb24oKTtcclxuXHRcdFx0ZWxzZSByZXR1cm4gbmV3IEZ1bGxzY3JlZW5BY3Rpb24oKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iXX0=
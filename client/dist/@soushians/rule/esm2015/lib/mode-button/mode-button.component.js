/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";
import { ShowAnchorsAction, HideAnchorsAction } from "../rule-anchor/rule-anchor.actions";
export class GwtModeButtonComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.anchorsMode = false;
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
    /**
     * @return {?}
     */
    toggleAnchors() {
        if (this.anchorsMode === false) {
            this.store.dispatch(new ShowAnchorsAction());
            this.anchorsMode = true;
        }
        else {
            this.store.dispatch(new HideAnchorsAction());
            this.anchorsMode = false;
        }
    }
}
GwtModeButtonComponent.decorators = [
    { type: Component, args: [{
                selector: "gwt-mode-button",
                template: `    <button *ngIf="!(havePermission$ | async)" class="btn" mat-mini-fab type="button" routerLink="auth/frontend/signin" fxFlex="nogrow" fxLayoutAlign="center center">
      <mat-icon>fingerprint</mat-icon>
    </button>

    <button *ngIf="havePermission$ | async" class="btn" mat-mini-fab type="button" (click)="toggleAnchors()" fxFlex="nogrow" fxLayoutAlign="center center">
      <mat-icon>settings</mat-icon>
    </button>`,
                styles: [`.btn{position:fixed;bottom:25px;left:25px;z-index:3}`]
            },] },
];
/** @nocollapse */
GwtModeButtonComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    GwtModeButtonComponent.prototype.anchorsMode;
    /** @type {?} */
    GwtModeButtonComponent.prototype.havePermission$;
    /** @type {?} */
    GwtModeButtonComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL21vZGUtYnV0dG9uL21vZGUtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQWExRixNQUFNOzs7O0lBR0wsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDekU7Ozs7SUFFRCxhQUFhO1FBQ1osSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDekI7S0FDRDs7O1lBM0JELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7OztjQU1HO2dCQUNiLE1BQU0sRUFBRSxDQUFDLHNEQUFzRCxDQUFDO2FBQ2hFOzs7O1lBakJRLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcblxuaW1wb3J0IHsgU2hvd0FuY2hvcnNBY3Rpb24sIEhpZGVBbmNob3JzQWN0aW9uIH0gZnJvbSBcIi4uL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmFjdGlvbnNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImd3dC1tb2RlLWJ1dHRvblwiLFxuXHR0ZW1wbGF0ZTogYCAgICA8YnV0dG9uICpuZ0lmPVwiIShoYXZlUGVybWlzc2lvbiQgfCBhc3luYylcIiBjbGFzcz1cImJ0blwiIG1hdC1taW5pLWZhYiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cImF1dGgvZnJvbnRlbmQvc2lnbmluXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICAgIDxtYXQtaWNvbj5maW5nZXJwcmludDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIiBjbGFzcz1cImJ0blwiIG1hdC1taW5pLWZhYiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZUFuY2hvcnMoKVwiIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gICAgICA8bWF0LWljb24+c2V0dGluZ3M8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPmAsXG5cdHN0eWxlczogW2AuYnRue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToyNXB4O2xlZnQ6MjVweDt6LWluZGV4OjN9YF1cbn0pXG5leHBvcnQgY2xhc3MgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCB7XG5cdGFuY2hvcnNNb2RlOiBib29sZWFuO1xuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcblx0XHR0aGlzLmFuY2hvcnNNb2RlID0gZmFsc2U7XG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUpO1xuXHR9XG5cblx0dG9nZ2xlQW5jaG9ycygpIHtcblx0XHRpZiAodGhpcy5hbmNob3JzTW9kZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNob3dBbmNob3JzQWN0aW9uKCkpO1xuXHRcdFx0dGhpcy5hbmNob3JzTW9kZSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhpZGVBbmNob3JzQWN0aW9uKCkpO1xuXHRcdFx0dGhpcy5hbmNob3JzTW9kZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuIl19
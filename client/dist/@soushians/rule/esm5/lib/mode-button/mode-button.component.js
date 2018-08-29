/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";
import { ShowAnchorsAction, HideAnchorsAction } from "../rule-anchor/rule-anchor.actions";
var GwtModeButtonComponent = /** @class */ (function () {
    function GwtModeButtonComponent(store) {
        this.store = store;
        this.anchorsMode = false;
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
    /**
     * @return {?}
     */
    GwtModeButtonComponent.prototype.toggleAnchors = /**
     * @return {?}
     */
    function () {
        if (this.anchorsMode === false) {
            this.store.dispatch(new ShowAnchorsAction());
            this.anchorsMode = true;
        }
        else {
            this.store.dispatch(new HideAnchorsAction());
            this.anchorsMode = false;
        }
    };
    GwtModeButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: "gwt-mode-button",
                    template: "    <button *ngIf=\"!(havePermission$ | async)\" class=\"btn\" mat-mini-fab type=\"button\" routerLink=\"auth/frontend/signin\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>fingerprint</mat-icon>\n    </button>\n\n    <button *ngIf=\"havePermission$ | async\" class=\"btn\" mat-mini-fab type=\"button\" (click)=\"toggleAnchors()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>settings</mat-icon>\n    </button>",
                    styles: [".btn{position:fixed;bottom:25px;left:25px;z-index:3}"]
                },] },
    ];
    /** @nocollapse */
    GwtModeButtonComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return GwtModeButtonComponent;
}());
export { GwtModeButtonComponent };
function GwtModeButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    GwtModeButtonComponent.prototype.anchorsMode;
    /** @type {?} */
    GwtModeButtonComponent.prototype.havePermission$;
    /** @type {?} */
    GwtModeButtonComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL21vZGUtYnV0dG9uL21vZGUtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7SUFnQnpGLGdDQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUN6RTs7OztJQUVELDhDQUFhOzs7SUFBYjtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDekI7S0FDRDs7Z0JBM0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsMGNBTUc7b0JBQ2IsTUFBTSxFQUFFLENBQUMsc0RBQXNELENBQUM7aUJBQ2hFOzs7O2dCQWpCUSxLQUFLOztpQ0FEZDs7U0FtQmEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFNob3dBbmNob3JzQWN0aW9uLCBIaWRlQW5jaG9yc0FjdGlvbiB9IGZyb20gXCIuLi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJnd3QtbW9kZS1idXR0b25cIixcclxuXHR0ZW1wbGF0ZTogYCAgICA8YnV0dG9uICpuZ0lmPVwiIShoYXZlUGVybWlzc2lvbiQgfCBhc3luYylcIiBjbGFzcz1cImJ0blwiIG1hdC1taW5pLWZhYiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cImF1dGgvZnJvbnRlbmQvc2lnbmluXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxidXR0b24gKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiIGNsYXNzPVwiYnRuXCIgbWF0LW1pbmktZmFiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlQW5jaG9ycygpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPmAsXHJcblx0c3R5bGVzOiBbYC5idG57cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjI1cHg7bGVmdDoyNXB4O3otaW5kZXg6M31gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudCB7XHJcblx0YW5jaG9yc01vZGU6IGJvb2xlYW47XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuYW5jaG9yc01vZGUgPSBmYWxzZTtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUFuY2hvcnMoKSB7XHJcblx0XHRpZiAodGhpcy5hbmNob3JzTW9kZSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2hvd0FuY2hvcnNBY3Rpb24oKSk7XHJcblx0XHRcdHRoaXMuYW5jaG9yc01vZGUgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGlkZUFuY2hvcnNBY3Rpb24oKSk7XHJcblx0XHRcdHRoaXMuYW5jaG9yc01vZGUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    GwtModeButtonComponent.prototype.anchorsMode;
    /** @type {?} */
    GwtModeButtonComponent.prototype.havePermission$;
    /** @type {?} */
    GwtModeButtonComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL21vZGUtYnV0dG9uL21vZGUtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7SUFnQnpGLGdDQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUN6RTs7OztJQUVELDhDQUFhOzs7SUFBYjtRQUNDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0tBQ0Q7O2dCQTNCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDBjQU1HO29CQUNiLE1BQU0sRUFBRSxDQUFDLHNEQUFzRCxDQUFDO2lCQUNoRTs7OztnQkFqQlEsS0FBSzs7aUNBRGQ7O1NBbUJhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xuXG5pbXBvcnQgeyBTaG93QW5jaG9yc0FjdGlvbiwgSGlkZUFuY2hvcnNBY3Rpb24gfSBmcm9tIFwiLi4vcnVsZS1hbmNob3IvcnVsZS1hbmNob3IuYWN0aW9uc1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiZ3d0LW1vZGUtYnV0dG9uXCIsXG5cdHRlbXBsYXRlOiBgICAgIDxidXR0b24gKm5nSWY9XCIhKGhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jKVwiIGNsYXNzPVwiYnRuXCIgbWF0LW1pbmktZmFiIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiYXV0aC9mcm9udGVuZC9zaWduaW5cIiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxuICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiIGNsYXNzPVwiYnRuXCIgbWF0LW1pbmktZmFiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlQW5jaG9ycygpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICAgIDxtYXQtaWNvbj5zZXR0aW5nczwvbWF0LWljb24+XG4gICAgPC9idXR0b24+YCxcblx0c3R5bGVzOiBbYC5idG57cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjI1cHg7bGVmdDoyNXB4O3otaW5kZXg6M31gXVxufSlcbmV4cG9ydCBjbGFzcyBHd3RNb2RlQnV0dG9uQ29tcG9uZW50IHtcblx0YW5jaG9yc01vZGU6IGJvb2xlYW47XG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xuXHRcdHRoaXMuYW5jaG9yc01vZGUgPSBmYWxzZTtcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XG5cdH1cblxuXHR0b2dnbGVBbmNob3JzKCkge1xuXHRcdGlmICh0aGlzLmFuY2hvcnNNb2RlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2hvd0FuY2hvcnNBY3Rpb24oKSk7XG5cdFx0XHR0aGlzLmFuY2hvcnNNb2RlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGlkZUFuY2hvcnNBY3Rpb24oKSk7XG5cdFx0XHR0aGlzLmFuY2hvcnNNb2RlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XG4iXX0=
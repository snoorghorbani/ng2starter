/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Signin } from "../../actions";
import { AuthenticationConfigurationService } from "../../services/authentication-configuration.service";
export class SigninContainerComponent {
    /**
     * @param {?} configurationService
     * @param {?} store
     */
    constructor(configurationService, store) {
        this.configurationService = configurationService;
        this.store = store;
        this.formId$ = this.configurationService.config$.map(config => config.forms.signIn);
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    signIn(formValue) {
        this.store.dispatch(new Signin(formValue));
    }
}
SigninContainerComponent.decorators = [
    { type: Component, args: [{
                template: `
        <auth-signin 
                [formId]='(formId$ | async)'
                (signedin)="signIn($event)"
        ></auth-signin>
  `
            },] },
];
/** @nocollapse */
SigninContainerComponent.ctorParameters = () => [
    { type: AuthenticationConfigurationService },
    { type: Store }
];
function SigninContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SigninContainerComponent.prototype.formId$;
    /** @type {?} */
    SigninContainerComponent.prototype.configurationService;
    /** @type {?} */
    SigninContainerComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBV3pHLE1BQU07Ozs7O0lBRUwsWUFBb0Isb0JBQXdELEVBQVUsS0FBMEI7UUFBNUYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQztRQUFVLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQy9HLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3BGOzs7OztJQUVELE1BQU0sQ0FBQyxTQUFjO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FDM0M7OztZQWhCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7OztHQUtSO2FBQ0Y7Ozs7WUFWUSxrQ0FBa0M7WUFKbEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGF1dGgtc2lnbmluIFxyXG4gICAgICAgICAgICAgICAgW2Zvcm1JZF09Jyhmb3JtSWQkIHwgYXN5bmMpJ1xyXG4gICAgICAgICAgICAgICAgKHNpZ25lZGluKT1cInNpZ25JbigkZXZlbnQpXCJcclxuICAgICAgICA+PC9hdXRoLXNpZ25pbj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5Db250YWluZXJDb21wb25lbnQge1xyXG5cdGZvcm1JZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLmZvcm1JZCQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGNvbmZpZyA9PiBjb25maWcuZm9ybXMuc2lnbkluKTtcclxuXHR9XHJcblxyXG5cdHNpZ25Jbihmb3JtVmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbmluKGZvcm1WYWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iXX0=
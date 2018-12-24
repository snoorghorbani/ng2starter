/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { Signup } from "../../actions";
import { AuthenticationConfigurationService } from "../../services/authentication-configuration.service";
import { MatSnackBar } from "@angular/material";
import { take, switchMap } from "rxjs/operators";
export class SignupContainerComponent {
    /**
     * @param {?} configurationService
     * @param {?} store
     * @param {?} snackBar
     */
    constructor(configurationService, store, snackBar) {
        this.configurationService = configurationService;
        this.store = store;
        this.snackBar = snackBar;
        this.signedUp$ = new EventEmitter();
        this.formId$ = this.configurationService.config$.map(config => config.forms.signUp);
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    signup(formValue) {
        this.configurationService.config$
            .pipe(take(1), switchMap(config => config.signupValidator(formValue)))
            .subscribe(validation => {
            if (validation) {
                this.store.dispatch(new Signup(formValue));
                this.signedUp$.emit(true);
            }
            else {
                this.snackBar.open("رمز عبور یکسان نیست", null, {
                    duration: 2222
                });
            }
        });
    }
}
SignupContainerComponent.decorators = [
    { type: Component, args: [{
                template: `
        <auth-signup 
                [formId]='(formId$ | async)'
                (signedup)="signup($event)"
        ></auth-signup>
  `
            },] },
];
/** @nocollapse */
SignupContainerComponent.ctorParameters = () => [
    { type: AuthenticationConfigurationService },
    { type: Store },
    { type: MatSnackBar }
];
SignupContainerComponent.propDecorators = {
    signedUp$: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SignupContainerComponent.prototype.formId$;
    /** @type {?} */
    SignupContainerComponent.prototype.signedUp$;
    /** @type {?} */
    SignupContainerComponent.prototype.configurationService;
    /** @type {?} */
    SignupContainerComponent.prototype.store;
    /** @type {?} */
    SignupContainerComponent.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvc2lnbnVwLWNvbnRhaW5lci9zaWdudXAtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkMsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFFekcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFVOUQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBR3BDLFlBQ1Msc0JBQ0EsT0FDQTtRQUZBLHlCQUFvQixHQUFwQixvQkFBb0I7UUFDcEIsVUFBSyxHQUFMLEtBQUs7UUFDTCxhQUFRLEdBQVIsUUFBUTtRQUpqQixpQkFBc0IsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQU1qRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwRjs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBYztRQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTzthQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNyRSxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxVQUFVLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFO29CQUMvQyxRQUFRLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQUM7YUFDSDtTQUNELENBQUMsQ0FBQztLQUNKOzs7WUFoQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7R0FLUjthQUNGOzs7O1lBWlEsa0NBQWtDO1lBSmxDLEtBQUs7WUFNTCxXQUFXOzs7d0JBYWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTaWdudXAgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDYXB0Y2hhTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB0YWtlLCBzd2l0Y2hNYXAsIGZpbHRlciwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhdXRoLXNpZ251cCBcclxuICAgICAgICAgICAgICAgIFtmb3JtSWRdPScoZm9ybUlkJCB8IGFzeW5jKSdcclxuICAgICAgICAgICAgICAgIChzaWduZWR1cCk9XCJzaWdudXAoJGV2ZW50KVwiXHJcbiAgICAgICAgPjwvYXV0aC1zaWdudXA+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRmb3JtSWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QE91dHB1dCgpIHNpZ25lZFVwJCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXJcclxuXHQpIHtcclxuXHRcdHRoaXMuZm9ybUlkJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5tYXAoY29uZmlnID0+IGNvbmZpZy5mb3Jtcy5zaWduVXApO1xyXG5cdH1cclxuXHJcblx0c2lnbnVwKGZvcm1WYWx1ZTogYW55KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LnBpcGUodGFrZSgxKSwgc3dpdGNoTWFwKGNvbmZpZyA9PiBjb25maWcuc2lnbnVwVmFsaWRhdG9yKGZvcm1WYWx1ZSkpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKHZhbGlkYXRpb24gPT4ge1xyXG5cdFx0XHRcdGlmICh2YWxpZGF0aW9uKSB7XHJcblx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaWdudXAoZm9ybVZhbHVlKSk7XHJcblx0XHRcdFx0XHR0aGlzLnNpZ25lZFVwJC5lbWl0KHRydWUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4oXCLYsdmF2LIg2LnYqNmI2LEg24zaqdiz2KfZhiDZhtuM2LPYqlwiLCBudWxsLCB7XHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMjIyXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
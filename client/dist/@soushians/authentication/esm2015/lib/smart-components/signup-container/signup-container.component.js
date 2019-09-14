/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.formId$ = this.configurationService.config$.map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.forms.signUp));
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    signup(formValue) {
        this.configurationService.config$
            .pipe(take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => config.signupValidator(formValue))))
            .subscribe((/**
         * @param {?} validation
         * @return {?}
         */
        validation => {
            if (validation) {
                this.store.dispatch(new Signup(formValue));
                this.signedUp$.emit(true);
            }
            else {
                this.snackBar.open("رمز عبور یکسان نیست", null, {
                    duration: 2222
                });
            }
        }));
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
            }] }
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
    /**
     * @type {?}
     * @private
     */
    SignupContainerComponent.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    SignupContainerComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    SignupContainerComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvc2lnbnVwLWNvbnRhaW5lci9zaWdudXAtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkMsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFFekcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFVOUQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBR3BDLFlBQ1Msb0JBQXdELEVBQ3hELEtBQTBCLEVBQzFCLFFBQXFCO1FBRnJCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBb0M7UUFDeEQsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUpwQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQU1qRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQztJQUNyRixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxTQUFjO1FBQ3BCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO2FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDO2FBQ3JFLFNBQVM7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRTtZQUN2QixJQUFJLFVBQVUsRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUU7b0JBQy9DLFFBQVEsRUFBRSxJQUFJO2lCQUNkLENBQUMsQ0FBQzthQUNIO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFoQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7R0FLUjthQUNGOzs7O1lBWlEsa0NBQWtDO1lBSmxDLEtBQUs7WUFNTCxXQUFXOzs7d0JBYWxCLE1BQU07Ozs7SUFEUCwyQ0FBNEI7O0lBQzVCLDZDQUFrRDs7Ozs7SUFFakQsd0RBQWdFOzs7OztJQUNoRSx5Q0FBa0M7Ozs7O0lBQ2xDLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFNpZ251cCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IENhcHRjaGFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHRha2UsIHN3aXRjaE1hcCwgZmlsdGVyLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGF1dGgtc2lnbnVwIFxyXG4gICAgICAgICAgICAgICAgW2Zvcm1JZF09Jyhmb3JtSWQkIHwgYXN5bmMpJ1xyXG4gICAgICAgICAgICAgICAgKHNpZ25lZHVwKT1cInNpZ251cCgkZXZlbnQpXCJcclxuICAgICAgICA+PC9hdXRoLXNpZ251cD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb250YWluZXJDb21wb25lbnQge1xyXG5cdGZvcm1JZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRAT3V0cHV0KCkgc2lnbmVkVXAkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhclxyXG5cdCkge1xyXG5cdFx0dGhpcy5mb3JtSWQkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLm1hcChjb25maWcgPT4gY29uZmlnLmZvcm1zLnNpZ25VcCk7XHJcblx0fVxyXG5cclxuXHRzaWdudXAoZm9ybVZhbHVlOiBhbnkpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQucGlwZSh0YWtlKDEpLCBzd2l0Y2hNYXAoY29uZmlnID0+IGNvbmZpZy5zaWdudXBWYWxpZGF0b3IoZm9ybVZhbHVlKSkpXHJcblx0XHRcdC5zdWJzY3JpYmUodmFsaWRhdGlvbiA9PiB7XHJcblx0XHRcdFx0aWYgKHZhbGlkYXRpb24pIHtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNpZ251cChmb3JtVmFsdWUpKTtcclxuXHRcdFx0XHRcdHRoaXMuc2lnbmVkVXAkLmVtaXQodHJ1ZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc25hY2tCYXIub3BlbihcItix2YXYsiDYudio2YjYsSDbjNqp2LPYp9mGINmG24zYs9iqXCIsIG51bGwsIHtcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIyMjJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
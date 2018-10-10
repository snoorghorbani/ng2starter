/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { FrontendAuthenticationConfigurationService } from "../../services/frontend-authentication-configuration.service";
import { Signin } from "../../actions/signin.actions";
var SigninContainerComponent = /** @class */ (function () {
    function SigninContainerComponent(configurationService, store) {
        this.configurationService = configurationService;
        this.store = store;
        this.signedIn$ = new EventEmitter();
        this.formId$ = this.configurationService.config$.map(function (config) { return config.forms.signIn; });
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    SigninContainerComponent.prototype.signIn = /**
     * @param {?} formValue
     * @return {?}
     */
    function (formValue) {
        this.store.dispatch(new Signin(formValue));
        this.signedIn$.emit(true);
    };
    SigninContainerComponent.decorators = [
        { type: Component, args: [{
                    template: "\n        <auth-signin \n                [formId]='(formId$ | async)'\n                (signedin)=\"signIn($event)\"\n        ></auth-signin>\n  "
                },] },
    ];
    /** @nocollapse */
    SigninContainerComponent.ctorParameters = function () { return [
        { type: FrontendAuthenticationConfigurationService },
        { type: Store }
    ]; };
    SigninContainerComponent.propDecorators = {
        signedIn$: [{ type: Output }]
    };
    return SigninContainerComponent;
}());
export { SigninContainerComponent };
if (false) {
    /** @type {?} */
    SigninContainerComponent.prototype.formId$;
    /** @type {?} */
    SigninContainerComponent.prototype.signedIn$;
    /** @type {?} */
    SigninContainerComponent.prototype.configurationService;
    /** @type {?} */
    SigninContainerComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzFILE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7SUFjckQsa0NBQ1Msc0JBQ0E7UUFEQSx5QkFBb0IsR0FBcEIsb0JBQW9CO1FBQ3BCLFVBQUssR0FBTCxLQUFLO3lCQUhRLElBQUksWUFBWSxFQUFXO1FBS2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0tBQ3BGOzs7OztJQUVELHlDQUFNOzs7O0lBQU4sVUFBTyxTQUFjO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7O2dCQXJCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1KQUtSO2lCQUNGOzs7O2dCQVhRLDBDQUEwQztnQkFGMUMsS0FBSzs7OzRCQWdCWixNQUFNOzttQ0FsQlI7O1NBZ0JhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2lnbmluIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhdXRoLXNpZ25pbiBcclxuICAgICAgICAgICAgICAgIFtmb3JtSWRdPScoZm9ybUlkJCB8IGFzeW5jKSdcclxuICAgICAgICAgICAgICAgIChzaWduZWRpbik9XCJzaWduSW4oJGV2ZW50KVwiXHJcbiAgICAgICAgPjwvYXV0aC1zaWduaW4+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRmb3JtSWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QE91dHB1dCgpIHNpZ25lZEluJCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT5cclxuXHQpIHtcclxuXHRcdHRoaXMuZm9ybUlkJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5tYXAoY29uZmlnID0+IGNvbmZpZy5mb3Jtcy5zaWduSW4pO1xyXG5cdH1cclxuXHJcblx0c2lnbkluKGZvcm1WYWx1ZTogYW55KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaWduaW4oZm9ybVZhbHVlKSk7XHJcblx0XHR0aGlzLnNpZ25lZEluJC5lbWl0KHRydWUpO1xyXG5cdH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { filter, map, take, switchMap } from "rxjs/operators";
import { FormConfigurationService } from "./form-configuration.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./form-configuration.service";
var FormCaptchaService = /** @class */ (function () {
    function FormCaptchaService(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    /**
     * @return {?}
     */
    FormCaptchaService.prototype.getCaptcha = /**
     * @return {?}
     */
    function () {
        var _this = this;
        debugger;
        return this.configurationService.config$.pipe(filter(function (captcha) { return captcha.endpoints.captchaUrl != ""; }), take(1), switchMap(function (captcha) {
            return _this.http.get(captcha.env.server + captcha.endpoints.captchaUrl);
        }), map(function (response) { return response.Result; }));
    };
    /**
     * @return {?}
     */
    FormCaptchaService.prototype.sendCaptcha = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.getList != ""; }), switchMap(function (config) { return _this.http.get(config.env.server + config.endpoints.getList); }), map(function (response) { return response.Result; }));
    };
    FormCaptchaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    FormCaptchaService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: FormConfigurationService }
    ]; };
    /** @nocollapse */ FormCaptchaService.ngInjectableDef = i0.defineInjectable({ factory: function FormCaptchaService_Factory() { return new FormCaptchaService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.FormConfigurationService)); }, token: FormCaptchaService, providedIn: "root" });
    return FormCaptchaService;
}());
export { FormCaptchaService };
function FormCaptchaService_tsickle_Closure_declarations() {
    /** @type {?} */
    FormCaptchaService.prototype.http;
    /** @type {?} */
    FormCaptchaService.prototype.store;
    /** @type {?} */
    FormCaptchaService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jYXB0Y2hhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm9ybS1jYXB0Y2hhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7SUFTdkUsNEJBQ1MsTUFDQSxPQUNBO1FBRkEsU0FBSSxHQUFKLElBQUk7UUFDSixVQUFLLEdBQUwsS0FBSztRQUNMLHlCQUFvQixHQUFwQixvQkFBb0I7S0FDeEI7Ozs7SUFFTCx1Q0FBVTs7O0lBQVY7UUFBQSxpQkFVQztRQVRBLFFBQVEsQ0FBQztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFsQyxDQUFrQyxDQUFDLEVBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2pCLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFBaEUsQ0FBZ0UsQ0FDaEUsRUFDRCxHQUFHLENBQUMsVUFBQyxRQUFhLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxFQUFmLENBQWUsQ0FBQyxDQUN2QyxDQUFDO0tBQ0Y7Ozs7SUFDRCx3Q0FBVzs7O0lBQVg7UUFBQSxpQkFNQztRQUxBLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxFQUE5QixDQUE4QixDQUFDLEVBQ2xELFNBQVMsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQTNELENBQTJELENBQUMsRUFDbEYsR0FBRyxDQUFDLFVBQUMsUUFBbUMsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQWYsQ0FBZSxDQUFDLENBQzdELENBQUM7S0FDRjs7Z0JBM0JELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBaEJRLFVBQVU7Z0JBRVYsS0FBSztnQkFPTCx3QkFBd0I7Ozs2QkFWakM7O1NBa0JhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCwgQWRkRm9ybUFwaU1vZGVsLCBFZGl0Rm9ybUFwaU1vZGVsLCBGb3JtTGlzdEFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9mb3JtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVwc2VydENhcHRjaGFBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvY2FwdGNoYS5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ2FwdGNoYVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEZvcm1Db25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkgeyB9XHJcblxyXG5cdGdldENhcHRjaGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNhcHRjaGEpID0+IGNhcHRjaGEuZW5kcG9pbnRzLmNhcHRjaGFVcmwgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcCgoY2FwdGNoYSkgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KGNhcHRjaGEuZW52LnNlcnZlciArIGNhcHRjaGEuZW5kcG9pbnRzLmNhcHRjaGFVcmwpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuUmVzdWx0KSxcclxuXHRcdCk7XHJcblx0fVxyXG5cdHNlbmRDYXB0Y2hhKCk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0TGlzdCAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVudi5zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldExpc3QpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogRm9ybUxpc3RBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19
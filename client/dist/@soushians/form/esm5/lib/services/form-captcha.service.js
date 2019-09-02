/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                },] }
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormCaptchaService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    FormCaptchaService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    FormCaptchaService.prototype.configurationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jYXB0Y2hhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm9ybS1jYXB0Y2hhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQUt4RTtJQUlDLDRCQUNTLElBQWdCLEVBQ2hCLEtBQWdDLEVBQ2hDLG9CQUE4QztRQUY5QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMEI7SUFDbkQsQ0FBQzs7OztJQUVMLHVDQUFVOzs7SUFBVjtRQUFBLGlCQVVDO1FBVEEsUUFBUSxDQUFDO1FBQ1QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFsQyxDQUFrQyxDQUFDLEVBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2pCLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFBaEUsQ0FBZ0UsQ0FDaEUsRUFDRCxHQUFHLENBQUMsVUFBQyxRQUFhLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxFQUFmLENBQWUsQ0FBQyxDQUN2QyxDQUFDO0lBQ0gsQ0FBQzs7OztJQUNELHdDQUFXOzs7SUFBWDtRQUFBLGlCQU1DO1FBTEEsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxFQUE5QixDQUE4QixDQUFDLEVBQ2xELFNBQVMsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQTNELENBQTJELENBQUMsRUFDbEYsR0FBRyxDQUFDLFVBQUMsUUFBbUMsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQWYsQ0FBZSxDQUFDLENBQzdELENBQUM7SUFDSCxDQUFDOztnQkEzQkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFoQlEsVUFBVTtnQkFFVixLQUFLO2dCQU9MLHdCQUF3Qjs7OzZCQVZqQztDQTJDQyxBQTVCRCxJQTRCQztTQXpCWSxrQkFBa0I7Ozs7OztJQUU3QixrQ0FBd0I7Ozs7O0lBQ3hCLG1DQUF3Qzs7Ozs7SUFDeEMsa0RBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsLCBBZGRGb3JtQXBpTW9kZWwsIEVkaXRGb3JtQXBpTW9kZWwsIEZvcm1MaXN0QXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2Zvcm0tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q2FwdGNoYUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jYXB0Y2hhLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1DYXB0Y2hhU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogRm9ybUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7IH1cclxuXHJcblx0Z2V0Q2FwdGNoYSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY2FwdGNoYSkgPT4gY2FwdGNoYS5lbmRwb2ludHMuY2FwdGNoYVVybCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjYXB0Y2hhKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXQoY2FwdGNoYS5lbnYuc2VydmVyICsgY2FwdGNoYS5lbmRwb2ludHMuY2FwdGNoYVVybClcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5SZXN1bHQpLFxyXG5cdFx0KTtcclxuXHR9XHJcblx0c2VuZENhcHRjaGEoKTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXRMaXN0ICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LnNlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0TGlzdCkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBGb3JtTGlzdEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXX0=
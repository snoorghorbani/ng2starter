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
export class FormCaptchaService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    /**
     * @return {?}
     */
    getCaptcha() {
        debugger;
        return this.configurationService.config$.pipe(filter((captcha) => captcha.endpoints.captchaUrl != ""), take(1), switchMap((captcha) => this.http.get(captcha.env.server + captcha.endpoints.captchaUrl)), map((response) => response.Result));
    }
    /**
     * @return {?}
     */
    sendCaptcha() {
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.getList != ""), switchMap((config) => this.http.get(config.env.server + config.endpoints.getList)), map((response) => response.Result));
    }
}
FormCaptchaService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
FormCaptchaService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: FormConfigurationService }
];
/** @nocollapse */ FormCaptchaService.ngInjectableDef = i0.defineInjectable({ factory: function FormCaptchaService_Factory() { return new FormCaptchaService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.FormConfigurationService)); }, token: FormCaptchaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jYXB0Y2hhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm9ybS1jYXB0Y2hhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQVF4RSxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFDOUIsWUFDUyxJQUFnQixFQUNoQixLQUFnQyxFQUNoQyxvQkFBOEM7UUFGOUMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUNoQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTBCO0lBQ25ELENBQUM7Ozs7SUFFTCxVQUFVO1FBQ1QsUUFBUSxDQUFDO1FBQ1QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQ2hFLEVBQ0QsR0FBRyxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQ3ZDLENBQUM7SUFDSCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEVBQ2xELFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNsRixHQUFHLENBQUMsQ0FBQyxRQUFtQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQzdELENBQUM7SUFDSCxDQUFDOzs7WUEzQkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBaEJRLFVBQVU7WUFFVixLQUFLO1lBT0wsd0JBQXdCOzs7Ozs7OztJQVUvQixrQ0FBd0I7Ozs7O0lBQ3hCLG1DQUF3Qzs7Ozs7SUFDeEMsa0RBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsLCBBZGRGb3JtQXBpTW9kZWwsIEVkaXRGb3JtQXBpTW9kZWwsIEZvcm1MaXN0QXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2Zvcm0tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q2FwdGNoYUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jYXB0Y2hhLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1DYXB0Y2hhU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogRm9ybUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7IH1cclxuXHJcblx0Z2V0Q2FwdGNoYSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY2FwdGNoYSkgPT4gY2FwdGNoYS5lbmRwb2ludHMuY2FwdGNoYVVybCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjYXB0Y2hhKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXQoY2FwdGNoYS5lbnYuc2VydmVyICsgY2FwdGNoYS5lbmRwb2ludHMuY2FwdGNoYVVybClcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5SZXN1bHQpLFxyXG5cdFx0KTtcclxuXHR9XHJcblx0c2VuZENhcHRjaGEoKTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXRMaXN0ICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LnNlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0TGlzdCkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBGb3JtTGlzdEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXX0=
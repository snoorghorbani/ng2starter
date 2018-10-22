/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormCaptchaService } from "../../../services/form-captcha.service";
import { CaptchaModel } from "../../../models/captcha.model";
import { FormConfigurationService } from "../../../services/form-configuration.service";
import { map } from "rxjs/operators";
var FormCaptchaComponent = /** @class */ (function () {
    function FormCaptchaComponent(service, store, configurationService) {
        // this.captcha = new CaptchaModel({
        // 	captchaImg: "http://172.22.34.28:8001/api/authentication/captcha"
        // });
        this.service = service;
        this.store = store;
        this.configurationService = configurationService;
        this._captcha_generate();
    }
    /**
     * @return {?}
     */
    FormCaptchaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        debugger;
    };
    /**
     * @return {?}
     */
    FormCaptchaComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.captcha.captchaImg = this._captcha_generate() + ("?" + Math.random());
    };
    /**
     * @return {?}
     */
    FormCaptchaComponent.prototype._captcha_generate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.configurationService.config$.pipe(map(function (config) { return config.env.server + config.endpoints.captchaUrl; })).subscribe(function (captcha) {
            _this.captcha = new CaptchaModel({
                captchaImg: captcha
            });
        });
    };
    FormCaptchaComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-form-captcha",
                    template: "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n  <img [src]=\"captcha.captchaImg\" />\n\n  <button mat-icon-button color=\"primary\" (click)=\"refresh()\">\n    <mat-icon>refresh</mat-icon>\n  </button>\n\n  <div [formGroup]=\"group\">\n    <mat-form-field fxFlex>\n      <input matInput [id]=\"config.name\" [placeholder]=\"config.title\" [formControlName]=\"config.name\" />\n    </mat-form-field>\n  </div>\n</div>",
                    styles: ["img{border:1px solid #e4e4e4}"]
                },] },
    ];
    /** @nocollapse */
    FormCaptchaComponent.ctorParameters = function () { return [
        { type: FormCaptchaService },
        { type: Store },
        { type: FormConfigurationService }
    ]; };
    return FormCaptchaComponent;
}());
export { FormCaptchaComponent };
if (false) {
    /** @type {?} */
    FormCaptchaComponent.prototype.config;
    /** @type {?} */
    FormCaptchaComponent.prototype.group;
    /** @type {?} */
    FormCaptchaComponent.prototype.captcha;
    /** @type {?} */
    FormCaptchaComponent.prototype.captchaSrc;
    /** @type {?} */
    FormCaptchaComponent.prototype.service;
    /** @type {?} */
    FormCaptchaComponent.prototype.store;
    /** @type {?} */
    FormCaptchaComponent.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jYXB0Y2hhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2Zvcm0tY29udHJvbHMvZm9ybS1jYXB0Y2hhL2Zvcm0tY2FwdGNoYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUEwQnBDLDhCQUNTLFNBQ0EsT0FDQTs7OztRQUZBLFlBQU8sR0FBUCxPQUFPO1FBQ1AsVUFBSyxHQUFMLEtBQUs7UUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9CO1FBTTVCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBQ0QsdUNBQVE7OztJQUFSO1FBQ0MsUUFBUSxDQUFDO0tBQ1Q7Ozs7SUFDRCxzQ0FBTzs7O0lBQVA7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBRyxNQUFJLElBQUksQ0FBQyxNQUFNLEVBQUksQ0FBQSxDQUFDO0tBQ3pFOzs7O0lBQ0QsZ0RBQWlCOzs7SUFBakI7UUFBQSxpQkFPQztRQU5BLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNoRixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDO2dCQUMvQixVQUFVLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjs7Z0JBL0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ2JBWUo7b0JBQ04sTUFBTSxFQUFFLENBQUMsK0JBQStCLENBQUM7aUJBQ3pDOzs7O2dCQXZCUSxrQkFBa0I7Z0JBSGxCLEtBQUs7Z0JBTUwsd0JBQXdCOzsrQkFSakM7O1NBNkJhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXksIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybUNhcHRjaGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2Zvcm0tY2FwdGNoYS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENhcHRjaGFNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvY2FwdGNoYS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vbWFpbi1jb250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9ybUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2Zvcm0tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsaWItZm9ybS1jYXB0Y2hhXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+XHJcbiAgPGltZyBbc3JjXT1cImNhcHRjaGEuY2FwdGNoYUltZ1wiIC8+XHJcblxyXG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJyZWZyZXNoKClcIj5cclxuICAgIDxtYXQtaWNvbj5yZWZyZXNoPC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPGRpdiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgaW1ne2JvcmRlcjoxcHggc29saWQgI2U0ZTRlNH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNhcHRjaGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNhcHRjaGE6IENhcHRjaGFNb2RlbDtcclxuXHRjYXB0Y2hhU3JjOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IEZvcm1DYXB0Y2hhU2VydmljZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdC8vIHRoaXMuY2FwdGNoYSA9IG5ldyBDYXB0Y2hhTW9kZWwoe1xyXG5cdFx0Ly8gXHRjYXB0Y2hhSW1nOiBcImh0dHA6Ly8xNzIuMjIuMzQuMjg6ODAwMS9hcGkvYXV0aGVudGljYXRpb24vY2FwdGNoYVwiXHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHR0aGlzLl9jYXB0Y2hhX2dlbmVyYXRlKCk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0fVxyXG5cdHJlZnJlc2goKSB7XHJcblx0XHR0aGlzLmNhcHRjaGEuY2FwdGNoYUltZyA9IHRoaXMuX2NhcHRjaGFfZ2VuZXJhdGUoKSArIGA/JHtNYXRoLnJhbmRvbSgpfWA7XHJcblx0fVxyXG5cdF9jYXB0Y2hhX2dlbmVyYXRlKCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLmVudi5zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmNhcHRjaGFVcmwpKS5zdWJzY3JpYmUoY2FwdGNoYSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jYXB0Y2hhID0gbmV3IENhcHRjaGFNb2RlbCh7XHJcblx0XHRcdFx0XHRjYXB0Y2hhSW1nOiBjYXB0Y2hhXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormCaptchaService } from "../../../services/form-captcha.service";
import { CaptchaModel } from "../../../models/captcha.model";
import { FormConfigurationService } from "../../../services/form-configuration.service";
import { map } from "rxjs/operators";
export class FormCaptchaComponent {
    /**
     * @param {?} service
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(service, store, configurationService) {
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
    ngOnInit() {
        debugger;
    }
    /**
     * @return {?}
     */
    refresh() {
        this.captcha.captchaImg = this._captcha_generate() + `?${Math.random()}`;
    }
    /**
     * @return {?}
     */
    _captcha_generate() {
        this.configurationService.config$.pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.env.server + config.endpoints.captchaUrl))).subscribe((/**
         * @param {?} captcha
         * @return {?}
         */
        captcha => {
            this.captcha = new CaptchaModel({
                captchaImg: captcha
            });
        }));
    }
}
FormCaptchaComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-form-captcha",
                template: "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n  <img [src]=\"captcha.captchaImg\" />\r\n\r\n  <button mat-icon-button color=\"primary\" (click)=\"refresh()\">\r\n    <mat-icon>refresh</mat-icon>\r\n  </button>\r\n\r\n  <div [formGroup]=\"group\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput [id]=\"config.name\" [placeholder]=\"config.title\" [formControlName]=\"config.name\" />\r\n    </mat-form-field>\r\n  </div>\r\n</div>",
                styles: ["img{border:1px solid #e4e4e4}"]
            }] }
];
/** @nocollapse */
FormCaptchaComponent.ctorParameters = () => [
    { type: FormCaptchaService },
    { type: Store },
    { type: FormConfigurationService }
];
if (false) {
    /** @type {?} */
    FormCaptchaComponent.prototype.config;
    /** @type {?} */
    FormCaptchaComponent.prototype.group;
    /** @type {?} */
    FormCaptchaComponent.prototype.captcha;
    /** @type {?} */
    FormCaptchaComponent.prototype.captchaSrc;
    /**
     * @type {?}
     * @private
     */
    FormCaptchaComponent.prototype.service;
    /**
     * @type {?}
     * @private
     */
    FormCaptchaComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    FormCaptchaComponent.prototype.configurationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jYXB0Y2hhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2Zvcm0tY29udHJvbHMvZm9ybS1jYXB0Y2hhL2Zvcm0tY2FwdGNoYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVFyQyxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFNaEMsWUFDUyxPQUEyQixFQUMzQixLQUFnQyxFQUNoQyxvQkFBOEM7UUFFdEQsb0NBQW9DO1FBQ3BDLHFFQUFxRTtRQUNyRSxNQUFNO1FBTkUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFDaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUEwQjtRQU10RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsUUFBUTtRQUNQLFFBQVEsQ0FBQztJQUNWLENBQUM7Ozs7SUFDRCxPQUFPO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztJQUMxRSxDQUFDOzs7O0lBQ0QsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNyQyxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUM7Z0JBQy9CLFVBQVUsRUFBRSxPQUFPO2FBQ25CLENBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbkNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixrZEFBNEM7O2FBRTVDOzs7O1lBWFEsa0JBQWtCO1lBSGxCLEtBQUs7WUFNTCx3QkFBd0I7Ozs7SUFVaEMsc0NBQW9COztJQUNwQixxQ0FBaUI7O0lBRWpCLHVDQUFzQjs7SUFDdEIsMENBQW1COzs7OztJQUVsQix1Q0FBbUM7Ozs7O0lBQ25DLHFDQUF3Qzs7Ozs7SUFDeEMsb0RBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRmllbGQsIEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ2FwdGNoYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZm9ybS1jYXB0Y2hhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9jYXB0Y2hhLm1vZGVsXCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tYWluLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZm9ybS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxpYi1mb3JtLWNhcHRjaGFcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2Zvcm0tY2FwdGNoYS5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9mb3JtLWNhcHRjaGEuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1DYXB0Y2hhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjYXB0Y2hhOiBDYXB0Y2hhTW9kZWw7XHJcblx0Y2FwdGNoYVNyYzogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBGb3JtQ2FwdGNoYVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogRm9ybUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHQvLyB0aGlzLmNhcHRjaGEgPSBuZXcgQ2FwdGNoYU1vZGVsKHtcclxuXHRcdC8vIFx0Y2FwdGNoYUltZzogXCJodHRwOi8vMTcyLjIyLjM0LjI4OjgwMDEvYXBpL2F1dGhlbnRpY2F0aW9uL2NhcHRjaGFcIlxyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0dGhpcy5fY2FwdGNoYV9nZW5lcmF0ZSgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdH1cclxuXHRyZWZyZXNoKCkge1xyXG5cdFx0dGhpcy5jYXB0Y2hhLmNhcHRjaGFJbWcgPSB0aGlzLl9jYXB0Y2hhX2dlbmVyYXRlKCkgKyBgPyR7TWF0aC5yYW5kb20oKX1gO1xyXG5cdH1cclxuXHRfY2FwdGNoYV9nZW5lcmF0ZSgpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5lbnYuc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5jYXB0Y2hhVXJsKSkuc3Vic2NyaWJlKGNhcHRjaGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY2FwdGNoYSA9IG5ldyBDYXB0Y2hhTW9kZWwoe1xyXG5cdFx0XHRcdFx0Y2FwdGNoYUltZzogY2FwdGNoYVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==
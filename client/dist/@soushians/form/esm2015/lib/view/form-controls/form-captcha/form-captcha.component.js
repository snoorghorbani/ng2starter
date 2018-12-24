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
        this.configurationService.config$.pipe(map(config => config.env.server + config.endpoints.captchaUrl)).subscribe(captcha => {
            this.captcha = new CaptchaModel({
                captchaImg: captcha
            });
        });
    }
}
FormCaptchaComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-form-captcha",
                template: `<div fxLayout="row wrap" fxLayoutAlign="start center">
  <img [src]="captcha.captchaImg" />

  <button mat-icon-button color="primary" (click)="refresh()">
    <mat-icon>refresh</mat-icon>
  </button>

  <div [formGroup]="group">
    <mat-form-field fxFlex>
      <input matInput [id]="config.name" [placeholder]="config.title" [formControlName]="config.name" />
    </mat-form-field>
  </div>
</div>`,
                styles: [`img{border:1px solid #e4e4e4}`]
            },] },
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
    /** @type {?} */
    FormCaptchaComponent.prototype.service;
    /** @type {?} */
    FormCaptchaComponent.prototype.store;
    /** @type {?} */
    FormCaptchaComponent.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jYXB0Y2hhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2Zvcm0tY29udHJvbHMvZm9ybS1jYXB0Y2hhL2Zvcm0tY2FwdGNoYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9CckMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBTWhDLFlBQ1MsU0FDQSxPQUNBOzs7O1FBRkEsWUFBTyxHQUFQLE9BQU87UUFDUCxVQUFLLEdBQUwsS0FBSztRQUNMLHlCQUFvQixHQUFwQixvQkFBb0I7UUFNNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDekI7Ozs7SUFDRCxRQUFRO1FBQ1AsUUFBUSxDQUFDO0tBQ1Q7Ozs7SUFDRCxPQUFPO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztLQUN6RTs7OztJQUNELGlCQUFpQjtRQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDckMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDO2dCQUMvQixVQUFVLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjs7O1lBL0NELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztPQVlKO2dCQUNOLE1BQU0sRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQ3pDOzs7O1lBdkJRLGtCQUFrQjtZQUhsQixLQUFLO1lBTUwsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRmllbGQsIEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ2FwdGNoYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZm9ybS1jYXB0Y2hhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9jYXB0Y2hhLm1vZGVsXCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tYWluLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZm9ybS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxpYi1mb3JtLWNhcHRjaGFcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cclxuICA8aW1nIFtzcmNdPVwiY2FwdGNoYS5jYXB0Y2hhSW1nXCIgLz5cclxuXHJcbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInJlZnJlc2goKVwiPlxyXG4gICAgPG1hdC1pY29uPnJlZnJlc2g8L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG5cclxuICA8ZGl2IFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwiY29uZmlnLm5hbWVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2BpbWd7Ym9yZGVyOjFweCBzb2xpZCAjZTRlNGU0fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ2FwdGNoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y2FwdGNoYTogQ2FwdGNoYU1vZGVsO1xyXG5cdGNhcHRjaGFTcmM6IHN0cmluZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2VydmljZTogRm9ybUNhcHRjaGFTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEZvcm1Db25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0Ly8gdGhpcy5jYXB0Y2hhID0gbmV3IENhcHRjaGFNb2RlbCh7XHJcblx0XHQvLyBcdGNhcHRjaGFJbWc6IFwiaHR0cDovLzE3Mi4yMi4zNC4yODo4MDAxL2FwaS9hdXRoZW50aWNhdGlvbi9jYXB0Y2hhXCJcclxuXHRcdC8vIH0pO1xyXG5cclxuXHRcdHRoaXMuX2NhcHRjaGFfZ2VuZXJhdGUoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHR9XHJcblx0cmVmcmVzaCgpIHtcclxuXHRcdHRoaXMuY2FwdGNoYS5jYXB0Y2hhSW1nID0gdGhpcy5fY2FwdGNoYV9nZW5lcmF0ZSgpICsgYD8ke01hdGgucmFuZG9tKCl9YDtcclxuXHR9XHJcblx0X2NhcHRjaGFfZ2VuZXJhdGUoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0bWFwKGNvbmZpZyA9PiBjb25maWcuZW52LnNlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuY2FwdGNoYVVybCkpLnN1YnNjcmliZShjYXB0Y2hhID0+IHtcclxuXHRcdFx0XHR0aGlzLmNhcHRjaGEgPSBuZXcgQ2FwdGNoYU1vZGVsKHtcclxuXHRcdFx0XHRcdGNhcHRjaGFJbWc6IGNhcHRjaGFcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function FormCaptchaComponent_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jYXB0Y2hhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2Zvcm0tY29udHJvbHMvZm9ybS1jYXB0Y2hhL2Zvcm0tY2FwdGNoYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9CckMsTUFBTTs7Ozs7O0lBTUwsWUFDUyxTQUNBLE9BQ0E7Ozs7UUFGQSxZQUFPLEdBQVAsT0FBTztRQUNQLFVBQUssR0FBTCxLQUFLO1FBQ0wseUJBQW9CLEdBQXBCLG9CQUFvQjtRQU01QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUNELFFBQVE7UUFDUCxRQUFRLENBQUM7S0FDVDs7OztJQUNELE9BQU87UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO0tBQ3pFOzs7O0lBQ0QsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUM7Z0JBQy9CLFVBQVUsRUFBRSxPQUFPO2FBQ25CLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOzs7WUEvQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O09BWUo7Z0JBQ04sTUFBTSxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDekM7Ozs7WUF2QlEsa0JBQWtCO1lBSGxCLEtBQUs7WUFNTCx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5LCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZCwgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1DYXB0Y2hhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mb3JtLWNhcHRjaGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDYXB0Y2hhTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2NhcHRjaGEubW9kZWxcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL21haW4tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEZvcm1Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mb3JtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGliLWZvcm0tY2FwdGNoYVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gIDxpbWcgW3NyY109XCJjYXB0Y2hhLmNhcHRjaGFJbWdcIiAvPlxyXG5cclxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwicmVmcmVzaCgpXCI+XHJcbiAgICA8bWF0LWljb24+cmVmcmVzaDwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcblxyXG4gIDxkaXYgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYGltZ3tib3JkZXI6MXB4IHNvbGlkICNlNGU0ZTR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1DYXB0Y2hhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjYXB0Y2hhOiBDYXB0Y2hhTW9kZWw7XHJcblx0Y2FwdGNoYVNyYzogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBGb3JtQ2FwdGNoYVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogRm9ybUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHQvLyB0aGlzLmNhcHRjaGEgPSBuZXcgQ2FwdGNoYU1vZGVsKHtcclxuXHRcdC8vIFx0Y2FwdGNoYUltZzogXCJodHRwOi8vMTcyLjIyLjM0LjI4OjgwMDEvYXBpL2F1dGhlbnRpY2F0aW9uL2NhcHRjaGFcIlxyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0dGhpcy5fY2FwdGNoYV9nZW5lcmF0ZSgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdH1cclxuXHRyZWZyZXNoKCkge1xyXG5cdFx0dGhpcy5jYXB0Y2hhLmNhcHRjaGFJbWcgPSB0aGlzLl9jYXB0Y2hhX2dlbmVyYXRlKCkgKyBgPyR7TWF0aC5yYW5kb20oKX1gO1xyXG5cdH1cclxuXHRfY2FwdGNoYV9nZW5lcmF0ZSgpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5lbnYuc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5jYXB0Y2hhVXJsKSkuc3Vic2NyaWJlKGNhcHRjaGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY2FwdGNoYSA9IG5ldyBDYXB0Y2hhTW9kZWwoe1xyXG5cdFx0XHRcdFx0Y2FwdGNoYUltZzogY2FwdGNoYVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==
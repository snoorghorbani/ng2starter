/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { CaptchaModel } from "../../../models/captcha.model";
import { FormCaptchaService } from "../../../services/form-captcha.service";
var FormCaptchaComponent = /** @class */ (function () {
    function FormCaptchaComponent(service, store) {
        this.service = service;
        this.store = store;
        this.captcha = new CaptchaModel({
            captchaImg: "http://172.22.34.28:8001/api/authentication/captcha"
        });
        // this.captcha = new CaptchaModel;
    }
    /**
     * @return {?}
     */
    FormCaptchaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        debugger;
        // this.store.dispatch(new GetCaptchaAction());
    };
    /**
     * @return {?}
     */
    FormCaptchaComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.captcha.captchaImg = "http://172.22.34.28:8001/api/authentication/captcha?" + Math.random();
    };
    FormCaptchaComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-form-captcha",
                    template: "<div>\n  <img [src]=\"captcha.captchaImg\" />\n\n  <button (click)=\"refresh()\">refresh</button>\n\n  <div [formGroup]=\"group\">\n    <mat-form-field fxFlex>\n      <input matInput [id]=\"config.name\" [placeholder]=\"config.title\" [formControlName]=\"config.name\" />\n    </mat-form-field>\n  </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    FormCaptchaComponent.ctorParameters = function () { return [
        { type: FormCaptchaService },
        { type: Store }
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jYXB0Y2hhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2Zvcm0tY29udHJvbHMvZm9ybS1jYXB0Y2hhL2Zvcm0tY2FwdGNoYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztJQXNCM0UsOEJBQW9CLE9BQTJCLEVBQVUsS0FBaUI7UUFBdEQsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUM7WUFDL0IsVUFBVSxFQUFFLHFEQUFxRDtTQUNqRSxDQUFDLENBQUM7O0tBRUg7Ozs7SUFDRCx1Q0FBUTs7O0lBQVI7UUFDQyxRQUFRLENBQUM7O0tBRVQ7Ozs7SUFDRCxzQ0FBTzs7O0lBQVA7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyx5REFBdUQsSUFBSSxDQUFDLE1BQU0sRUFBSSxDQUFDO0tBQ2pHOztnQkFoQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwwVEFVSjtpQkFDTjs7OztnQkFmUSxrQkFBa0I7Z0JBTGxCLEtBQUs7OytCQUZkOztTQXVCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5LCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZmllbGQtY29uZmlnLm1vZGVsXCI7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9maWVsZC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9jYXB0Y2hhLm1vZGVsXCI7XHJcbmltcG9ydCB7IEZvcm1DYXB0Y2hhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mb3JtLWNhcHRjaGEuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGliLWZvcm0tY2FwdGNoYVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdj5cclxuICA8aW1nIFtzcmNdPVwiY2FwdGNoYS5jYXB0Y2hhSW1nXCIgLz5cclxuXHJcbiAgPGJ1dHRvbiAoY2xpY2spPVwicmVmcmVzaCgpXCI+cmVmcmVzaDwvYnV0dG9uPlxyXG5cclxuICA8ZGl2IFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwiY29uZmlnLm5hbWVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ2FwdGNoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y2FwdGNoYTogQ2FwdGNoYU1vZGVsO1xyXG5cdGNhcHRjaGFTcmM6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEZvcm1DYXB0Y2hhU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5jYXB0Y2hhID0gbmV3IENhcHRjaGFNb2RlbCh7XHJcblx0XHRcdGNhcHRjaGFJbWc6IFwiaHR0cDovLzE3Mi4yMi4zNC4yODo4MDAxL2FwaS9hdXRoZW50aWNhdGlvbi9jYXB0Y2hhXCJcclxuXHRcdH0pO1xyXG5cdFx0Ly8gdGhpcy5jYXB0Y2hhID0gbmV3IENhcHRjaGFNb2RlbDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdC8vIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldENhcHRjaGFBY3Rpb24oKSk7XHJcblx0fVxyXG5cdHJlZnJlc2goKSB7XHJcblx0XHR0aGlzLmNhcHRjaGEuY2FwdGNoYUltZyA9IGBodHRwOi8vMTcyLjIyLjM0LjI4OjgwMDEvYXBpL2F1dGhlbnRpY2F0aW9uL2NhcHRjaGE/JHtNYXRoLnJhbmRvbSgpfWA7XHJcblx0fVxyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormCaptchaService } from "../../../services/form-captcha.service";
import { CaptchaModel } from "../../../models/captcha.model";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jYXB0Y2hhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L2Zvcm0tY29udHJvbHMvZm9ybS1jYXB0Y2hhL2Zvcm0tY2FwdGNoYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQXlCNUQsOEJBQW9CLE9BQTJCLEVBQVUsS0FBZ0M7UUFBckUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUN4RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDO1lBQy9CLFVBQVUsRUFBRSxxREFBcUQ7U0FDakUsQ0FBQyxDQUFDOztLQUVIOzs7O0lBQ0QsdUNBQVE7OztJQUFSO1FBQ0MsUUFBUSxDQUFDOztLQUVUOzs7O0lBQ0Qsc0NBQU87OztJQUFQO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcseURBQXVELElBQUksQ0FBQyxNQUFNLEVBQUksQ0FBQTtLQUNoRzs7Z0JBaENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsMFRBVUo7aUJBQ047Ozs7Z0JBbkJRLGtCQUFrQjtnQkFIbEIsS0FBSzs7K0JBRmQ7O1NBeUJhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXksIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybUNhcHRjaGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2Zvcm0tY2FwdGNoYS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENhcHRjaGFNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvY2FwdGNoYS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHZXRDYXB0Y2hhQWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2FkZC9jYXB0Y2hhLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL21haW4tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFJlZnJlc2ggfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHMvc3JjL2FjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxpYi1mb3JtLWNhcHRjaGFcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXY+XHJcbiAgPGltZyBbc3JjXT1cImNhcHRjaGEuY2FwdGNoYUltZ1wiIC8+XHJcblxyXG4gIDxidXR0b24gKGNsaWNrKT1cInJlZnJlc2goKVwiPnJlZnJlc2g8L2J1dHRvbj5cclxuXHJcbiAgPGRpdiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIiAvPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNhcHRjaGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNhcHRjaGE6IENhcHRjaGFNb2RlbDtcclxuXHRjYXB0Y2hhU3JjOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBGb3JtQ2FwdGNoYVNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMuY2FwdGNoYSA9IG5ldyBDYXB0Y2hhTW9kZWwoe1xyXG5cdFx0XHRjYXB0Y2hhSW1nOiBcImh0dHA6Ly8xNzIuMjIuMzQuMjg6ODAwMS9hcGkvYXV0aGVudGljYXRpb24vY2FwdGNoYVwiXHJcblx0XHR9KTtcclxuXHRcdC8vIHRoaXMuY2FwdGNoYSA9IG5ldyBDYXB0Y2hhTW9kZWw7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHQvLyB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRDYXB0Y2hhQWN0aW9uKCkpO1xyXG5cdH1cclxuXHRyZWZyZXNoKCkge1xyXG5cdFx0dGhpcy5jYXB0Y2hhLmNhcHRjaGFJbWcgPSBgaHR0cDovLzE3Mi4yMi4zNC4yODo4MDAxL2FwaS9hdXRoZW50aWNhdGlvbi9jYXB0Y2hhPyR7TWF0aC5yYW5kb20oKX1gXHJcblx0fVxyXG5cclxufVxyXG4iXX0=
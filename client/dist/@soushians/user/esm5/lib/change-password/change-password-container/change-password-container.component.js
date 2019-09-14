/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { ChangePasswordModel } from "../../models/change-password.model";
import * as FeatureReducer from "../../user.reducers";
import { ChangePassword } from "../change-password.actions";
var ChangePasswordContainerComponent = /** @class */ (function () {
    function ChangePasswordContainerComponent(route, store) {
        this.route = route;
        this.store = store;
        this.formGroup = ChangePasswordModel.Request.formGroup;
        this.ChangePasswordModel = new ChangePasswordModel.Request();
    }
    /**
     * @return {?}
     */
    ChangePasswordContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.store.select(FeatureReducer.getAccountInfo).subscribe((/**
         * @param {?} userInfo
         * @return {?}
         */
        function (userInfo) {
            if (!userInfo)
                return;
            // TODO:
            // this.ChangePasswordModel.Username = userInfo.Username;
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ChangePasswordContainerComponent.prototype.changePassword = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.ChangePasswordModel.Password = this.formGroup.get("Password").value;
        this.store.dispatch(new ChangePassword(this.ChangePasswordModel));
    };
    ChangePasswordContainerComponent.decorators = [
        { type: Component, args: [{
                    template: "<user-change-password\n                (submited)='changePassword($event)'\n                [formGroup]=\"formGroup\"\n              ></user-change-password>"
                }] }
    ];
    /** @nocollapse */
    ChangePasswordContainerComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return ChangePasswordContainerComponent;
}());
export { ChangePasswordContainerComponent };
if (false) {
    /** @type {?} */
    ChangePasswordContainerComponent.prototype.formGroup;
    /** @type {?} */
    ChangePasswordContainerComponent.prototype.ChangePasswordModel;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordContainerComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordContainerComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFekUsT0FBTyxLQUFLLGNBQWMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQ7SUFTQywwQ0FBb0IsS0FBcUIsRUFBVSxLQUFxQztRQUFwRSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdDO1FBRnhGLGNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ2xELHdCQUFtQixHQUFHLElBQUksbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbUMsQ0FBQzs7OztJQUU1RixtREFBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsUUFBUTtZQUNsRSxJQUFJLENBQUMsUUFBUTtnQkFBRSxPQUFPO1lBQ3RCLFFBQVE7WUFDUix5REFBeUQ7UUFDMUQsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUNELHlEQUFjOzs7O0lBQWQsVUFBZSxLQUFLO1FBQ25CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXpFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBdEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsK0pBRzRCO2lCQUN0Qzs7OztnQkFkUSxjQUFjO2dCQUVkLEtBQUs7O0lBOEJkLHVDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FqQlksZ0NBQWdDOzs7SUFDNUMscURBQWtEOztJQUNsRCwrREFBd0Q7Ozs7O0lBQzVDLGlEQUE2Qjs7Ozs7SUFBRSxpREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWxcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSBcIi4uL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDx1c2VyLWNoYW5nZS1wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgKHN1Ym1pdGVkKT0nY2hhbmdlUGFzc3dvcmQoJGV2ZW50KSdcclxuICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCJcclxuICAgICAgICAgICAgICA+PC91c2VyLWNoYW5nZS1wYXNzd29yZD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Zm9ybUdyb3VwID0gQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRDaGFuZ2VQYXNzd29yZE1vZGVsID0gbmV3IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCgpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pLnN1YnNjcmliZSh1c2VySW5mbyA9PiB7XHJcblx0XHRcdGlmICghdXNlckluZm8pIHJldHVybjtcclxuXHRcdFx0Ly8gVE9ETzpcclxuXHRcdFx0Ly8gdGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsLlVzZXJuYW1lID0gdXNlckluZm8uVXNlcm5hbWU7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Y2hhbmdlUGFzc3dvcmQoZXZlbnQpIHtcclxuXHRcdHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbC5QYXNzd29yZCA9IHRoaXMuZm9ybUdyb3VwLmdldChcIlBhc3N3b3JkXCIpLnZhbHVlO1xyXG5cclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVBhc3N3b3JkKHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbCkpO1xyXG5cdH1cclxufVxyXG4iXX0=
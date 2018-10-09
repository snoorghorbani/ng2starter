/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { ChangePasswordModel } from "../../models";
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
        this.store.select(FeatureReducer.getAccountInfo).subscribe(function (userInfo) {
            if (!userInfo)
                return;
            // TODO:
            // this.ChangePasswordModel.Username = userInfo.Username;
        });
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
                },] },
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
    /** @type {?} */
    ChangePasswordContainerComponent.prototype.route;
    /** @type {?} */
    ChangePasswordContainerComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRW5ELE9BQU8sS0FBSyxjQUFjLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQVczRCwwQ0FBb0IsS0FBcUIsRUFBVSxLQUFxQztRQUFwRSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdDO3lCQUY1RSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsU0FBUzttQ0FDM0IsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7S0FDcUM7Ozs7SUFFNUYsbURBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDbEUsSUFBSSxDQUFDLFFBQVE7Z0JBQUUsT0FBTzs7O1NBR3RCLENBQUMsQ0FBQztLQUNIOzs7OztJQUNELHlEQUFjOzs7O0lBQWQsVUFBZSxLQUFLO1FBQ25CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXpFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7S0FDbEU7O2dCQXRCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLCtKQUc0QjtpQkFDdEM7Ozs7Z0JBZFEsY0FBYztnQkFFZCxLQUFLOzsyQ0FKZDs7U0FpQmEsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSBcIi4uL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDx1c2VyLWNoYW5nZS1wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgKHN1Ym1pdGVkKT0nY2hhbmdlUGFzc3dvcmQoJGV2ZW50KSdcclxuICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCJcclxuICAgICAgICAgICAgICA+PC91c2VyLWNoYW5nZS1wYXNzd29yZD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Zm9ybUdyb3VwID0gQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRDaGFuZ2VQYXNzd29yZE1vZGVsID0gbmV3IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCgpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pLnN1YnNjcmliZSh1c2VySW5mbyA9PiB7XHJcblx0XHRcdGlmICghdXNlckluZm8pIHJldHVybjtcclxuXHRcdFx0Ly8gVE9ETzpcclxuXHRcdFx0Ly8gdGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsLlVzZXJuYW1lID0gdXNlckluZm8uVXNlcm5hbWU7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Y2hhbmdlUGFzc3dvcmQoZXZlbnQpIHtcclxuXHRcdHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbC5QYXNzd29yZCA9IHRoaXMuZm9ybUdyb3VwLmdldChcIlBhc3N3b3JkXCIpLnZhbHVlO1xyXG5cclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVBhc3N3b3JkKHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbCkpO1xyXG5cdH1cclxufVxyXG4iXX0=
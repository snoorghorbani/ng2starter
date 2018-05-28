/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { ChangePasswordModel } from "../../models";
import * as FeatureReducer from "../../feature/feature.reducers";
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
        this.store.select(FeatureReducer.getUserInfo).subscribe(function (userInfo) {
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
function ChangePasswordContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangePasswordContainerComponent.prototype.formGroup;
    /** @type {?} */
    ChangePasswordContainerComponent.prototype.ChangePasswordModel;
    /** @type {?} */
    ChangePasswordContainerComponent.prototype.route;
    /** @type {?} */
    ChangePasswordContainerComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRW5ELE9BQU8sS0FBSyxjQUFjLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQVczRCwwQ0FBb0IsS0FBcUIsRUFBVSxLQUF5QztRQUF4RSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW9DO3lCQUZoRixtQkFBbUIsQ0FBQyxPQUFPLENBQUMsU0FBUzttQ0FDM0IsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7S0FDMEM7Ozs7SUFFakcsbURBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDaEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQUMsTUFBTSxDQUFDOzs7U0FHdEIsQ0FBQyxDQUFDO0tBQ0g7Ozs7O0lBQ0QseURBQWM7Ozs7SUFBZCxVQUFlLEtBQUs7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztLQUNsRTs7Z0JBdEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsK0pBRzRCO2lCQUN0Qzs7OztnQkFkUSxjQUFjO2dCQUVkLEtBQUs7OzJDQUpkOztTQWlCYSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL2ZlYXR1cmUvZmVhdHVyZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gXCIuLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1jaGFuZ2UtcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIChzdWJtaXRlZCk9J2NoYW5nZVBhc3N3b3JkKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiXHJcbiAgICAgICAgICAgICAgPjwvdXNlci1jaGFuZ2UtcGFzc3dvcmQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZvcm1Hcm91cCA9IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0Q2hhbmdlUGFzc3dvcmRNb2RlbCA9IG5ldyBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuRmVhdHVyZVN0YXRlPikgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0VXNlckluZm8pLnN1YnNjcmliZSgodXNlckluZm8pID0+IHtcclxuXHRcdFx0aWYgKCF1c2VySW5mbykgcmV0dXJuO1xyXG5cdFx0XHQvLyBUT0RPOlxyXG5cdFx0XHQvLyB0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwuVXNlcm5hbWUgPSB1c2VySW5mby5Vc2VybmFtZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjaGFuZ2VQYXNzd29yZChldmVudCkge1xyXG5cdFx0dGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsLlBhc3N3b3JkID0gdGhpcy5mb3JtR3JvdXAuZ2V0KFwiUGFzc3dvcmRcIikudmFsdWU7XHJcblxyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlUGFzc3dvcmQodGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
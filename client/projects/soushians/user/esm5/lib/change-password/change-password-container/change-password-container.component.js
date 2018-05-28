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
    /**
     * @param {?} route
     * @param {?} store
     */
    function ChangePasswordContainerComponent(route, store) {
        this.route = route;
        this.store = store;
        this.formGroup = ChangePasswordModel.Request.formGroup;
        this.ChangePasswordModel = new ChangePasswordModel.Request();
    }
    /**
     * @return {?}
     */
    ChangePasswordContainerComponent.prototype.ngOnInit = function () {
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
    ChangePasswordContainerComponent.prototype.changePassword = function (event) {
        this.ChangePasswordModel.Password = this.formGroup.get("Password").value;
        this.store.dispatch(new ChangePassword(this.ChangePasswordModel));
    };
    return ChangePasswordContainerComponent;
}());
export { ChangePasswordContainerComponent };
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
//# sourceMappingURL=change-password-container.component.js.map

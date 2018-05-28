/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../../feature/feature.reducers";
var ProfileContainerComponent = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function ProfileContainerComponent(store) {
        this.store = store;
        this.data$ = this.store.select(FeatureReducer.getUser);
        this.dataStatus$ = this.store.select(FeatureReducer.getUserInforamtionStatus);
    }
    /**
     * @return {?}
     */
    ProfileContainerComponent.prototype.ngOnInit = function () { };
    return ProfileContainerComponent;
}());
export { ProfileContainerComponent };
ProfileContainerComponent.decorators = [
    { type: Component, args: [{
                template: "<user-profile\n                [information]=\"data$\"\n                [dataStatus$]='dataStatus$'\n            ></user-profile>"
            },] },
];
/** @nocollapse */
ProfileContainerComponent.ctorParameters = function () { return [
    { type: Store }
]; };
function ProfileContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ProfileContainerComponent.prototype.data$;
    /** @type {?} */
    ProfileContainerComponent.prototype.dataStatus$;
    /** @type {?} */
    ProfileContainerComponent.prototype.store;
}
//# sourceMappingURL=profile-container.component.js.map

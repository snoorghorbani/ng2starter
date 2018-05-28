/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../../feature/feature.reducers";
export class ProfileContainerComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.data$ = this.store.select(FeatureReducer.getUser);
        this.dataStatus$ = this.store.select(FeatureReducer.getUserInforamtionStatus);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ProfileContainerComponent.decorators = [
    { type: Component, args: [{
                template: `<user-profile
                [information]="data$"
                [dataStatus$]='dataStatus$'
            ></user-profile>`
            },] },
];
/** @nocollapse */
ProfileContainerComponent.ctorParameters = () => [
    { type: Store }
];
function ProfileContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ProfileContainerComponent.prototype.data$;
    /** @type {?} */
    ProfileContainerComponent.prototype.dataStatus$;
    /** @type {?} */
    ProfileContainerComponent.prototype.store;
}
//# sourceMappingURL=profile-container.component.js.map

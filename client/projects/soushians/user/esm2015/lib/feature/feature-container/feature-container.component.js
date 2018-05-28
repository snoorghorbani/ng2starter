/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { ProfileViewModel } from "../../models";
import { Search } from "../../search-account";
export class FeatureContainerComponent {
    /**
     * @param {?} route
     * @param {?} store
     */
    constructor(route, store) {
        this.route = route;
        this.store = store;
        this.route.params.subscribe((params) => {
            let /** @type {?} */ model = new ProfileViewModel.Request(/** @type {?} */ ({ Email: params["Email"] }));
            this.store.dispatch(new Search(model));
        });
    }
}
FeatureContainerComponent.decorators = [
    { type: Component, args: [{
                template: "<router-outlet></router-outlet>"
            },] },
];
/** @nocollapse */
FeatureContainerComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Store }
];
function FeatureContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FeatureContainerComponent.prototype.route;
    /** @type {?} */
    FeatureContainerComponent.prototype.store;
}
//# sourceMappingURL=feature-container.component.js.map

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { ProfileViewModel } from "../../models";
import { Search } from "../../search-account";
var FeatureContainerComponent = /** @class */ (function () {
    /**
     * @param {?} route
     * @param {?} store
     */
    function FeatureContainerComponent(route, store) {
        var _this = this;
        this.route = route;
        this.store = store;
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ model = new ProfileViewModel.Request(/** @type {?} */ ({ Email: params["Email"] }));
            _this.store.dispatch(new Search(model));
        });
    }
    return FeatureContainerComponent;
}());
export { FeatureContainerComponent };
FeatureContainerComponent.decorators = [
    { type: Component, args: [{
                template: "<router-outlet></router-outlet>"
            },] },
];
/** @nocollapse */
FeatureContainerComponent.ctorParameters = function () { return [
    { type: ActivatedRoute },
    { type: Store }
]; };
function FeatureContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FeatureContainerComponent.prototype.route;
    /** @type {?} */
    FeatureContainerComponent.prototype.store;
}
//# sourceMappingURL=feature-container.component.js.map
